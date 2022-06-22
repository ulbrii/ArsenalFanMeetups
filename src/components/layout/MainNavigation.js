import { useContext } from 'react';
// Use Link as opposed to an anchor tag 'a'.  Link prevents the default message to the
// server from being sent, because we do not want to load a new HTML page
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
	const favoritesCtx = useContext(FavoritesContext);

	return (
		<header className={classes.header}>
			<div className={classes.logo}><img src='arsenal-fc-logo.png' alt='arsenal-fc-logo' width='75px'/></div>
			<div className={classes.title}>Arsenal Meetups</div>
			<nav>
				<ul>
					<li>
						<Link to="/">All Meetups</Link>
					</li>
					<li>
						<Link to="/new-meetup">Add New Meetup</Link>
					</li>
					<li>
						<Link to="/favorites">
							My Favorites<span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
