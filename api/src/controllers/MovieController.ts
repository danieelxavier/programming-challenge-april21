import { Request, Response } from 'express';

const moviesJson = require('./../../res/movies.json');
const genresJson = require('./../../res/genres.json');

let moviesDict: { [id: number]: any } = {};

for(let element of moviesJson){
    let id: number = element.id;
    moviesDict[id] = element;
}

export default {
    async index(req: Request, res: Response) {
        return res.json(moviesJson);
    },

    async movie(req: Request, res: Response) {

        let id: number = +req.params.id;

        for (let movie of moviesJson) {
            if (movie.id == id) {
                return res.json(movie);
            }
        }

        return res.json({});
    },

    async year(req: Request, res: Response) {

        let year: number = +req.params.year;
        let moviesOfYear = [];

        for (let movie of moviesJson) {
            if (movie.releaseYear == year) {
                moviesOfYear.push(movie);
            }
        }

        return res.json(moviesOfYear);
    },

    async genre(req: Request, res: Response) {

        let genre = req.params.genre.toLowerCase();

        if (genresJson[genre]) {
            let movies = [];
            for (let movie of genresJson[genre]) {
                movies.push(moviesDict[movie]);
            }
            return res.json(movies);
        }

        return res.json([]);
    },

    async year_genre(req: Request, res: Response) {

        let year: number = +req.params.year;
        let genre = req.params.genre.toLowerCase();

        if (genresJson[genre]) {
            let movies = [];
            for (let movie of genresJson[genre]) {
                if (moviesDict[movie].releaseYear == year) {
                    movies.push(moviesDict[movie]);
                }
            }

            return res.json(movies);
        }

        return res.json([]);
    },

    async top_k(req: Request, res: Response) {

        let k: number = +req.params['k'];

        let moviesList = moviesJson;

        moviesList.sort((a: any, b: any) => (a.ratingAVG < b.ratingAVG) ? 1 : -1);

        return res.json(moviesList.slice(0, k));
    }
};