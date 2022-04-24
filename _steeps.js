/**
 * -------------------------------------
 * making server for genius car service
 * --------------------------------------
 * 
 * 1. create folder with cmd command mkdir space folder name then go to folder
 * 2. npm init
 * 3. npm i express cors mongodb dotenv
 * 4. script-dev: nodemon index.js
 * 5. create index.js
 * 6. use 5 steps to create a node server; go to express 
    and remember that used // middleware
    app.use(cors());
    app.use(express.json()); and require cors example:- const cors = require('cors');

 * 7. port declare example:- const port = process.env.PORT || 5000;
 * 8. and make sure added to package.json file include for auto restart "start": "node index.js",
    "start-dev": "nodemon index.js",
 * finish basic express server creating
 
 * ---------------------------------------------------
 * connect mongodb to server to client side
 * ---------------------------------------------------
 * 1. go to mongodb and create a database then insert some json data
 * 2. for connect go to google search node mongodb CRUD then go Usage Examples > Find Oparation > Find Multiple Documents and follow resource
 * 3. go to mongodb Add New Database User and take name pass
 * 4. go to server and create a .env file then write BD_USER=user name; DB_PASS=pass
 * 5. go to https://www.npmjs.com/package/dotenv and follow Usage
 * 
 * 
 * 
 * 
 * 
 * 
 *
 **/