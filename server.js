var express = require('express');
var app = express();

app.use('/public', express.static('public'));
app.use('/bower_components', express.static('./bower_components'));

app.listen(3000, function () {
  console.log('Weather Leaflet app listening on port 3000: http://localhost:3000/public/');
});
