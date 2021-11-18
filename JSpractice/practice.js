// building an api request handler - reference https://expressjs.com/en/starter/hello-world.html

// telling node to include express package so that i can use it later in the file
const { response } = require("express");
const express = require("express");


// this is a function which ireturns sum of first n natural numbers
function add (a,b) {
    return a + b;
}
add(1,2)
// console.log(add(1, 2))

function sumOfFirstNNums(n) {
    let sum = 0;
    for (i = 0;
        i<= n;
        i ++) {
            sum +=i;
        }
        return sum;
}
// console.log(sumOfFirstNNums(50));

// 1) this lets end user create a server using the packages installed
let server = express();

let router = express.Router();

// 2) now create entry point in server so external client can access and call this api in this node. 
// this defines the mapping of API string to the function 
router.get(
    "/sum/firstNNumbers", // this is the api end point which is mapped to functions below
    (request, response) => {
        // get parameter n from the request
        let n = request.query.n;
        // get the sum of n numbers
        let sum = sumOfFirstNNums(n);
        // return the sum as response
        response.status(200).send("Sum is: " + sum);
    }
);

// tells the server to use the router
server.use(router);

server.listen(3000,(error)=> {
    if(error) {
        console.log(error);
    } else {
        console.log("server running at port 3000");
    }
});

// press control + C to stop previous server then start again by typing node main.js
// now to to web browser and goto localhost:3000
// then type the api string defined to the back and parameter ?n=44
// http://localhost:3000/sum/firstNNumbers?n=10

