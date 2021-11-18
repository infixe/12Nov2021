//use Router to create mappings

const { response } = require("express");
const express = require ("express");
const database = require ("../data");

let router = express.Router();

//create api mapping to get all users
router.get("/user/all", (request, response)=> {
    
    let users = database.get_all_users(); 

    response.status(200).send(users);
    
});

//create api mapping to get user by id
router.get("/user/by-id", (request, response)=> {
    if (!request.query.user_id){
        console.log("Received empty user_id: " + request.query.user_id);
        response.status(400).send("Received invalid user_id");
    } else {
        let user = database.get_user_by_user_id(request.query.user_id); 
        response.status(200).send(user);
    }
});

//to add new user to database
router.post("/user/add", (request, response) => {
    let user = request.body;
    database.add_user(user);
    response.status(200).send("user added to the database!");
})

module.exports = {router};