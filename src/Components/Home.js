import Movie from './Movie'
import Search from './Search'


const Home = () => {

 
  return (
    <div className="container">
      <span style={{'color': 'red', 'fontSize': '30px', 'fontWeight': 'bolder'}}>AS</span>
      <span style={{'color': 'Green', 'fontSize': '20px', 'fontWeight': 'bolder', 'fontStyle': 'oblique'}}>MOVIES</span>

        <Search />
        <Movie />
    </div>
  )
}

export default Home