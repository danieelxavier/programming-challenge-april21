import sys
import json
import pathlib
from json import JSONEncoder
from csv import reader


class Movie:
    def __init__(self, movieId, title, genres, releaseYear):
        self.id = movieId
        self.title = title
        self.genres = genres
        self.releaseYear = releaseYear
        self.ratings = 0
        self.ratingAVG = 0.0


class Encoder(JSONEncoder):
    def default(self, o):
        return o.__dict__


if (len(sys.argv) < 3):
    print('Missing argument')
    print('Example: yarn load-data <PATH_TO_DATASET_DIRECTORY>')
    exit()

path = sys.argv[2]

movies = {}
ratings = {}

print('Loading CSV movies data ...')
with open(path + '/movies.csv', 'r') as read_obj:
    csv_reader = reader(read_obj)
    header = next(csv_reader)

    # Check file as empty
    if header != None:
        for row in csv_reader:
            movieId = int(row[0].strip())
            movieTitle = row[1].strip()
            movieGenres = row[2].split('|')
            year = movieTitle[-6:][1:-1]
            movieYear = int(year) if year.isdigit() else 0

            movie = Movie(movieId, movieTitle, movieGenres, movieYear)
            movies[movieId] = movie
            ratings[movieId] = []

print('Loading CSV ratings data ...')
with open(path + './ratings.csv', 'r') as read_obj:
    csv_reader = reader(read_obj)
    header = next(csv_reader)
    # Check file as empty
    if header != None:
        # Iterate over each row after the header in the csv
        for row in csv_reader:
            # row variable is a list that represents a row in csv
            movieId = int(row[1].strip())
            rate = float(row[2].strip())
            ratings[movieId].append(rate)

print('Proccess output data ...')
moviesList = []
genres = {}
for key, value in movies.items():
    if len(ratings[key]) > 0:
        value.ratings = len(ratings[key])
        value.ratingAVG = sum(ratings[key]) / len(ratings[key])

    moviesList.append(value)

    for genre in value.genres:
        auxGenre = genre.strip().lower()
        if auxGenre not in genres:
            genres[auxGenre] = []

        genres[auxGenre].append(key)


print('Generate output data ...')
moviesJsonStr = json.dumps(moviesList, indent=4, cls=Encoder)
genresJsonStr = json.dumps(genres, indent=4, cls=Encoder)

pathlib.Path('res').mkdir(parents=True, exist_ok=True)

with open('res/movies.json', 'w') as f:
    f.writelines(moviesJsonStr)

with open('res/genres.json', 'w') as f:
    f.writelines(genresJsonStr)
