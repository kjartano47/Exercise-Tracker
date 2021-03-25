const router = require("express").Router();
let Exercise = require("../models/exercise.model");

//endpoint that handles incoming http get requests on exercises url path
router.route("/").get((req, res) => {
	Exercise.find()
		.then((exercises) => res.json(exercises))
		.catch((err) => res.status(400).json("Error: " + err));
});

//handles incoming http post requests
router.route("/add").post((req, res) => {
	const username = req.body.username;
	const description = req.body.description;
	const duration = Number(req.body.duration);
	const date = Date.parse(req.body.date);

	const newExercise = new Exercise({
		username,
		description,
		duration,
		date,
	});

	//new exercise is saved to the mongodb atlas database
	newExercise
		.save()
		.then(() => res.json("Exercise added!"))
		.catch((err) => res.status(400).json("Error:" + err));
});

//handles get requests and returns exercise with provided id
router.route("/id").get((req, res) => {
	Exercise.findById(req.params.id)
		.then((exercise) => res.json(exercise))
		.catch((err) => res.status(400).json("Error: " + err));
});

//exporting the router
module.exports = router;
