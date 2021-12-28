const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/watchdog', function(req, res, next) {
	console.log("Get on / " + req)
	axios.get("https://ifconfig.co/json")
		.then(response => {
			console.log(response.data)
			res.send(response.data)
		})
		.catch(error => {
			console.error(error)
			res.send(error)
		})
});

/* GET home page. */
router.get('/', function(req, res, next) {});

module.exports = router;
