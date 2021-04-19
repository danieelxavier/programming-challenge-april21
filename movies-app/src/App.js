import React, { useState } from 'react';
import './App.css';
import Movies from './Movies';
import MovieList from './components/MovieElement';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [pageTitle, setPageTitle] = useState('');


  const getTopRatingMovies = async (k) => {
    let obj = await Movies.getTopRatingMovies(k);
    setMovieList(obj.items);
    setPageTitle(`Top ${k} rated Movies`);

    if(obj.items.length === 0) {
      document.getElementById('movies').style.visibility = "hidden";
      document.getElementById('no-result').style.visibility = "visible";
    } else {
      document.getElementById('movies').style.visibility = "visible";
      document.getElementById('no-result').style.visibility = "hidden";
    }
  }

  const getMoviesByYear = async (year) => {
    console.log(year);
    let obj = await Movies.getMoviesByYear(year);
    setMovieList(obj.items);
    setPageTitle(`Movies of ${year}`);

    if(obj.items.length === 0) {
      document.getElementById('movies').style.visibility = "hidden";
      document.getElementById('no-result').style.visibility = "visible";
    } else {
      document.getElementById('movies').style.visibility = "visible";
      document.getElementById('no-result').style.visibility = "hidden";
    }
  }

  const getMoviesByGenre = async (genre) => {
    let obj = await Movies.getMoviesByGenre(genre);
    setMovieList(obj.items);
    setPageTitle(`${genre} movies`);

    if(obj.items.length === 0) {
      document.getElementById('movies').style.visibility = "hidden";
      document.getElementById('no-result').style.visibility = "visible";
    } else {
      document.getElementById('movies').style.visibility = "visible";
      document.getElementById('no-result').style.visibility = "hidden";
    }
  }

  const getMoviesByYearAndGenre = async (year, genre) => {
    let obj = await Movies.getMoviesByYearAndGenre(year, genre);
    setMovieList(obj.items);
    setPageTitle(`${genre} movies of ${year}`);

    if(obj.items.length === 0) {
      document.getElementById('movies').style.visibility = "hidden";
      document.getElementById('no-result').style.visibility = "visible";
    } else {
      document.getElementById('movies').style.visibility = "visible";
      document.getElementById('no-result').style.visibility = "hidden";
    }
  }

  const loadMovies = async () => {
    let year = document.getElementById('year-input-2').value;
    let genre = document.getElementById('genre-input-2').value;

    if (year.length > 0 && genre.length > 0) {
      getMoviesByYearAndGenre(year, genre);
    } else if (year.length > 0) {
      getMoviesByYear(year);
    } else if (genre.length > 0) {
      getMoviesByGenre(genre);
    }
  }

  return (
    <div className="page">

      <div className="page--forms">
        <div className="page--forms--input">
          <div className="page--forms--label">
            <label>
              Year: <br/>
              <input id="year-input-2" />
            </label> <br/>
          </div>

          <div className="page--forms--label">
            <label>
              Genre: <br/>
              <select id="genre-input-2">
                <option value=""></option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Animation">Animation</option>
                <option value="Children">Children's</option>
                <option value="Comedy">Comedy</option>
                <option value="Crime">Crime</option>
                <option value="Documentary">Documentary</option>
                <option value="Drama">Drama</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Film-Noir">Film-Noir</option>
                <option value="Horror">Horror</option>
                <option value="Musical">Musical</option>
                <option value="Mystery">Mystery</option>
                <option value="Romance">Romance</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Thriller">Thriller</option>
                <option value="War">War</option>
                <option value="Western">Western</option>
              </select>
            </label> <br/>
          </div>

          <button onClick={() => loadMovies()}>
            Load movies:
          </button>
        </div>

        <div className="page--forms--input">
          <div className="page--forms--label">
            <label>
              Number of K results: <br/>
              <input id="k-input" />
            </label> <br/>
          </div>
          <button onClick={() => getTopRatingMovies(document.getElementById('k-input').value)}>
            Top K rated Movies
          </button>
        </div>
      </div>

      <section className="movies" id="movies">
        <h2>{pageTitle}</h2>
        <div className="moviesList">
          {movieList.map((item) => (
            <div>
              <MovieList title={item.title}
                         genres={item.genres}
                         ratingAVG={item.ratingAVG}
                         releaseYear={item.releaseYear}
                         ratings={item.ratings}/>
            </div>
          ))}
        </div>
      </section>

      <section className="noresult" id="no-result">
        <h2>{pageTitle}</h2>
        <div className="moviesList">
          <p>No results :( </p>
        </div>
      </section>

    </div>
  );
}