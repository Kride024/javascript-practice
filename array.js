// const name="";(string)
// const name=[];(array=>object)
//const name={};(object)
//console.log(typeof name);


//!Array can be declared through following method:**

//using array constructor
//?let fruits=new Array("apples","Orange","banana");
//?console.log(fruits);

//using array literals
//let fruits=["apples","banana","orange"];
//console.log(fruits);
 
//we can also create an empty array
let arr=[];
console.log(arr);

//!Accessing Elements:**

//let fruits=["apple",'orange',"banana",1];//! avoid this In loop it will show error
let fruits=["apple",'orange',"banana","mango","grapes"];
console.log(fruits[0]);
console.log(fruits.at(-1));

//!Modifying Elements:**
//modify by assigning new values to indexes
fruits[1]="Love";
console.log(fruits);

//!Array Traversal / Iterating Over Arrays**
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

//!push() ,pop(), unshift() ,shift() operation:(part-1)**
//push():Add Element at end
console.log(fruits.push("guava"));//6//currentSize
console.log(fruits);
//pop(): Remove Element From end
console.log(fruits.pop());//guava
console.log(fruits);
//unshift(): Add Element at start
console.log(fruits.unshift(" spiceNoodle"));//6//current size
console.log(fruits);//array
//shift():Remove element from end
console.log(fruits.shift());//spiceNoodle
console.log(fruits);
//! we want to add or remove anywhere in a elements:(part-2)**
// The splice()method of array instances changes the contents of an array by
//removing or replacing existing elements and/or adding new elements in place
//*Syntax:
//? splice(start,deleteCount,item1,item2,/*...,*/ itemN)
//let fruits=["apple","orange","banana","mango"];
//?Example-1:
const life=["journey","study","love","Pain","attentionSeek","noValue"];
//?Example 1:
//console.log(life.splice());//nothing delete([])
//console.log(life);//like original one
//?Example 2:
//console.log(life.splice(1));//from 1 to length of array all deleted only index:0 left
//console.log(life);//only 0 index "journey" print here
//?Example 3:
//console.log(life.splice(0));//from 0 index to end all element got deleted
//console.log(life);//[]array found here
//?Example 4:
//console.log(life.splice(2,4,"Happiness","selfWorth","Force","Avoid"));
//console.log(life);
//?Example 5:
//console.log(life.splice(-2,0,"grapes"));
//console.log(life); //?we can put value anywhere according to our choice
//?Example 6:
console.log(life.splice(life.length,0,"me"));
console.log(life);
//!always for syntax


//!Searching and Filter in an Array**
//const numbers=[1,2,3,4,6,5,6,7,8,9];
// ?for search we have - indexOf,lastIndexOf & includes 
//! 1.indexOf Method: the index return first of find element otherwise -1.
//? syntax:
//indexOf(searchElement,fromIndex)
//*Example 
//console.log(numbers.indexOf(6));
//!console.log(numbers.lastIndexOf(6));// 3 type example (lastIndexOf)

//*Example 2
//console.log(numbers.indexOf(5,6));
//*Example 3
//console.log(numbers.lastIndexOf(6,4));
//*Example 4
// const result=numbers.lastIndexOf(6,4);
// console.log(result);


//! 2.Includes() Method: Does array contain certain element return (T/F)
//? syntax
// Includes(searchElement,fromIndex)
//console.log(numbers.includes(6));

//todo challenge time
// const months=["Jan","march","April","June","July"];
// months.splice(months.length,0,"Dec");
// console.log(months);
// console.log(months.splice());
// months.splice(1,1,"March");
// console.log(months);
// months.splice(3,1);
// console.log(months);

//!Filter in an Array **
 //const numbers=[1,2,3,4,5,6,7,8,9,9];
// //?1. find Method:find first element in array that satisfy provided condition(testing function)(First matching element or undefine if no element matches).
 //Example 1:
// const result=numbers.find((curEl)=>{
//   return curEl>8;
// });
// console.log(result);

//?2 findIndex Method:return index of satisfied(testing function) element in the array.(if not satisfy return -1)
 //!Example 1:
//  const result2= numbers.findIndex((el)=>{
//     return el>8;
//  });
 //console.log(result2);
 //!Example 2://!imp*
//  const ans=numbers.map((el,idx,arr)=>{
// return el*6;
//  });
//  const find=ans.findIndex((el)=>{
//  return el>30;
//  });
//  console.log(find);
//? 3. filter Method: The filter method return overall array element that satisfy testing function.
//Ex:delete 6 item:
// let updateCard=numbers.filter((ele)=>{
//   return ele!=6;
// });
//   console.log(updateCard);
// //*Ex:Filter Product by price
// const products=[
// {name:"Laptop",price:1200 },
// {name:"Phone", price:800},
// {name:"Tablet",price:300},
// {name:"Smartwatch",price:150},
// ]//these all are object
// //* filter products with a price less than or equal to 500
// let filterProduct=products.filter((ele)=>{
// console.log(ele.price);
  
//   return ele.price<=500;//! To reach element in object we need "."(unlike array"[]" we were using)
// });
// console.log(filterProduct);
//*Ex: Find unique values
 //numbers=[1,2,3,4,5,6,7,8,9,9];
// const value=numbers.filter((ele,idx,arr)=>{
// return idx==arr.indexOf(ele);
// });
// console.log(value);
//! set theory
//? console.log(new Set(numbers));
//? console.log([new Set(numbers)]);
//? console.log(... new Set(numbers));

//! how to compare and sort Array**

//numbers=[1,2,3,2,6,4,5,6,7,8,9,9];
//?numbers.sort();//!below operation done here
//?  greater to less
// numbers.sort((a,b)=>{
//   if(a>b)return -1;
//   if(b>a) return 1;
// }
// );
//console.log(numbers);
//? less to greater
// numbers.sort((a,b)=>{
//   if(a>b)return 1;
//   if(b>a) return -1;
// }
// );
// console.log(numbers);




// !interview questions:
//?Question 1: Convert Given Screen to uppercase
// const year=["Jan","Feb","March","April","May","June"];
// const string=year.map((ele)=>{
//   return ele.toLowerCase();
// });
// console.log(string);



//? Question 2: return ele square which are even
//question 1:
//! type 1:
// const numbers=[1,2,3,4,5];
// const result=numbers.filter((ele)=>{
// return ele%2==0;
// });
// const ans =result.map((ele)=>{
//   return ele*ele;
// });
// console.log(ans);
//! type 2:
// const numbers=[1,2,3,4,5]; 
// const result=numbers.map((ele)=>{
//   return ele*ele;
// }).filter((ele)=>{
//   return ele%2==0;
// });

// console.log(result);//!chain rule

//? Question 3: return string with "Mr."

// const year=["Jan","Feb","March","April","May","June"];
// const nw=year.map((ele)=>{
//   return "Mr."+ele;
// });
// console.log(nw);

//! Reduce method (final total like avg in e-commerce website)
  // const productPrice=[100,200,400,300,500];
  // const totalPrice=productPrice.reduce((acc,ele)=>{
  //   return acc+ele;
  // },0)
  // console.log(totalPrice);
  
















