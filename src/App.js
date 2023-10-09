import React from 'react';
import Movie from './Components/Movie'; // Movie 컴포넌트를 가져옵니다.
import { movies } from './movieDummy'; // 영화 데이터를 가져옵니다.

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <div className="movie-list">
          {movies.results.map((movie) => (
            <Movie
              key={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
              voteAverage={movie.vote_average}
              overview={movie.overview}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
