import React from 'react'

export default function MovieCard({ movie }) {
    return (
        <>
            <div className="MovieCard">
                <span>Imdb ID:{movie["imdbID"]}</span>
                <span id="label">{movie["Type"]}</span>
                <div>
                    <img src={movie["Poster"] ? movie["Poster"] : "https://via.placeholder.com/300"} alt="" height="300" width="300" />
                </div>
                <h4>{movie["Title"]}-{movie["Year"]}</h4>
                <button class="btn">View</button>
                <button class="btn2">Download</button>
            </div>
        </>
    )
}
