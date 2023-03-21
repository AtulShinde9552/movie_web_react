import React from 'react'
import { GlobaleContext } from './context'

const Search = () => {
  const {query, setQuery, isError}= GlobaleContext();
  return(
   <>
  <section className="search-section">
    <h2>Search Your Favourite movie</h2>
    <form action='#' onSubmit={(e)=>e.preventDefault()}>
  <div>
    <input type="text" placeholder='Search Here' value={query} onChange={(e)=>setQuery(e.target.value)} />
  </div>
    </form>
  <div className='card-error'>
  <p>{isError.show && isError.msg}</p>
  </div>

  </section>

 </>
 )
   
}

export default Search