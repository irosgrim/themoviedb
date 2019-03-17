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
			movie: [],
			navbar_change_color: {
				header: 'transparent',
				search: 'black'
			}
		};
	}
	handlePictureClicked(e) {
		console.log(e);
		this.setState({ modalvisible: !this.state.modalvisible, movie: e });
	}
	componentDidMount() {
		window.onscroll = () => {
			window.pageYOffset > 50
				? this.setState({
						navbar_change_color: { header: 'black', search: 'gray' }
				  })
				: this.setState({
						navbar_change_color: { header: 'transparent', search: 'black' }
				  });
		};
	}
	render() {
		return (
			<div className="App">
				<Navigation colorstate={this.state.navbar_change_color} />
				<div className="container" id="container">
					{this.state.modalvisible === false ? null : (
						<Modal
							visible={this.state.modalvisible}
							movieinfo={this.state.movie}
							closemodal={e => {
								//console.log(e.target.className);
								e.target.className === 'button' ||
									this.setState({ modalvisible: false });
							}}
						/>
					)}
					<Featuredmovie />

					<Movielibrary handlepictureclicked={this.handlePictureClicked} />

					<Footer />
				</div>
			</div>
		);
	}
}

export default App;
