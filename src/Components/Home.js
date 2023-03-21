import Movie from './Movie'
import Search from './Search'


const Home = () => {

 
  return (
    <div className="container">
      <h1>Wellcome To Home Page</h1>
        <Search />
        <Movie />
    </div>
  )
}

export default Home