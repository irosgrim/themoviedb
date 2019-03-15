import React, { Component } from 'react';

class Modal extends Component {
	render() {
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
						backgroundPosition: 'left top, 300px top',
						backgroundSize: 'cover'
					}}>
					<article className="modal-text">
						<h1>{this.props.movieinfo.title}</h1>
						<h3 className="rating">
							Rating: {this.props.movieinfo.vote_average} / 10
						</h3>
						<h3>Release date: {this.props.movieinfo.release_date}</h3>
						<p>{this.props.movieinfo.overview}</p>
						<button className="button">+ My List</button>
					</article>
				</div>
			</div>
		);
	}
}

export default Modal;
