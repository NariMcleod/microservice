# microservice



1. how to request data from the microservice I implemnted:
user enters zipcode and dish name which can be predetermined or random. 
Backend gets data(get method) and changes zipcode to longitude and latitude and send it to
React app(post method) to get user's location to pass it to Google maps API




2. how to receive data from the microservice I implemented:
 after Google maps API get user's location, either embeded Google map show a list of restaurants that serve the dish 
or get result object from Google maps and pass it to front-end to deliver(render()) to the
result to the user



![UML](https://user-images.githubusercontent.com/67178046/198925445-b3bd1c2d-4c1d-4d0e-86cf-a8622bce0a5c.png)
