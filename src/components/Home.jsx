import React, { Component } from 'react';
import Featuredmovie from './Featuredmovie';
import Movielibrary from './Movielibrary';

class Home extends Component {
	render() {
		return (
			<div>
				<Featuredmovie />
				<Movielibrary handlepictureclicked={this.props.handlepictureclicked} />
			</div>
		);
	}
}
export default Home;
