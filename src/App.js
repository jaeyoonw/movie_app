import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import '../src/css/reset.css';
import '../src/css/App.css';
import '../src/css/Movie.css';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  getMovies = async() => {    // javascript에게 너는 이 함수가 끝날때 까지 기다려야 한다라고 알려준다 async 비동기
    const { data: { data: { movies }}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"); // 함수 내부의 어떤걸 기다리길 원해? await
    this.setState({ movies: movies, isLoading: false }) // 하나는 state의 movies , 다른 하나는 우리가 가져온 data의 movies
    // setState가 호출되면 다시 render()가 호출된 후, state가 update되었으니 마지막엔 componentDidUpdate()가 호출되고 끝난다.
    console.log(movies);
  }
  componentDidMount() { //밑에 render함수가 끝나고 나면 이것이 실행된다. 
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;   // Object destructuring
    return <section className="container"> 
      {isLoading ? 
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
         : 
        <div className="movies">
          {movies.map(movie => (
             <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} image={movie.medium_cover_image}  genres={movie.genres}
             />
             /* axios로 가져온 데이터를 Movie 컴포넌트의 props에 넣는다. */
          ))}
        </div>
    }</section>
  }
}

export default App;