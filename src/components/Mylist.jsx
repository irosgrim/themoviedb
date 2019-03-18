import React, { Component } from 'react';

class Mylist extends Component {
	render() {
		return (
			<div
				style={{
					paddingTop: '120px',
					minHeight: '100vh'
				}}>
				<h2>My list {this.props.mylist}</h2>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
					iste incidunt cum, perspiciatis dolorem accusamus? At dolore iusto
					numquam nostrum praesentium facere, saepe provident ex eligendi cumque
					nemo recusandae odio.
				</p>
			</div>
		);
	}
}
export default Mylist;
