"use strict";

// let n = ((x = 1), (y = 2), (z = 3));

// if(n <= 5){
//   console.log("No strict :(");
// }else{
//   console.log("Strict added");
// }

let claraScore = 65;

let passScore = 70;

if (claraScore >= passScore) {
  console.log("Clara passed her exams");
} else {
  console.log("clara failed whofully ):");
}

// Assignment operators

let x = 10;

x += 25;

// this is done based on operator precedence 
console.log(x);

// pre unary 
let preAdd = ++x; 
console.log(preAdd);

let postAdd = x++; 
console.log(postAdd);