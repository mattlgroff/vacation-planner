//Install express server
const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
app.use(compression());
const packageName = 'vacation-planner';

// Serve only the static files form the dist directory
app.use(express.static(__dirname + `/dist/${packageName}`));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + `/dist/${packageName}/index.html`));
});

const port = process.env.PORT || 8080;
// Start the app by listening on the default Heroku port
app.listen(port, () => {
  console.log(`Express is hosting ${packageName} on port: ${port}`);
});
