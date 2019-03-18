import React, { Component } from 'react';
import Category from './Category';

class Movielibrary extends Component {
	constructor(props) {
		super(props);

		this.state = {
			baseurl: 'https://api.themoviedb.org/3',
			genres: [
				{ id: 1234, genre: 'Trending Movies' },
				{ id: 12345, genre: 'Top Rated Movies' },
				{ id: 878, genre: 'Sci-fi Movies' },
				{ id: 28, genre: 'Action Movies' },
				{ id: 12, genre: 'Adventure Movies' },
				{ id: 35, genre: 'Comedy Movies' },
				{ id: 14, genre: 'Fantasy Movies' },
				{ id: 9648, genre: 'Mystery Movies' },
				{ id: 27, genre: 'Horror Movies' },
				{ id: 99, genre: 'Documentaries' },
				{ id: 16, genre: 'Animated Movies' }
			]
		};
	}
	render() {
		return (
			<section className="movie-library">
				{this.state.genres.map((category, index) => {
					return (
						<Category
							baseurl={this.state.baseurl}
							category={category.genre}
							handlepictureclicked={this.props.handlepictureclicked}
							genre={category.id}
							key={index}
						/>
					);
				})}
			</section>
		);
	}
}

export default Movielibrary;
