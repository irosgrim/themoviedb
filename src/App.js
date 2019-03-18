import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Searchresults from './components/Searchresults';
//router
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
//pages
import Home from './components/Home';
import Movies from './components/Movies';
import Tvshows from './components/Tvshows';
import Mylist from './components/Mylist';

import './styles/App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.handlePictureClicked = this.handlePictureClicked.bind(this);
		this.handleAddToMyList = this.handleAddToMyList.bind(this);
		this.handleSearch = this.handleSearch.bind(this);

		this.state = {
			myList: [],
			modalvisible: false,
			movie: [],
			navbar_change_color: {
				header: 'transparent',
				search: 'black'
			},
			searchResults: []
		};
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

	handleSearch(e) {
		const api_key = process.env.REACT_APP_API_KEY;
		e.target.value !== ''
			? fetch(
					`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${
						e.target.value
					}&page=1&include_adult=true&append_to_response=videos`
			  )
					.then(response => response.json())
					.then(data => {
						if (
							data.results.backdrop_path !== null ||
							data.results.backdrop_path !== undefined ||
							data.results.backdrop_path !== ''
						) {
							this.setState({ searchResults: data.results });
							return this.props.history.push('/searchresults');
						}
					})
					.catch(error => {
						console.log(error);
					})
			: this.setState({ searchResults: [] });
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
							handlesearch={this.handleSearch}
						/>
						<div>
							{this.state.searchResults.length > 0 ? (
								<Searchresults results={this.state.searchResults} />
							) : null}
							{/* <Route
								path="/searchresults"
								render={props => (
									<Searchresults
										{...props}
										results={this.state.searchResults}
									/>
								)}
							/> */}
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
