import React from 'react';
import './Filter.css';
import Store from '../Store';

class Filter extends React.Component {
    state = {
        sort_by: Store.getState().sort_by,
        limit: Store.getState().limit,
        genre: Store.getState().genre,
        query_term: Store.getState().query_term,
        genres_list: ["Comedy", "Sci-Fi", "Horror", "Romance",
            "Action", "Thriller", "Drama", "Mystery", "Crime",
            "Animation", "Adventure", "Fantasy", "Comedy-Romance",
            "Action-Comedy", "Superhero", "Music", "Family"]
    }
    handleOptionChange = changeEvent => {
        this.setState({
            sort_by: changeEvent.target.value
        });
    };
    saveOption = e => {
        e.preventDefault();
        Store.dispatch({type:"SAVE", state: this.state});
        this.props.history.push("/");
    }
    render() {
        return(
            <div className="filter__container">
                <form action="/" method="post" onSubmit={this.saveOption}>
                    <h3>Show results sorted by</h3>
                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                name="sort_option"
                                value="title"
                                checked={this.state.sort_by === "title"}
                                onChange={this.handleOptionChange}
                                className="form-radio-input"
                            />
                        Title
                        </label>
                    </div>
                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                name="sort_option"
                                value="year"
                                checked={this.state.sort_by === "year"}
                                onChange={this.handleOptionChange}
                                className="form-radio-input"
                            />
                        Years
                        </label>
                    </div>
                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                name="sort_option"
                                value="rating"
                                checked={this.state.sort_by === "rating"}
                                onChange={this.handleOptionChange}
                                className="form-radio-input"
                            />
                        Rating
                        </label>
                    </div>
                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                name="sort_option"
                                value="download_count"
                                checked={this.state.sort_by === "download_count"}
                                onChange={this.handleOptionChange}
                                className="form-radio-input"
                            />
                        Download count
                        </label>
                    </div>
                    <h3>
                        <label> Show results upto (between 1 and 50): 
                            <input 
                                type="number"
                                name="limit"
                                min="1"
                                max="50"
                                value={this.state.limit}
                                onChange={(e) => { this.setState({limit: e.target.value})}}
                                className="form-number-input"
                            />
                        </label>
                    </h3>
                    <h3>Genres</h3>
                        {this.state.genres_list.map((genre, index) => {
                            return (
                                <label key={index}>
                                    <input 
                                        type="checkbox"
                                        name="set_genre"
                                        value={genre}
                                        checked={this.state.genre === genre}
                                        onChange={(e) => { this.setState({genre: e.target.value})}}
                                        className="form-check-input"
                                    />
                                    {genre}
                                </label>
                            );
                        })}
                        <p><label>
                            <input
                                type="checkbox"
                                name="All"
                                value=""
                                checked={this.state.genre === ""}
                                onChange={(e) => { this.setState({genre: e.target.value})}}
                                className="form-check-input"
                            />
                            Show All
                        </label></p>
                    <h3>
                        <label> Search by keyword: 
                            <input
                                type="text"
                                name="keyword"
                                onChange={(e) => { this.setState({query_term: e.target.value})}}
                                value={this.state.query_term === "0" ? "any keyword" : this.state.query_term}
                                className="form-text-input"
                            />
                        </label>
                    </h3>
                    <p><input type="submit" value="Save Option"></input></p>
                </form>
            </div>
        );
    }
}

export default Filter;