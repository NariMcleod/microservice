const express = require('express');
const cities = require('cities');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const path = require('path');
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));

});

app.post('/zip', (req, res) => {

    let zip = req.body.zip
    let dish = req.body.dish

    const cities = require('cities');
    let city = cities.zip_lookup(zip);
    console.log(city);
    res.send(city);
  });


  
app. get('/', function (req, res) {
	
});





app.listen(port, () => {
  console.log(`NodeJS app listening on port ${port}`)
})