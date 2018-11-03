let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let serveStatic = require('serve-static');

let app = express();
let PORT = process.env.PORT || 2000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(serveStatic(path.join(__dirname, '/home')));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log('Server listening on: http://localhost:' + PORT);
})