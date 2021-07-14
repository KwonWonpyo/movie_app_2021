import React from 'react';
import axios from 'axios';
import './Detail.css';
import logo from '../logo.svg'

class Detail extends React.Component {
    state = {
        isLoading: true,        
    };
    componentDidMount() {
        const { location, history } = this.props;
        if (location.id === undefined) {
            history.push('/');
        }
        else {
            console.log(location);
            console.log(history);
            this.getMovieDetails(location.id);
        }
    }

    getMovieDetails = async (id) => {
        const { 
            data: {
                data: { movie },
            }
        } = await axios.get('https://yts.mx/api/v2/movie_details.json', {
            params: {
                movie_id: id
            }
        });
        console.log(movie);
        this.setState({ movie: movie,
                        isLoading: false, });
    }

    render() {
        const { location } = this.props;
        const { isLoading, movie } = this.state;
        if (isLoading === false && movie.title === null)
            return(
                <section className="no_info">
                    <p>No data</p>
                </section>
            );
        if (location.id)
            return (
                <section className="container">
                    {isLoading 
                    ? <div className="loader">
                        <img src={logo} className="App-logo" alt="logo" />
                        <span className="loader__text">Now Loading...</span>
                    </div>
                    : <div className="details">
                        <img src={movie.large_cover_image} alt={movie.title}/>
                        <span className="detail">
                            <h1 className="detail__title">{movie.title_long}</h1>
                            <ul className="detail__genres">
                                {movie.genres.map((genre, index) => {
                                return <li key={index} className="detail__genres">{genre}</li>;
                                })}
                            </ul>
                            <p className="detail__info">Rating: {movie.rating}</p>
                            <p className="detail__info">Runtime: {movie.runtime} mins</p>
                            <p className="detail__info">Language: {movie.language}</p>
                            <p className="detail__synopsis">{movie.description_full}</p>
                        </span>
                        <span className="detail">
                            <ul className="torrent">
                                {movie.torrents.map((torrent, index) => {
                                    return (
                                        <a key={index} href={torrent.url}>
                                            <li key={index} className="torrent">Download Torrent {index}</li>
                                        </a>
                                    );
                                })}
                            </ul>
                        </span>
                    </div>
                    }
                </section>
            );
        else
            return null;
    }
}

export default Detail;