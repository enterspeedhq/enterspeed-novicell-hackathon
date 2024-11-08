function MovieList({page}: {
  page: Page
}) {
  const movieList = page as MovieList;
  
  return (
      <div>
        <h1>{movieList.headline}</h1>
        <div className="App-movie-list">
          {movieList.movies.map((movie, i) => (
            <div className="App-movie-list-item" key={i}>
              <div className="App-movie-list-image">
                <img src={movie.cover?.url} alt={movie.title} />
              </div>
              <div className="App-movie-list-info">
                <h2>{i+1}. {movie.title}</h2>
                Year: {movie.year}<br />
                Rating: {movie.rating}
              </div>
              <div className="App-movie-list-teaser">
                {movie.teaser}
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default MovieList;
