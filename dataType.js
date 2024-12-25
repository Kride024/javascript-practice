// var name="kriti"; Use Camelcase
var myName="kriti";
const _kriti=3n;
// var $kriti; undefine case box don't open we have no idea of it
// var __kriti=null; box open but have nothing
myName=0;
console.log(myName);
console.log(_kriti);
// console.log($kriti);   
// console.log(__kriti);
console.log(typeof _kriti);
console.log(typeof myName);
// convert string to int
var _m="34";
console.log(typeof _m);
console.log(typeof +_m);// method-1
console.log(typeof Number(_m));//method-2
//convert int to string
let str=5; //mostly let use to declare value under braces/bracket
console.log(str);
console.log(typeof String(str));//method-1
console.log(typeof (str+""));//method-2
/**We use parseInt to convert string to whole number and 
 * parseFloat to convert string to floating whole 
 * number(decimal number)
 * it convert as much as string given until
 * an unknown character encounter Ex "7Life3"
   in this 7  get print only and other thing get 
   ignored.. 
*/
 var s1="42.5";
 var s2="7Life6";
 var s3="42.5";
 var s4=parseInt(s1,10);
 var s5=parseInt(s2);
 var s6=parseFloat(s3);
 console.log(s4,10);
 //second box represent base 10(radix)
 console.log(s5);
 console.log(s6);
 console.log(isNaN(myName));
 console.log(isNaN("5"));//here it is in " "feel like string don't use that much brain only focus on that number
 //NaN==NaN(false statement)
  
 
 
 

