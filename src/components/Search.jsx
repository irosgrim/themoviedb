import React, { Component } from 'react';

class Search extends Component {
	constructor() {
		super();
		this.state = { showSearchInput: false };
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.prevent.default();
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					id="search"
					className={
						this.state.showSearchInput === false
							? `${this.props.colorstate} input-hide`
							: `${this.props.colorstate} input-show`
					}
					onChange={this.props.handlesearch}
				/>
				<i
					className="fas fa-search search-button"
					onClick={() => {
						this.setState({ showSearchInput: !this.state.showSearchInput });
						console.log(this.state.showSearchInput);
					}}
				/>
			</form>
		);
	}
}
export default Search;
