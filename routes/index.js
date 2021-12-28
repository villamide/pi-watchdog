const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/watchdog', function(req, res, next) {
	console.log("Get on / " + req)
	axios.get("https://ifconfig.co/json")
		.then(response => {
			console.log(response.data)
			res.json(response.data)
		})
		.catch(error => {
			console.error(error)
			res.send(error)
		})
});
module.exports = router;
