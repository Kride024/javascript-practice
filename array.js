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
//?1. for of loop,also known as iterable**
// for(let item of fruits){
//     console.log(item);
//     }
// for(let item=0;item<fruits.length;item++){
//     console.log(fruits[item]);   
// }
//?2.for in loop(iterate over indexes)**
//index=>i
for(let item in fruits){
    console.log(item);   
}

//? 3.forEach Method**
//  The arr.forEach() method calls the provided function
//once for each element of the Array. The provided
// function may perform any kind of operation on the 
// elements of the given arrays.
//! Performs an action on each element
//! Syntax (Earlier):
//? Array.forEach(function callback(currentValue,index,array){
//?   your logic here
//? },thisValue);
// In this array,callback,current Value are compulsory 
//! Syntax (Latest)
//Array.forEach((currentValue,index,array)=>{
  //your logic here
//},thisValue);
//? 4. map function** 
//  map() creates a new array from calling a function
// for every Element.map() does not change the 
// original Array.
//! Create a new array with transformed elements
//! Syntax (Earlier)
//array.map(function callback(currentValue,index,array){
  //your logic
//},thisValue);
//! Syntax (Latest)
//array.map((currentValue,index,array)=>{
  //logic
//},thisValue);
// In this array,callback,current Value are compulsory 
 //? different btw both map can return function as array but for
 //?each shows undefine but both can print inside loop
//!Example 1:
 const valueExpression=fruits.map((currentValue,index,arr)=>{
 return `${currentValue} and ${index}`;
//  return`${arr}`;
});
console.log(valueExpression);
//!To-do
const number=[1,2,3,4,5];
const forwardValue=number.map((curr)=>{
  return `${curr*2}`;  
})
console.log(forwardValue);
//?! main point
//? chaining
// forEach: it doesn't return a value,so if cannot be directly chained with other 
// array method.

// map:Since it return a new array, you can chain other array methods after 
// using map.

//? Use Case
// ForEach; Used when you want to iterate over the array elements and perform an 
// action on each element, but you don't need a new array.
// map:Used when yo want to create a new array based on the transformation
// each element in the original array.

//!push() ,pop(), unshift() ,shift() operation:
//push():Add Element at end
console.log(fruits.push("guava"));
console.log(fruits);
//pop(): Remove Element From end
console.log(fruits.pop());
console.log(fruits);
//unshift(): Add Element at start
console.log(fruits.unshift(" spiceNoodle"));
console.log(fruits);
//shift():Remove element from end
console.log(fruits.shift());
console.log(fruits);





