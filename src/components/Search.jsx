import React, { Component } from 'react';

class Search extends Component {
	constructor() {
		super();
		this.state = { showSearchInput: false };
	}
	render() {
		return (
			<form>
				<input
					type="text"
					id="search"
					className={
						this.state.showSearchInput === false
							? `${this.props.colorstate} input-hide`
							: `${this.props.colorstate} input-show`
					}
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
