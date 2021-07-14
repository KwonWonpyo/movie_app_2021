import React, { Component } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';
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
        sort_by: "rating",
        limit: 20,
        genres: "all",
        query_term: "0",
        minimum_rating: 0,
      }
    });
    console.log(movies);
    this.setState({ movies: movies,  // 변수 이름이 같으면 축약 가능 ex) {movies}
                    isLoading: false, });
  }
  componentDidMount() {
    // 영화 데이터 로딩!
    this.getMovies();
  }
  componentDidUpdate() {
  }
  componentWillUnmount() {
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