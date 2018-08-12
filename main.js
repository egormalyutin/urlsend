const express = require("express");

const app = express();

app.use(express.static("views"))

PORT = 8080

app.get("/data", function(req, res) {
	res.send("succ")
	console.log(req.query.location)
})

app.listen(PORT, function() {
	console.log("Listening on http://localhost:" + PORT);
})
