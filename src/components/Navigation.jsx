import React, { Component } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Search from './Search';
import Dashboard from './Dashboard';

class Navigation extends Component {
	render() {
		return (
			<header className={`header ${this.props.colorstate.header}`} id="header">
				<div className="column">
					<Logo />
					<Menu />
				</div>
				<div className="column">
					<Search colorstate={this.props.colorstate.search} />
					<Dashboard />
				</div>
			</header>
		);
	}
}
export default Navigation;
