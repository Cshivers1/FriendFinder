const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
var PORT = process.env.PORT || 8080;

// express initiation to handle parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// our Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
