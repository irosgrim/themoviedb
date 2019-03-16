import React, { Component } from 'react';

class Category extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: []
		};
	}
	componentDidMount() {
		const api_key = process.env.REACT_APP_API_KEY;
		const genre = this.props.genre;
		const randomPage = Math.floor(Math.random() * 50 + 1);
		fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${genre}&page=${randomPage}&sort_by=popularity.desc`
		)
			.then(response => {
				return response.json();
			})
			.then(data => {
				this.setState({ movies: data.results });
			});
	}
	render() {
		return (
			<article className="category">
				<header>
					<h2>{this.props.category}</h2>
				</header>
				<div className="horizontal-scroll">
					{this.state.movies.map(movie => {
						return (
							<figure
								key={movie.id}
								onClick={this.props.handlepictureclicked.bind(this, movie)}>
								{movie.backdrop_path && (
									<img
										src={`https://image.tmdb.org/t/p/w300/${
											movie.backdrop_path
										}`}
										alt={movie.title}
										className="poster"
									/>
								)}
							</figure>
						);
					})}
				</div>
			</article>
		);
	}
}
export default Category;
