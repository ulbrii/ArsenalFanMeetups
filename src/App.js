import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
	return (
		<Layout>
			{/* Wrapping Routes in a 'Routes' tag allows the pages to be displayed singularly,
			as opposed to defaulting newly opened pages on top of other existing ones */}
			<Routes>
				<Route path="/" element={<AllMeetupsPage />} />
				<Route path="/new-meetup" element={<NewMeetupPage />} />
				<Route path="/favorites" element={<FavoritesPage />} />
			</Routes>
		</Layout>
	);
}

export default App;
