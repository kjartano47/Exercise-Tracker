const router = require("express").Router();
let User = require("../models/user.model");

//endpoint that handles incoming http get requests on users url path
router.route("/").get((req, res) => {
	User.find()
		.then((users) => res.json(users))
		.catch((err) => res.status(400).json("Error: " + err));
});

//handles incoming http post requests
router.route("/add").post((req, res) => {
	const username = req.body.username;

	const newUser = new User({ username });

	//new user is saved to the mongodb atlas database
	newUser
		.save()
		.then(() => res.json("User added!"))
		.catch((err) => res.status(400).json("Error:" + err));
});
//exporting the router
module.exports = router;
