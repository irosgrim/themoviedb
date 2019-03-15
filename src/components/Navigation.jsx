import React, { Component } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Search from './Search';
import Dashboard from './Dashboard';

class Navigation extends Component {
	render() {
		return (
			<header className="header transparent" id="header">
				<div className="column">
					<Logo />
					<Menu />
				</div>
				<div className="column">
					<Search />
					<Dashboard />
				</div>
			</header>
		);
	}
}
export default Navigation;
