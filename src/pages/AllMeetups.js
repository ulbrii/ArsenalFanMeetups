import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
	{
		id: 'm1',
		title: 'First Arsenal Fan Meetup',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/9/9d/Emirates_stadium.jpg',
		address: '123 Meetupstreet, 12345 Meetup City',
		description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
	},
	{
		id: 'm2',
		title: 'Second Arsenal Fan Meetup',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/9/9d/Emirates_stadium.jpg',
		address: '123 Meetupstreet, 12345 Meetup City',
		description: 'This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!'
	}
];

function AllMeetupsPage() {
	const [ isLoading, setIsLoading ] = useState(true);
	const [ loadedMeetups, setLoadedMeetups ] = useState([]);

	// useEffect will prevent an infinite loop that would otherwise be caused by merely using "fetch"
	// within the component, as anytime it fetches the data, the component is changed and therefore
	// will fetch again, and again, and again.
	useEffect(() => {
		setIsLoading(true);
		fetch('https://arsenal-fans-meetup-default-rtdb.firebaseio.com/meetups.json')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const meetups = [];

				for (const key in data) {
					const meetup = {
						id: key,
						...data[key]
					};
					meetups.push(meetup);
				}

				setIsLoading(false);
				setLoadedMeetups(meetups);
			});
	}, []);

	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}

	return (
		<section>
			<h1>All Meetups</h1>
			<MeetupList meetups={DUMMY_DATA} />
			<MeetupList meetups={loadedMeetups} />
		</section>
	);
}

export default AllMeetupsPage;
