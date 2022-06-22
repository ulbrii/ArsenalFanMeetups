// Imports a React hook ability to redirect user to another page on submit
import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
	//
	const navigate = useNavigate();

	function addMeetupHandler(meetupData) {
		// Fetch is a Vanilla JS function, not React exclusive
		fetch('https://arsenal-fans-meetup-default-rtdb.firebaseio.com/meetups.json', {
			// By default, fetch uses the method of GET, so we must assign it to 'POST'
			method: 'POST',
			body: JSON.stringify(meetupData),
			// This specifies the type of data that is being sent, though not always required
			headers: {
				'Content-Type': 'application/json'
			}
			// Utilizes above import of useNavigate to replace current url with the root
		}).then(() => {
			navigate('/');
		});
	}

	return (
		<section>
			<h1>Add New Meetups</h1>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</section>
	);
}

export default NewMeetupPage;
