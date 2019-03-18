import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Modal from './components/Modal';
//router
import { Route, BrowserRouter as Router } from 'react-router-dom';
//pages
import Home from './components/Home';
import Movies from './components/Movies';
import Tvshows from './components/Tvshows';
import Mylist from './components/Mylist';

import './styles/App.css';

class App extends Component {
	constructor() {
		super();
		this.handlePictureClicked = this.handlePictureClicked.bind(this);
		this.handleAddToMyList = this.handleAddToMyList.bind(this);

		this.state = {
			myList: [],
			modalvisible: false,
			movie: [],
			navbar_change_color: {
				header: 'transparent',
				search: 'black'
			}
		};
	}
	handleAddToMyList(id) {
		this.setState({
			myList:
				this.state.myList.indexOf(id) === -1
					? [...this.state.myList, id]
					: [...this.state.myList]
		});
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
				<div className="container" id="container">
					{this.state.modalvisible === false ? null : (
						<Modal
							handleaddtomylist={this.handleAddToMyList}
							mylist={this.state.myList}
							visible={this.state.modalvisible}
							movieinfo={this.state.movie}
							closemodal={e => {
								//console.log(e.target.className);
								e.target.className === 'button' ||
									this.setState({ modalvisible: false });
							}}
						/>
					)}
					<Router>
						<Navigation
							colorstate={this.state.navbar_change_color}
							mylist={this.state.myList}
						/>
						<div>
							<Route
								exact
								path="/"
								render={props => (
									<Home
										{...props}
										handlepictureclicked={this.handlePictureClicked}
									/>
								)}
							/>
							<Route path="/movies" component={Movies} />
							<Route path="/tvshows" component={Tvshows} />
							<Route
								path="/mylist"
								render={props => (
									<Mylist {...props} mylist={this.state.myList} />
								)}
							/>
						</div>
					</Router>
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;
