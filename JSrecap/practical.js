//add

function add (p1, p2){
    return p1 + p2;
}
console.log(add(3,4));

//subtract
function minus (p1, p2){
    return p1 - p2;
}
console.log(minus(3,4));

//multiply
function multiply (p1, p2){
    return p1 * p2;
}
console.log(multiply(3,4));

//check leap year
function checkLeapYr(year) {

    //is divisible by 4 not evenly divided by 100 or is evenly divisible by 400
    if ((year % 4 ==0) && (year % 100 != 0 ) || (year % 400 == 0)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}
checkLeapYr(2000);

//convert inches to cm
function converttocm (inchesinput) {
    return inchesinput * 2.5;
}
console.log(converttocm(1));

// check null or blank input
function isNullOrBlank (input) {
    if (input == null){
        return true;
    } else {
        return false;
    }
}
console.log(isNullOrBlank("1"));

/*
let leapYr = function(a){
if (a % 100 == 0 ) {
        return console.log("not leap yr");
}
else if (a % 400 == 0 ) {
    return console.log("is leap year")
}
else if (a % 4 == 0){
    return console.log("is leap year")
}
else 
    return console.log("it is not a leap year");
}
console.log(leapYr(2004)); */