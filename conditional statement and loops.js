var userAge=19;
var isCitizen=true;
var isRegistered=true;
if(userAge>=18){
if(isCitizen){
if(isRegistered){
console.log("You're Eligible to vote");
}
else{
    console.log("You're not eligible due to Registration status ");  
}
}
else{
    console.log("You're not eligible due to citizen status ");
    
}
}
else{
   console.log("You're not eligible due to Age limit(Younger)");
    
}
//!Write a program to check if number is even or odd
var num="6";
if(num%2===0)
    console.log("even");
    else
    console.log("Odd");
//! Example for switch statement
var day="Tuesday";
switch(day){
    case "Monday":console.log("Aaj Buck Karte hai");
    break;
    case "Tuesday":console.log("Aaj Sonya chayega + Lunch mei nimoona chawal");
    break;
    case"saturday":console.log("Bhai shots maar Full mobile use ");
    break;
    case "sunday":console.log("break bhai");
    break;
    default:console.log("Dal mei Kuch Kala Hai");    
}
//! Example for switch statement
var a=5;
var b=10;
var r=4;
var ar;
var shape="square";
switch(shape){
    case "Circle":ar=(3.14)*r*r;
    console.log("Circle"+ar);
    break;
    case"rectangle":ar=a*b;
    console.log("rectangle:"+ar);
    break;
    case"square":ar=a*a;
    console.log("Square:"+ar);
    break;
    default:
        console.log("Choose Wrong input");   
}
//!Examples for loop
var num=1;
while(num>0){
    console.log(num);
    
    num--;
}
//!Do-while loop
num=7;
do{
    console.log(num);
    num--;
}while(num>0);
//!validity example(run in console)
// var userInput;
// var positiveNumber;
// do{
//     userInput= prompt("Enter any positive number");
//     positiveNumber=parseFloat(userInput); 
// }while(isNaN(positiveNumber)||positiveNumber<0);
// console.log("You entered a valid positive number:",positiveNumber);

//Table Example
var a=12;
var b=1;
while(b<=10){
    // console.log(a+" * "+b+" = "+a*b);
    console.log(`5 * ${b} = ${5*b}`);
    b++;
    }
    //For validating number we use do while loop
   //! for(;;){} and while(true){} are same
   //!Use case:Game Development:a infinite loop is use for
   //!continuous update and render game frame until specific condition
   //!(e.g., game over) is met.
   // network(wifi)show in game happen due to loop

    