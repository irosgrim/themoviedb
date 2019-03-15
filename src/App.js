import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Featuredmovie from './components/Featuredmovie';
import Movielibrary from './components/Movielibrary';
import Footer from './components/Footer';
import Modal from './components/Modal';

import './styles/App.css';

class App extends Component {
	constructor() {
		super();
		this.handlePictureClicked = this.handlePictureClicked.bind(this);

		this.state = {
			modalvisible: false,
			movie: []
		};
	}
	handlePictureClicked(e) {
		console.log(e);
		this.setState({ modalvisible: !this.state.modalvisible, movie: e });
	}
	componentDidMount() {
		window.onscroll = () => {
			if (window.pageYOffset > 100) {
				document.getElementById('header').classList.add('black');
				document.getElementById('header').classList.remove('transparent');
				document.getElementById('search').classList.add('gray');
				document.getElementById('search').classList.remove('black');
			} else {
				document.getElementById('header').classList.add('transparent');
				document.getElementById('header').classList.remove('black');
				document.getElementById('search').classList.add('black');
				document.getElementById('search').classList.remove('gray');
			}
		};
	}
	render() {
		return (
			<div className="App">
				<Navigation />
				<div className="container" id="container">
					<Modal
						visible={this.state.modalvisible}
						movieinfo={this.state.movie}
						closemodal={e => {
							//console.log(e.target.className);
							e.target.className === 'button' ||
								this.setState({ modalvisible: false });
						}}
					/>
					<Featuredmovie />

					<Movielibrary handlepictureclicked={this.handlePictureClicked} />

					<Footer />
				</div>
			</div>
		);
	}
}

export default App;
