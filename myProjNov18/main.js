//create server file
const express = require("express");

//export routers - 2 mappings created
const user_mapping = require("./mappings/user");
const account_mapping = require("./mappings/account.js");

//create server
let server = express();

//front end making request is coming in jason format. this tells server to convert data using json parser
server.use(express.json());

//tells server to use mapping defined in above files
server.use(user_mapping.router);
server.use(account_mapping.router);


server.listen(3000, (error) => {
    if (error) {
        console.log (error);
    } else {
        console.log("Server started at port 3000");
    }
});
