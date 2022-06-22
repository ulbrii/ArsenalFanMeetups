import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
	// Creates banks to catch the specified input
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descriptionInputRef = useRef();

	function submitHandler(e) {
		// Vanilla JS to prevent default submission event by browser
		e.preventDefault();

		const enteredTitle = titleInputRef.current.value;
		const enteredImage = imageInputRef.current.value;
		const enteredAddress = addressInputRef.current.value;
		const enteredDescription = descriptionInputRef.current.value;

		// Creating JS object to hold captured data that will be sent to DB
		const meetupData = {
			title: enteredTitle,
			images: enteredImage,
			address: enteredAddress,
			description: enteredDescription
		};

		// Routing back to New Meetup page to execute function located there
		props.onAddMeetup(meetupData);
	}

	return (
		<Card>
			{/* Adding onSubmit to catch the default 'submit form' and to add our own logic instead */}
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					{/* Connects label to associated input for screen reader technogolies */}
					<label htmlFor="title">Meetup Title</label>
					<input type="text" required id="title" ref={titleInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="image">Meetup Image</label>
					<input type="url" required id="image" ref={imageInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="address">Meetup Address</label>
					<input type="text" required id="address" ref={addressInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="description">Meetup Description</label>
					<textarea required id="description" rows="5" ref={descriptionInputRef} />
				</div>
				<div className={classes.actions}>
					<button>Add Meetup</button>
				</div>
			</form>
		</Card>
	);
}

export default NewMeetupForm;
