import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

let data = new FormData();
data.append("data", fs.createReadStream("./_files/Next Video Submission.mp4"));
data.append("filename", "Next Video");

let config = {
	method: "post",
	url: "https://api.estuary.tech/content/add",
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.ESTUARY_DEV_API_KEY}`, // THROW AWAY KEY
		...data.getHeaders()
	},
	data
};

axios(config)
	.then((response) => {
		console.log(JSON.stringify(response.data));
	})
	.catch((error) => {
		console.error(error.code, error.message, "/ Is API Down?");
	});
