//
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
//Configures so that environment variables can be set it the dotenv file
require("dotenv").config();

//How the server is created and the port that the server will be on
const app = express();
const port = process.env.PORT || 5000;

//Cors middleware and allows us to parse json
app.use(cors());
app.use(express.json());

//Here we start the server and listen to the port given above
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});