import React, { Component } from 'react';
import { getMovie, getMovies } from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from './common/pagination';

class Movies extends Component {
    state = { 
        movies: getMovies(), // it's not the right way, will learn more later 
        pageSize: 4
     }

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
        console.log(page);
    }
    render() {  

        const {length: count} = this.state.movies;

        if(count === 0)
            return <p>There is no movies in the database.</p>;

        return (
            <React.Fragment>
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
                    { this.state.movies.map(movie => (
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
            pageSize={ 10 }
            onPageChange={this.handlePageChange} 
            />

            </React.Fragment>
            );
    }
}
 
export default Movies;