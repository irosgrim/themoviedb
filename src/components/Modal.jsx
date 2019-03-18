import React, { Component } from 'react';

class Modal extends Component {
	constructor() {
		super();
		this.handleAddToMyList = this.handleAddToMyList.bind(this);
		this.state = { trailerUrl: ['AcL0MeVZIxM'] };
	}
	handleAddToMyList() {
		this.props.handleaddtomylist(this.props.movieinfo.id);
	}
	componentDidMount() {
		const api_key = process.env.REACT_APP_API_KEY;
		fetch(
			`https://api.themoviedb.org/3/movie/${
				this.props.movieinfo.id
			}?api_key=${api_key}&append_to_response=videos`
		)
			.then(response => response.json())
			.then(data => {
				if (
					data.status_code !== 34 &&
					(data.videos.results !== '' ||
						data.videos.results !== null ||
						data.videos.results !== undefined)
				) {
					this.setState({ trailerUrl: data.videos.results });
				} else {
					this.setState({ trailerUrl: [] });
				}
			});
	}

	render() {
		console.log(this.state.trailerUrl);
		return (
			<div
				className="modal"
				style={{
					display: this.props.visible === true ? 'flex' : 'none',
					alignItems: 'center',
					justifyContent: 'center',
					position: 'fixed'
				}}
				onClick={this.props.closemodal}>
				<div
					className="modal-info"
					style={{
						backgroundImage: `linear-gradient(90deg, black 50%, transparent 100%), url("https://image.tmdb.org/t/p/original/${
							this.props.movieinfo.backdrop_path
						}"`,
						backgroundPosition: 'left top, 20vw top',
						backgroundSize: 'cover'
					}}>
					<article className="modal-text">
						<h1>{this.props.movieinfo.title}</h1>
						<h3 className="rating">
							Rating: {this.props.movieinfo.vote_average} / 10
						</h3>
						<h3>Release date: {this.props.movieinfo.release_date}</h3>
						<p>{this.props.movieinfo.overview}</p>
						<button className="button" onClick={this.handleAddToMyList}>
							{this.props.mylist.indexOf(this.props.movieinfo.id) !== -1 ? (
								<i className="fas fa-check" />
							) : (
								<i className="fas fa-plus" />
							)}
							&nbsp; My List
						</button>
					</article>
					<div className="trailer">
						{this.state.trailerUrl.length > 0 && (
							<iframe
								src={`https://www.youtube.com/embed/${
									this.state.trailerUrl[0].key
								}`}
								height="300px"
								width="90%"
								frameBorder="0"
								allow="autoplay; encrypted-media"
								allowFullScreen
								title="video"
							/>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default Modal;
