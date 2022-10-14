// magic 8 logic

const question_span = document.getElementById("user-input-question");
const m8Answer_span = document.getElementById("m8-answer");
const btn = document.getElementById("btn-shk");

// let userName ='Jane'; 

let userQuestion = 'Will i go to the beach tomorrow?'; 

// userName? console.log(`Hello,${userName}`) && console.log (userQuestion):console.log('Hello'); 

// console.log(`${userName} asked ${userQuestion}`); 
// //      declaierd name  = element in html           
// const rock_div = document.getElementById("btn-flip"); // flip button
//rounds the number off with math floor creating random number range between 1-8 
// let button = document.querySelector("#btn-shk");

btn.addEventListener("click", function(){
    alert ("clicked ");

});

 let randomNumber = Math.floor(Math.random()*8); 

// console.log(randomNumber) 

let eightBall = ''; 


eightBall = randomNumber;
let userQ =userQuestion;

 question_span.innerHTML =userQ;

switch( eightBall ){ 

 case 1: 

return (`It is certain`); 

break; 

case 2: 

return (`It is decidedly so`); 

break; 

case 3: 

return (`Reply hazy try again`); 

break; 

case 4: 

return (`Cannot predict now`); 

break; 

case 5: 

return (`Do not count on it`); 

break; 

case 6: 

return (`My sources say no`); 

break; 

case 7: 

return (`Outlook not so good`); 

break; 

default: 

return (`Signs point to yes`) 

break; 

} 
m8Answer_span.innerHTML = eightBall
