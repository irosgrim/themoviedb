import React from 'react';
import { Link } from 'react-router-dom';

function Menu(props) {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/movies">Movies</Link>
				</li>
				<li>
					<Link to="/tvshows">TV Shows</Link>
				</li>
				<li>
					<Link to="/mylist">My list {props.mylist.length || ''}</Link>
				</li>
			</ul>
		</nav>
	);
}
export default Menu;
