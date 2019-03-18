import React, { Component } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Search from './Search';
import Dashboard from './Dashboard';
//router
import { Link } from 'react-router-dom';

class Navigation extends Component {
	render() {
		return (
			<header className={`header ${this.props.colorstate.header}`} id="header">
				<div className="column">
					<Link to="/">
						<Logo />
					</Link>
					<Menu mylist={this.props.mylist} />
				</div>
				<div className="column">
					<Search
						colorstate={this.props.colorstate.search}
						handlesearch={this.props.handlesearch}
					/>
					<Dashboard />
				</div>
			</header>
		);
	}
}
export default Navigation;
