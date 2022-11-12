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



