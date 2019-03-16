import React from 'react';

function Search(props) {
	return (
		<form>
			<input type="text" id="search" className={props.colorstate} />
		</form>
	);
}
export default Search;
