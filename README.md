# microservice

*** HOW TO RUN THE MICROSERVICE*****
- the microservice is run on Node.js environment and express framwork.
  so before opening http://localhost:3000/ on browser, Node.js server needs to be running(
server.js is the entry point)


- your own API key needs to be replaced in the URL

 "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
 please replace YOUR_API_KEY with your own google maps api 
 you can get api key here =>https://developers.google.com/maps/documentation/javascript/get-api-key


-I'm still working on the part where you get a list of restaurant from dish name.
there is several Places API with Google but the most relevant apis for my microservice are
not free,you will be billed for every field the results return from Places API except Find Place method which
is not returning an accurate result for the microservice. to avoid being billed, I will use the Find Place API


- Zipcodes: html5 geolocation and Google's geolocator which both can convert
Zip codes to latitude and longitude for Google map has to be with HTTPS so I couldnt use it for localhost which is http.
So I just used predetermined set of zipcodes for zipcodes to coordinates conversion 

