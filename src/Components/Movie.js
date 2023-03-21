import React from 'react'
import { Link } from 'react-router-dom'
import { GlobaleContext } from './context'


const Movie = () => {
  const { movies, isLoading } = GlobaleContext()

  if (isLoading) {
    return (
      <div >
        <div className='loading'>Loading...</div>
      </div>
    )
   }
  return (
    <section className='movie-page'>
      <div className='container grid grid-4-col'>
        {movies.map((curMovie) => {
          return (
            <Link to={`movie/${curMovie.imdbID}`} key={curMovie.imdbID}>
              <div className='card'>
                <div className='card-info'>
                  <h2>{curMovie.Title.length > 13
                    ? `${curMovie.Title.slice(0,13)}...`
                    : curMovie.Title}</h2>
                  <img src={curMovie.Poster} alt={curMovie.imdbID} />
                </div>

              </div>

            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Movie