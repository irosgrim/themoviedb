import React, { Component } from 'react';
import Category from './Category';

class Movielibrary extends Component {
	constructor(props) {
		super(props);

		this.state = {
			genres: [
				{ id: 878, genre: 'Sci-fi Movies' },
				{ id: 28, genre: 'Action Movies' },
				{ id: 12, genre: 'Adventure Movies' },
				{ id: 35, genre: 'Comedy Movies' },
				{ id: 14, genre: 'Fantasy Movies' },
				{ id: 9648, genre: 'Mystery Movies' },
				{ id: 27, genre: 'Horror Movies' },
				{ id: 99, genre: 'Documentaries' }
			]
		};
	}
	render() {
		return (
			<section className="movie-library">
				{this.state.genres.map((category, index) => {
					return (
						<Category
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
