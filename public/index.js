let long;
let lati;
let dishName = "";
var zip;
var map;
var service;


const data = [
  {
      "zipcode":59102,
      "state_abbr":"MT",
      "latitude":45.778852,
      "longitude":-108.57420,
      "city":"Billings",
      "state":"Montana"
  },
  {
      "zipcode":94501,
      "state_abbr":"CA",
      "latitude":37.769528,
      "longitude":-122.25937,
      "city":"Alameda",
      "state":"California"
  },
  {
      "zipcode":94112,
      "state_abbr":"CA",
      "latitude":37.720931,
      "longitude":-122.44241,
      "city":"San Francisco",
      "state":"California"
  },
  {
      "zipcode":78701,
      "state_abbr":"TX",
      "latitude":30.271270,
      "longitude":-97.74103,
      "city":"Austin",
      "state":"Texas"
  },
  {
      "zipcode":97035,
      "state_abbr":"OR",
      "latitude":45.413870,
      "longitude":-122.72492,
      "city":"Lake Oswego",
      "state":"Oregon"
  },
  {
    "zipcode": 63103,        // Example zip code for St. Louis
    "state_abbr": "MO",        // Missouri state abbreviation
    "latitude": 38.635000,    // Approximate latitude for St. Louis (zip 63103)
    "longitude": -90.22000,   // Approximate longitude for St. Louis (zip 63103)
    "city": "St. Louis",     // City name
    "state": "Missouri"      // State name
},
{
  "zipcode": 39180,        // Example zip code for Vicksburg
  "state_abbr": "MS",        // Mississippi state abbreviation
  "latitude": 32.319000,    // Approximate latitude for Vicksburg (zip 39180)
  "longitude": -90.87300,   // Approximate longitude for Vicksburg (zip 39180)
  "city": "Vicksburg",     // City name
  "state": "Mississippi"   // State name
}]



function saveInput() {
  zip = document.getElementById('zip').value;
  dishName = document.getElementById('dish').value;

  for( var i=0; i < data.length; i++)
  {
   if (data[i]["zipcode"] == zip) { lati = data[i]["latitude"] ;
   long = data[i]["longitude"];}
 };
 document.getElementById('lat').innerHTML = "Latitude: " + lati;
 document.getElementById('lon').innerHTML = "Longitude: " + long;
 document.getElementById('name').innerHTML = "Dish: " + dishName;
 initMap();
}


function initMap() {
  var location = new google.maps.LatLng(lati, long);

  map = new google.maps.Map(document.getElementById('myMap'), {
    center: location,
    zoom: 12
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
  marker.setMap(map);
  }



