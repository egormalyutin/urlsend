const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(function(req, res, next) {
	console.log(req.url)
	next()
})

app.use(express.static("views"))

app.listen(PORT, function() {
	console.log("Listening on http://localhost:" + PORT);
})
