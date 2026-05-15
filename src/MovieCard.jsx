import React from "react";

const MovieCard = ({ movie }) => {
    const poster =
        movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Image";

    return (
        <article className="movie">
            <div className="movie-year">{movie.Year}</div>

            <div className="poster">
                <img src={poster} alt={movie.Title} />
            </div>

            <div className="info">
                <span className="type">{movie.Type}</span>
                <h3 className="title">{movie.Title}</h3>
            </div>
        </article>
    );
};

export default MovieCard;