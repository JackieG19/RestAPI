## How parts of the API work together:

- making a node application using express to help us do it

- express is a package installed on node js to make things listen to request and 
  handling them.

- going to have the node express app running a server listening for request from the 
  outside world.

- have mongoDB running in the background which is waiting for the node js express up 
  to communicate with it
  
- these 2 components are going to make up the API 

- the API is going to be running waiting for requests being made to it from another 
  application to the front end or a mobile application or another website
 
___


**The data:**
 
- a list/collection of ninja to store in the mongo database
- each ninja could have some properties 
- when from a front end application ot 3rd party app:
    - make a request 
    - its going to come into the API and deal with it
    - grab the data we need 
    - return it to the 3rd party app

POST
- if we want to create a new ninja and store it:
    - make a post request send that ninja data with it's properties 
      to the api that is going to store it in the database

GET
- To read/retrieve a list of ninja:
    - use a mobile application you put in the longitude and latitude and send
    - its going to make a get request comes to the api and deal with it 
    - get the data it needs and return it to the application

PUT
- To update or edit an exsiting ninja:
    - to change a property of the ninja use a put request 
    - send the updates to the app 
    - updates in the database
    - it can return the update 

DELETE
- Delete a ninja from he db
    - delete a ninja from the database use the delete request
    - the app deletes whichever ninja is specify
    - return that deleted ninja


C. create (POST)

R. read (GET)

U. update (POST)

D delete (DELETE)

___


**API routes**
- when communicating with an api, we have to make a requests to certain routes or 
  endpoint if you like that the API exposes to us
  
_For example:_
- if you want to retrieve a list of ninja make a get request in the code 
  to a route that represents a specific resource a list of ninjas
    
- if you want to make a post request gonna make a post request use the same route 
  as the get request because we want to add to this collection just interacting differently 
    
- for the put request we might have a route with an id which represent a specific ninja
  or record we want to edit or update an exsiting data with the unique id
    
- delete would be the same as the post, sending a delete request to the same 
  endpoint of the route because we're deleting an existing ninja in the db
