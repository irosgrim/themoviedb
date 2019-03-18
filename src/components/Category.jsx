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
		const randomPage = Math.floor(Math.random() * 10 + 1);
		const baseUrl = this.props.baseurl;
		const whatToFetch = () => {
			switch (genre) {
				case 1234:
					return `${baseUrl}/trending/all/week?api_key=${api_key}&language=en-US`;
				case 12345:
					return `${baseUrl}/movie/top_rated?api_key=${api_key}&language=en-US`;
				default:
					return `${baseUrl}/discover/movie?api_key=${api_key}&with_genres=${genre}&page=${randomPage}&sort_by=popularity.desc`;
			}
		};
		fetch(whatToFetch())
			.then(response => {
				return response.json();
			})
			.then(data => {
				if (
					data.results.backdrop_path !== null ||
					data.results.backdrop_path !== undefined ||
					data.results.backdrop_path !== ''
				) {
					this.setState({ movies: data.results });
				}
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
								<img
									src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
									alt={movie.title}
									className="poster"
									title={movie.title}
								/>
							</figure>
						);
					})}
				</div>
			</article>
		);
	}
}
export default Category;
