var sum1=3;
console.log(sum1);
function sum(a,b){ //function declaration
    return a+b;
};
console.log(sum(120,4));//function invocation 
console.log(sum(30,10));
function greek(){
    console.log("We Met again :)");
    };
    greek(); //calling //!1st declared the function & then call it in Javascript.
    //sum(argument1,argument2)
    function geek(n){
       // console.log("Hello,",n);
       console.log(`Hello ${n},`);
        console.log("Welcome To Thapa Technical");   
    };
    geek("Ram");
    geek("Vinod");
    //!Function Expression
    var result=function sum(a,b){
    console.log(a+b);
    };
    result(10,40);//In expression we have to call result as expression is declared here
    //!calling sum(10,20) show error in this case
    //just writing result will also show nothing

    //? An anonymous function is a function without a name.It can be created using
    //? either a function expression or a function declaration without a specified name.
    var result=function(a,b){
        console.log(a+b);
        };
        result(10,20);
        var sum1=3;

function sum(a,b){ //function declaration
console.log(a+b);
return a+b;
//!After return nothing get executed
};
console.log(sum(1,2));//without return it shows undefine
 //!IIRFilterNode(Immediately invoked function Expression)
// var result=(function(a,b){
//     console.log(a+b);
//     return a+b;
// })(5,6);
// console.log("sum is:"+result);

//  //interview
//  function cal(a,b){
//     console.log("sum:",a+b);
//     console.log("Sub:",a-b);
//     console.log("Mul:",a*b);
//     console.log("Div:",a/b);
//  }   
//  cal(12,5);
 //!Interview Questions:
 //calculator
 const calculation=(num1,num2,operator)=>{
let result;
switch(operator){
    case "+":result=num1+num2;
             return result;
    case "-":result=num1-num2;
            return result;
    case "*":result=num1*num2;
             return result;
    case "/":if(num2===0){
             return "0 is not allowed";
           }
         else{
            result=num1/num2;
            return result;
           }
        
    }
 }
 console.log(calculation(2,0,"+"));
 //!Reverse a String (Without using builtin reverse function)

 const isPalindrome=(str)=>{
    let i;
    let ans="";
    for(i=str.length-1;i>=0;i--){
        ans+=str[i];
    }
    
    return ans==str;
 }
 if(isPalindrome("level"))
 console.log("Palindrome");
else{
    console.log("Not palindrome");   
}
 
 