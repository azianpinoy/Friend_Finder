express = require("express");
bodyParser = require("body-parser");
path = require("path");

var app = express();
var PORT = process.env.PORT || 3030;

app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
