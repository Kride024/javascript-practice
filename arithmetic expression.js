var ans="hello"/23;
console.log(ans);//NaN
var ans1=0.1+0.2;//0.300000000004
var ans2=0.2+0.2;//0.4
 //!problem due to binary conversion(computer always do binary conversion)
//!To fixed this we use "toFixed(decimal places want)"
console.log(ans1.toFixed(2));
var ans3=34*"hello";//NaN
console.log(ans3);
//?They are case sensitive
/*=== strictly equal to (checks two values
are equal without performing coercion)*/
console.log(3==="3");
console.log(3=="3");
//?console.log(5<"FSF");//not define
var age=18;
var had_License=false;
if(age>=18 && had_License){
    console.log('Enjoy Life');  
}
else
console.log('Use phone');
/*Ternary operator:
condition?expressionIfTrue:expressionIfFalse ;*/
var ag=14;
ag>=18?console.log("Can drive"):console.log("Busy On Phone");
var score=56;
var result=score>=60?"FrontBencher":"Backbencher";
console.log(result);
//  Interview questions
console.log( typeof"5"-3);
console.log(2<12<8);
console.log("20"+10+10);

