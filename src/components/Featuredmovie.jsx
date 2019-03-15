import React, { Component } from 'react';
class Featuredmovie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movie: []
		};
	}
	componentDidMount() {
		const api_key = process.env.REACT_APP_API_KEY;
		const randomMovie = Math.floor(Math.random() * 500 + 1);
		fetch(
			`https://api.themoviedb.org/3/movie/${randomMovie}?api_key=${api_key}`
		)
			.then(response => {
				return response.json();
			})
			.then(data => {
				this.setState({ movie: data });
			});
	}
	render() {
		return (
			<section
				className="featured-movie"
				style={{
					backgroundImage: `linear-gradient(110deg, black 35%, transparent 90%), linear-gradient(to bottom, transparent 80%, black 100%), url("https://image.tmdb.org/t/p/original${
						this.state.movie.backdrop_path
					}")`,
					backgroundSize: 'cover'
				}}>
				<article>
					<h2>{this.state.movie.title}</h2>
					<button className="button">+ My list</button>
					<p>{this.state.movie.overview}</p>
				</article>
			</section>
		);
	}
}
export default Featuredmovie;
