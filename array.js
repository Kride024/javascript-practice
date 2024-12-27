// const name="";(string)
// const name=[];(array=>object)
//const name={};(object)
//console.log(typeof name);


//!Array can be declared through following method:

//using array constructor
//?let fruits=new Array("apples","Orange","banana");
//?console.log(fruits);

//using array literals
//let fruits=["apples","banana","orange"];
//console.log(fruits);
 
//we can also create an empty array
let arr=[];
console.log(arr);

//!Accessing Elements:

//let fruits=["apple",'orange',"banana",1];//! avoid this In loop it will show error
let fruits=["apple",'orange',"banana","mango","grapes"];
console.log(fruits[0]);
console.log(fruits.at(-1));

//!Modifying Elements:
//modify by assigning new values to indexes
fruits[1]="Love";
console.log(fruits);

//!Array Traversal / Iterating Over Arrays
//1. for of loop,also known as iterable
/*for(let item of fruits){
//    console.log(item);
  //  }
for(let item=0;item<fruits.length;item++){
    console.log(fruits[item]);   
}*/
//2.for in loop(iterate over indexes)
//index=>i
for(let item in fruits){
    console.log(item);   
}







