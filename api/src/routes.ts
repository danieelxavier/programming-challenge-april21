import Router from 'express';
import MovieController from './controllers/MovieController';

const routes = Router();

routes.get('/movies', MovieController.index);
routes.get('/movies/:id([0-9]+)', MovieController.movie);
routes.get('/movies/year/:year([0-9]+)', MovieController.year);
routes.get('/movies/genre/:genre([a-z-]+)', MovieController.genre);
routes.get('/movies/year/:year([0-9]+)/genre/:genre([a-z-]+)', MovieController.year_genre);
routes.get('/movies/top/:k([0-9]+)', MovieController.top_k);

export default routes;