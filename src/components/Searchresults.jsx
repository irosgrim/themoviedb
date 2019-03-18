import React, { Component } from 'react';

class Searchresults extends Component {
	render() {
		console.log(this.props);
		return (
			<div
				style={{
					backgroundColor: '#000000',
					height: '100vh',
					paddingTop: '100px'
				}}>
				The results of the search are:
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
					unde asperiores facilis nam, animi, dolores error deleniti quae
					doloremque laborum aut sunt quisquam. Eius veniam corrupti nesciunt
					beatae commodi quibusdam?
				</p>
			</div>
		);
	}
}
export default Searchresults;
