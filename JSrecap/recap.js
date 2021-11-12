let age = 10; //define vatiable named 'age' value 10

let incrementedage = age +1; 
console.log(age);

let shortname = "Debb" 
//let name = `Debb` can also define strings with "", '', ``

let details = {
    firstname: "Debbie",
    lastname: "Liew",

}

//JSON = Javascript Object Notation
console.log("my shortname is: " + shortname);

console.log("my name is: " + details.firstname );
console.log("my name is: " + details.firstname + " " + details.lastname);

let records = [ // [] means list
    {
        first_name: "Joan",
        last_name: "Chen",
        age: 22,
        phone: 97632164,
    },
    {
        first_name: "Mark",
        last_name: "Roberts",
        phone: 97632164,
        email: "me@roberts.com"
    },    

];
//sQL database needs same keys. JSON objects can have different keys

console.log("Name of 1st record: " + records [0].first_name);

//conditional statements 

let vaxage = 55; // change age, change output
if (vaxage> 18){
    console.log("eligible for moderna and pfizer")
}
else if (vaxage >=12 && age <18){
    console.log("eligible for pfizer only")
}
else {
    console.log("not eligible");
}

/* reference code for later if (request is valid) {
    servetherequest
} else {
    return error;
}
*/

//functions and callback functions
//defining the function

//1. normal way
function function_name (parameter1, parameter2) {
    console.log("inside the function");
}
//calling the function 
function_name(); //this tells node to execute 

//2. anonymous way - assigns function as a value for the variable. 
let anon_fn = function (parameter1, parameter2) { //this function needs to be assigned to variable before it can exist
    console.log("inside anon function");
}
anon_fn();

//3. arrow function
let arrow_fn = (parameter1, parameter2) => {
    console.log("inside arrow function");
}
arrow_fn();

//example: adding 2 numbers
function add (p1, p2){
    return p1 + p2;
}
console.log(add(3,4));

//console.log("message"); -this is a function too

/*callback functions
functions which is passed as parameter to another function
function as a parameter to another function
operator is the callback function 
*/

function apply_operation(num1, num2, operator){ //defined a function w 3 parametres which includes an operator(function itself to be applied to the 2 nums)
    let result = operator(num1, num2);
    //let result = add(3,4);
    return result;
}

function add(n1, n2,) {
    return n1 + n2;
}
console.log("result is " + apply_operation (3,4, add)); // not using add()

function product (n1, n2) {
    return n1 * n2;
}
/* if we try to run this it will not work cos apply_operation above has only 2 parameters defined
function add3 (n1, n2, n3) { 
    return n1 + n2 + n3;
}
*/
console.log("result is " + apply_operation (2,2, product)); 
/*this is an inline function  - doesnt exist outside boundary of this function 
console.log( "difference is " +  apply_operation(3,4 (n1, n2) => {
    return n1 - n2;
    }));
*/

/*this helps make something repeatable. decouples functions. makes it easier to read.
code should be open to extension, close to modification */ 

//example - university which wants to conduct exams
function toolkit1() {
    return "what is the use of <br> tag";
}
function toolkit2() {
    return "what is the role of backend programming";
}
function devops(){
    return "what is the full form of CI/CD";
}

function conductquiz(studentname, module) {
    //print instructions
    console.log("welcome " + studentname);
    //print qs
    console.log(module());
    //print completion msg
    console.log("quiz complete");
}
conductquiz("Debbie", toolkit1);
conductquiz("Debbie", toolkit2);
conductquiz("Debbie", devops);
//javascript designed to change nature or state of value in html etc
