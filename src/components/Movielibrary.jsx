import React, { Component } from 'react';
import Category from './Category';

class Movielibrary extends Component {
	render() {
		return (
			<section className="movie-library">
				<Category
					category="Sci-fi Movies"
					handlepictureclicked={this.props.handlepictureclicked}
				/>
				<Category
					category="Horror Movies"
					handlepictureclicked={this.props.handlepictureclicked}
				/>
				<Category
					category="Drama Movies"
					handlepictureclicked={this.props.handlepictureclicked}
				/>
				<Category
					category="Documentaries"
					handlepictureclicked={this.props.handlepictureclicked}
				/>
			</section>
		);
	}
}

export default Movielibrary;
