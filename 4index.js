//Type conversion from string number boolean

// let age = window.prompt(`how old are you`);

// age+= 1;

// console.log(age);

// THIS IS AN EXAMPLE THAT U CANT EASILY ADD WITHOUT CONVERSION

// let age = window.prompt(`how old are you`);

// age = Number(age);
// age+=1;

// console.log(age);
//But when using conversion, put the conversiion variable before the 
// change value

// let age;



// document.getElementById("button").onclick = function(){
//     age = document.getElementById("text").value;
//     age = Number(age);
//     age+=1;

//     document.getElementById(`content`).textContent = `You are ${age}`
//     console.log(`you are ${age}`);
//     console.log(typeof age)
// }

// //Type of helps define what kind of data a value is..u put this in a 
// // console .log to display, they may be other ways i will discover later.
// //we neede type converion to change age from string to boolean

// let x =`pizza`;
// let y = `pizza`;
// let z = `pizza`;

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x ,y, z)

//boolean is a true or false statement
// you can use an empty boolean /let x = ``.....so u can use an if stat..
//ment to verify if the user input is empty..eg if x is empty like get 
//document from text input and it is ``=meaning empty .then we can say x=
//get elemnet .text content and say PLEASE TYPE UR NAME

//CONST = a variable that cant be changed

// we are looking for circumfrence
// Make pi const to prevent change of data
// const pi = 3.14159;
// let radius;
// let circumfrence;



// document.getElementById(`button`).onclick = function(){
//     radius = document.getElementById(`text`).value;
//     radius = Number(radius)
//     circumfrence =  2 * pi * radius; 
//     console.log(circumfrence + `cm`);
// }

//Counter program
const increasebtn = document.getElementById(`increasebtn`);
const resetbtn = document.getElementById(`resetbtn`);
const decreasebtn = document.getElementById(`decreasebtn`);
const countlabel = document.getElementById(`countlabel`)

let count = 0;

increasebtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}
resetbtn.onclick = function(){
    count=0;
    countlabel.textContent = count;
}
decreasebtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}