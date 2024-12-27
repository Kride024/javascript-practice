//let:temporary assign and const:permanent assign keywords
//we stop using var bcz it can access from anywhere
//!application
//?var
// if(true){
  //  let name="sleepingBeauty";
  //  console.log(name);;
   // }
//console.log(name);
//?let
if(true){
    let name="sleepingBeauty";
    console.log(name);;
    }
//console.log(name);
// !block level Access work great for security reasons
//?const
const name="sleepingBeauty";
if(true){
   // name="phoneUse";(Reassignment is not possible and not accepted)
    console.log(name);
    
}
//!To open terminal (ctrl+`)

//! Template string:also known as template literals,inclose in(``)else than single or double quotes
//Example 1: 
let firstName="Vinod";
 let secondName="Thapa";
 let fullName=`${firstName}  ${secondName}`;
 console.log(fullName);
//Example 2:
let age=30;
let message=`I am ${age} year old.`
console.log(message);
let multilineString=`
This is a multi-line
string using template literals.
It's much cleaner and easier to read.
`;
//Example 3:
let i=9;
console.log(multilineString);
console.log(`5 * ${i} = ${5*i}`);

//! default values used when no input properly given 

function sum(a=20,b=10){
    return a+b;
}
console.log(`sum: ${sum()}`);
console.log(`sum: ${sum(2,14)}`);

//!Arrow Function
//!Example1:
//Earlier
const Sum=function(a,b){
    //let result=`The sum of ${a} and ${b} is ${a+b}.`;
    console.log(`The sum of ${a} and ${b} is ${a+b}.`);   
};
Sum(2,3);
//latest:
const SharedA=(a,b)=>console.log(`the sum:${a}+${b}=${a+b}`);

SharedA(2,4);
//!Example2:
const square=a=>console.log(`the sum:${a}*${a}=${a*a}`);
square(2);//bracket across a remove avoid this practice
//!Example3:
const greek=()=>console.log(`Hey ! Guys`);
greek();





