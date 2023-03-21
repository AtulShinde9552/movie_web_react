import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API_URL } from './context'

const SingleMovie = () => {
   const {id} = useParams()
  const [isLoading, setLoading]= useState(true)
  const [movies, setmovies]= useState('')


  const getmovies = async (url) => {
      try {
          const res = await fetch(url)
          const data = await res.json()
          if (data.Response === "True") {
              setmovies(data)
              setLoading(false)
              
          }
      } catch (error) {
          console.log(error)
      }
  }

  useEffect(() => {
   let timerout =  setTimeout(() => {
       getmovies(`${API_URL}&i=${id}`)
      }, 2000);
      return () => clearTimeout(timerout)
      // eslint-disable-next-line
  },[id])


 if (isLoading) {
  return (
    <div className='movie-section'>
      <div className='loading'>Loading...</div>
    </div>
  )
 }

  return (
    <section className='movie-section'>
      <div className='movie-card'>
        <figure>
        <img src={movies.Poster} alt="" />
        </figure>
        <div className='card-content'>
          <p className='title'>{movies.Title}</p>
          <p className='card-text'>{movies.Released}</p>
          <p className='card-text'>{movies.Genre}</p>
          <p className='card-text'>{movies.imdbRating}</p>
          <p className='card-text'>{movies.Country}</p>  
          <Link to='/' className='back-btn'>Go Back</Link>


        </div>
      </div>
    </section>
  )
}

export default SingleMovie