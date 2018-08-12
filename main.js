const express = require("express");

const app = express();

app.use(express.static("views"))

const PORT = process.env.PORT || 5000;

app.get("/data", function(req, res) {
	res.send("succ")
	console.log(req.query.location)
})

app.listen(PORT, function() {
	console.log("Listening on http://localhost:" + PORT);
})
