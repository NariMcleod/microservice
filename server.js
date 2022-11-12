const express = require('express');
const cities = require('cities');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const path = require('path');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'/public/index.html'));

});




app.listen(port, () => {
  console.log(`NodeJS app listening on port ${port}`)
})