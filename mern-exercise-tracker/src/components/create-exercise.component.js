import React, { Component } from "react";
export default class CreateExercise extends Component {
	constructor(props) {
		super(props);

		//binding this to the methods
		this.onChangeusername = this.onChangeUsername.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onChangeDuration = this.onChangeDuration.bind(this);
		this.onChangeDate = this.onChangeDate.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			username: "",
			description: "",
			duration: 0,
			date: new Date(),
			users: [],
		};
	}

	onChangeUsername(e) {
		this.setState({
			username: e.target.value,
		});
	}

	onChangeDescription(e) {
		this.setState({
			description: e.target.value,
		});
	}

	onChangeDuration(e) {
		this.setState({
			duration: e.target.value,
		});
	}

	onChangeDate(date) {
		this.setState({
			date: date,
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const exercise = {
			username: this.state.username,
			description: this.state.description,
			duration: this.state.duration,
			date: this.state.date,
		};
		console.log(exercise);
		//once user submits the form, they will be taken back to the main page
		window.location = "/";
	}
	render() {
		return <p>You are on the Create Exercise component</p>;
	}
}
