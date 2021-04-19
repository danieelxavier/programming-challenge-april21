import React from 'react'
import './MovieElement.css';

export default (item) => {
    return (
        <div className="movieElement">
            <div className="movieElement--title">{item.title}</div>
            <div className="movieElement--data">
                <div className="movieElement--data--sec">
                    <p className="movieElement--data--label">Release year: </p>
                    <p className="movieElement--data--info">{item.releaseYear}</p>
                </div>
                <div className="movieElement--data--sec">
                    <p className="movieElement--data--label">Rate: </p>
                    <p className="movieElement--data--info">{item.ratingAVG.toFixed(1)} </p>
                    <p className="movieElement--data--ratings">({item.ratings} ratings)</p>
                </div>
                <div className="movieElement--data--sec">
                    <p className="movieElement--data--label">Genres: </p>

                    <div className="movieElement--data--genresarea">
                        {item.genres.length > 0 && item.genres.map((it) => (
                            <p className="movieElement--data--genre">{it}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}