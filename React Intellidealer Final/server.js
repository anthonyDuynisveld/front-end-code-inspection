var express = require('express');
var path = require('path');
var compression = require('compression');
var PORT = process.env.PORT || 4501;

var app = express();

app.use(compression());

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')));

// send all requests to index.html so browserHistory works
app.get('*', function (req, res) {
  console.log('send basic');
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
});
