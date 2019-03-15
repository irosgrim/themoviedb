import React from 'react';

function Category(props) {
	return (
		<article className="category">
			<header>
				<h2>{props.category}</h2>
			</header>
			<div className="horizontal-scroll">
				<figure onClick={props.handlepictureclicked} />
				<figure onClick={props.handlepictureclicked} />
				<figure onClick={props.handlepictureclicked} />
				<figure onClick={props.handlepictureclicked} />
				<figure onClick={props.handlepictureclicked} />
				<figure onClick={props.handlepictureclicked} />
				<figure onClick={props.handlepictureclicked} />
				<figure onClick={props.handlepictureclicked} />
				<figure onClick={props.handlepictureclicked} />
				<figure onClick={props.handlepictureclicked} />
			</div>
		</article>
	);
}
export default Category;
