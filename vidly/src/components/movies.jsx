import React, { Component } from 'react';
import { getMovie, getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Like from './common/like';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
// import _ from 'lodash';
import { paginate } from '../utils/paginate';

class Movies extends Component {
    state = { 
        movies: [], // it's not the right way, will learn more later 
        genres: [],
        pageSize: 4,
        currentPage: 1
     }

     componentDidMount() {
        this.setState({ movies: getMovies(), genres: getGenres() });
     };
     handleDelete = (movie) => {
        console.log(movie);
        //filter movies array to exculde the deleted one
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        //updating the state
        this.setState({movies});
     };

    handleLike = movie => {
        console.log("Like Cliked", movie);
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;

        this.setState({ movies });
    };

    handlePageChange = page => {
        this.setState({currentPage: page});
    };

    handleGenreSelect = genre => {
        this.setState({selectedGenre: genre})
    };

    render() {  

        const {length: count} = this.state.movies;
        const {currentPage, pageSize, movies: allMovies} = this.state;
        if(count === 0)
            return <p>There is no movies in the database.</p>;

            const movies = paginate(allMovies, currentPage, pageSize);

        return (
            <div className='row'>
                <div className="col-3">
                    <ListGroup 
                    items={this.state.genres} 
                    selectedItem={this.state.selectedGenre}
                    onItemSelect={this.handleGenreSelect} 
                    />
                </div>

                <div className="col">
                    <p>Showing {count} movies in the database.</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Stock</th>
                                <th>Rate</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            { movies.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <Like 
                                    liked={movie.liked} 
                                    onClick={() => this.handleLike(movie)} 
                                    />
                                </td>
                                <td><button onClick={ () => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                            ))}
                        </tbody>
                    </table>

                    <Pagination 
                    itemsCount={ count }
                    pageSize={ pageSize }
                    currentPage={ currentPage }
                    onPageChange={this.handlePageChange} 
                    />
                </div>

            </div>
            );
    }
}
 
export default Movies;