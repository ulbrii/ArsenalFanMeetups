// Created Card component in order to reuse it across site & wrap other components

import classes from './Card.module.css';

function Card(props) {
	// props.children pulls those elements that are enclosed within the Card wrapper
	// to the surface, and allows them to show.  Without it, the Card wrapper would
	// swallow those elements up, and only return the elements within itself.
	return <div className={classes.card}>{props.children}</div>;
}

export default Card;
