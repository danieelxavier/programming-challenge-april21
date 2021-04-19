import request from 'supertest'
import server from "../../routes";

describe('Movie Test Index [/movie/:id]', () => {
    it('should return 200 when list all movies without send :id', async done => {
        request(server)
        .get('/movies/')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err)
            expect(res.body).not.toMatchObject([])
            done()
        })
    })

    it('should return 200 & check response object', async done => {
        request(server)
        .get('/movies/1')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err)
            expect(res.body).toMatchObject({
                "id": 1,
                "title": "Toy Story (1995)",
                "genres": [
                    "Adventure",
                    "Animation",
                    "Children",
                    "Comedy",
                    "Fantasy"
                ],
                "releaseYear": 1995,
                "ratings": 57309,
                "ratingAVG": 3.893707794587238
            })
            done()
        })
    })

    it('should return 200 & empty body object when :id is not found', async done => {
        request(server)
        .get(`/movies/2222222`)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err)
            expect(res.body).toMatchObject({})
            done()
        })
    })

    it('should return 404 when :id is invalid', async done => {
        request(server)
        .get(`/movies/idinvalid`)
        .expect('Content-Type', /json/)
        .expect(404)
        .end((err, res) => {
            done()
        })
    })
})

describe('Movie Test Year [/movie/year/:year]', () => {
    it('should return 200 when list all movies by :year', async done => {
        request(server)
        .get('/movies/year/1998')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err)
            expect(res.body).not.toMatchObject([])
            done()
        })
    })

    it('should return 200 & empty body list when :year is not found', async done => {
        request(server)
        .get(`/movies/year/12`)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err)
            expect(res.body).toMatchObject([])
            done()
        })
    })

    it('should return 404 when :year is invalid', async done => {
        request(server)
        .get(`/movies/year/yearinvalid`)
        .expect('Content-Type', /json/)
        .expect(404)
        .end((err, res) => {
            done()
        })
    })

    it('should return 404 when :year is not sent', async done => {
        request(server)
        .get(`/movies/year/`)
        .expect('Content-Type', /json/)
        .expect(404)
        .end((err, res) => {
            done()
        })
    })
})

describe('Movie Test Genre [/movie/genre/:genre]', () => {
    it('should return 200 when list all movies by :genre', async done => {
        request(server)
        .get('/movies/genre/sci-fi')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err)
            expect(res.body).not.toMatchObject([])
            done()
        })
    })

    it('should return 200 & empty body list when :genre is not found', async done => {
        request(server)
        .get(`/movies/genre/notfound`)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err)
            expect(res.body).toMatchObject([])
            done()
        })
    })

    it('should return 404 when :genre is invalid', async done => {
        request(server)
        .get(`/movies/genre/256`)
        .expect('Content-Type', /json/)
        .expect(404)
        .end((err, res) => {
            done()
        })
    })

    it('should return 404 when :genre is not sent', async done => {
        request(server)
        .get(`/movies/genre/`)
        .expect('Content-Type', /json/)
        .expect(404)
        .end((err, res) => {
            done()
        })
    })
})

describe('Movie Test Year-Genre [/movie/year/:year/genre/:genre]', () => {
    it('should return 200 when list all movies by :year and :genre', async done => {
        request(server)
        .get('/movies/year/1998/genre/sci-fi')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err)
            expect(res.body).not.toMatchObject([])
            done()
        })
    })

    it('should return 200 & empty body list when :genre is not found', async done => {
        request(server)
        .get(`/movies/year/1998/genre/notfound`)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err)
            expect(res.body).toMatchObject([])
            done()
        })
    })

    it('should return 200 & empty body list when :year is not found', async done => {
        request(server)
        .get(`/movies/year/12/genre/sci-fi`)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err)
            expect(res.body).toMatchObject([])
            done()
        })
    })

    it('should return 404 when :genre is invalid', async done => {
        request(server)
        .get(`/movies/year/1998/genre/256`)
        .expect('Content-Type', /json/)
        .expect(404)
        .end((err, res) => {
            done()
        })
    })

    it('should return 404 when :year is invalid', async done => {
        request(server)
        .get(`/movies/year/invalid/genre/sci-fi`)
        .expect('Content-Type', /json/)
        .expect(404)
        .end((err, res) => {
            done()
        })
    })


    it('should return 404 when :genre is not sent', async done => {
        request(server)
        .get(`/movies/year/1998/genre/`)
        .expect('Content-Type', /json/)
        .expect(404)
        .end((err, res) => {
            done()
        })
    })

    it('should return 404 when :year is not sent', async done => {
        request(server)
        .get(`/movies/year/genre/sci-fi`)
        .expect('Content-Type', /json/)
        .expect(404)
        .end((err, res) => {
            done()
        })
    })

    it('should return 404 when :year and :genre is not sent', async done => {
        request(server)
        .get(`/movies/year/genre/`)
        .expect('Content-Type', /json/)
        .expect(404)
        .end((err, res) => {
            done()
        })
    })
})

describe('Movie Test Top-K [/movie/top/:k]', () => {
    it('should return 200 when list top :k movies by rating', async done => {
        request(server)
        .get('/movies/top/10')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err)
            expect(res.body).not.toMatchObject([])
            expect(res.body.length).toEqual(10)
            done()
        })
    })

    it('should return 404 when :k is invalid', async done => {
        request(server)
        .get(`/movies/top/-1`)
        .expect('Content-Type', /json/)
        .expect(404)
        .end((err, res) => {
            done()
        })
    })

    it('should return 404 when :k is not sent', async done => {
        request(server)
        .get(`/movies/top/`)
        .expect('Content-Type', /json/)
        .expect(404)
        .end((err, res) => {
            done()
        })
    })

})