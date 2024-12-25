//concatenation in javascript
/* when + operator is used with strings,it concatenate the string together
It's important to note that if any operand of the
+ operator is a string , javascript will treat the other operands as string as well,
resulting in the string concatenation. If both operands are number, the + operator perform numerical
addition,
*/
//coercion in javascript*/
/*Type coercive is the automatic conversion of
"values"from one data type to another.
It is a fundamental part of javascript and can be 
used to make code more readable and efficient .*/
/* There is two type of coercive in javascript:
implicit and explicit. Implicit coercive happen 
automatically,while explicit coercive is done manually by the programmer.
*/
console.log("string"-5);/*it shows NaN */
console.log("5"-5);/* result:0 :"5" due to implicit fun 
this behave happen */
console.log("5"+10);/*//!here this messed
//!concat dominate */
console.log(20+"30");//2030
console.log(9-"5");//4
console.log("java"+"script");//javascript
console.log(""+"");//
console.log(""+0);//0
console.log("vinod"-"thapa");//NaN
console.log(true+true);//2
console.log(true+false);//1
console.log(false-true);//-1
console.log(false+false);//0
//!sum:concat
//!sub:num based sub









