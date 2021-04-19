const API_BASE = 'http://localhost:3333'

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = req.json();
    return json;
}

export default {
    getMovies: async () => {
        return {
            items: await basicFetch(`/movies`)
        }
    },

    getMovie: async (id) => {
        return {
            items: await basicFetch(`/movies/${id}`)
        }
    },

    getMoviesByYear: async (year) => {
        return {
            items: await basicFetch(`/movies/year/${year}`)
        }

    },

    getMoviesByGenre: async (genre) => {
        return {
            items: await basicFetch(`/movies/genre/${genre}`)
        }

    },

    getMoviesByYearAndGenre: async (year, genre) => {
        return {
            items: await basicFetch(`/movies/year/${year}/genre/${genre}`)
        }
    },

    getTopRatingMovies: async (k) => {
        return {
            items: await basicFetch(`/movies/top/${k}`)
        }
    },

}