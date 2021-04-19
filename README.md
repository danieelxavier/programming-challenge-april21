This project has as dependencies the following tools:
-  [Node.js](https://nodejs.org/en/)
- [Python](https://www.python.org/)
- [Yarn](https://yarnpkg.com/)

This project is divided by two parts, front-end app and back-end api.

## Back-end app

### Overview
This project utilize following technologies:
- [Javascript](https://www.javascript.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [Python](https://www.python.org/)
- [Yarn](https://yarnpkg.com/)

I decided utilize Node.js by simplicity to create simple APIs.

As the used information is only for consultation, I thought it not necessary to include the cost of time and the complexity of maintaining a database system. The program loads the data from two json files, one file stores movies information and other file stores the relationships between movies and genres.

> I made a mistake when scripting data preprocessing using Python. When I reviewed the rules and saw that Python was not among the available technologies, there was no more time to fix it. My mistake.

### Running

> This project uses *"movies.csv"* and *"ratings.csv"* files from [MovieLens](https://grouplens.org/datasets/movielens/) dataset. This dataset files is necessary.

1) Install all dependencies:
`$ yarn install`

2) Load data from dataset:
`$ yarn load-data <PATH_TO_DATASET_FOLDER>`

3) Run server:
`$ yarn dev:server`


**This API project contain unit tests.**
- Run unit tests
`$ yarn test`

### Usage
- GET all movies:
- Endpoint: `http://localhost:3333/movies`

- GET a movie by id:
`http://localhost:3333/movies/:id`

- GET all movies by year:
`http://localhost:3333/movies/:year`

- GET all movies of a genre:
`http://localhost:3333/movies/genre/:genre`

- GET movies filtered by year and genre:
`http://localhost:3333/movies/year/:year/genre/:genre`

- GET top K movies by AVG rating:
`http://localhost:3333/movies/top/:k`

## Front-end app

### Overview
This project utilize following technologies:
- [Javascript](https://www.javascript.com/)
- [React](https://reactjs.org/)
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
- [HTML](https://html.com/)
- [Yarn](https://yarnpkg.com/)

This front-end project is a React application, a powerful and successful Javascript library to create web applications. React allow us initiate web app easily.

I use only tools provided by  yarn (package manager).

### Running
At directory  *"movies-app/"*

1) Install all dependencies:
`$ yarn install`

2) Run app:
`$ yarn start`
