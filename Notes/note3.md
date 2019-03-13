_What is package.json?_
- This file is used to give information to npm that allows it to 
identify the project as well as handle the project's dependencies.
A file that contains infromation about the project and tracks dependencies

_Why do we need package.json?_
- package.json provides a simple way to keep track 
of packages that are being used in application.

**_To create the package file:_**

npm init -y
- autofill the package.json file

___

_What is Express.js?_
- Express is a package that can be install on nodeJS which is going 
to make things such as listening to request and handling them.

Express is a minimal and flexible Node.js web application framework 
that provides a robust set of features for web and mobile applications.
It is a light-weight web application framework to help organize 
your web application into an MVC architecture on the server side.


_What is the purpose of it with Node.js?_
- That you don't have to repeat same code over and over again. 
Node.js is a low-level I/O mechanism which has an HTTP module. 
If you just use an HTTP module, a lot of work like parsing the payload, 
cookies, storing sessions (in memory), selecting the right 
route pattern based on regular expressions will have to be re-implemented. 
With Express.js it there for you to use.

- Express.js is not an model-view-controller framework by itself. 
You need to bring your own object-relational mapping libraries such as 
Mongoose for MongoDB.

**_To install express:_**

npm install express --save
- this with save into the dependencies in the package.json file

___

_what is Nodemon?_
- Nodemon is a utility that will monitor for any changes 
in your source and automatically restart your server.

npm install nodemon --save-dev
- its a dev dependencies that isn't required for the application to run
- its a dependency that is going to speed up the development process

___

_what is body-parser?_
- In order to read HTTP POST data , we have to use "body-parser" node module which 
  is a piece of express middleware (acts as a bridge between database and applications)
  that extract the entire body portion of an incoming request stream and exposes it on 
  req.body as something easier to interface with. 

- This body-parser module parses the data submitted using HTTP POST request.

- npm install body-parser --save

___

_What is a middleware?_
- software that acts as a bridge between an operating system 
or database and applications, especially on a network.

_what is parse?_
- Parses a string and returns a JavaScript object. 
The string has to be written in JSON format

_what is const?_
- Constants are block-scoped, much like variables defined using the let statement. 
The value of a constant cannot change through reassignment, and it can't be redeclared.
