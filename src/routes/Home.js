import React, { Component } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';
import Store from '../Store';
import logo from '../logo.svg';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json', {
      params: {
        sort_by: Store.getState().sort_by,
        limit: Store.getState().limit,
        genre: Store.getState().genre,
        query_term: Store.getState().query_term,
        minimum_rating: 0,
      }
    });
    console.log(movies);
    if(movies === undefined){
      this.props.history.push("/no-data");
    }
    this.setState({ movies: movies,  // 변수 이름이 같으면 축약 가능 ex) {movies}
                    isLoading: false, });
  }
  componentDidMount() {
    // 영화 데이터 로딩!
    console.log(Store.getState());
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return(
      <section className="container">
        {isLoading 
        ? <div className="loader">
            <img src={logo} className="App-logo" alt="logo" />
            <span className="loader__text">Now Loading...</span>
          </div>
        : <div className="movies">
          {movies.map(movie => {
            return (
            <Movie 
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
            );
          })}
          </div>
        }
      </section>
    );
  }
}

export default Home;