//! String in JavaScript

//!  Length of string : str.length;
//length of a string is the number of character it contains,
//including spaces, punctuation, and control characters.
// const str="kriti yadav \n yes";
// console.log(str);

//! Escape Character
//In javascript "\"used as escape character
// like: \' , \" ,\\
//Example 1:
//console.log(" \'kriti\' how are you do you \"suffering\" \n listen you're not this weak now you are young your maa is old \n lady yet handling everything \n so gracefully so how could you lie down at \nfront of such problem which can easily solve focus on upcoming life \n there you have to available bcz she has that expectation which keep her moving");

//!String search Methods
//? a. indexOf(): The indexOf() method returns the index (position)
//of the first occurrence of a string,or return -1 if the string is not found.
//?syntax
//indexOf(searchString);
//indexOf(searchString, position);
//*Example 1:
// const str="Thapa Technical";
// console.log(str.indexOf("ech"));
 //!Example 2: (Extra)
// const str="Thapa Technical"
// let strArray=Array.from(str);
// console.log(strArray);
//? get element with index through map
// let strMap=strArray.map((ele,index)=>{
//     return `${ele}-${index}`;
// })
// console.log(strMap);
//? b. lastIndexOf(): The lastIndex() method returns the index of the last
//occurrence of a specific text in a string.
//? Syntax
// lastIndexOf(searchString)
// lastIndexOf(searchString ,position)(position specify from zero to position you have range to find)
//!Example 1:
// let text="hello guys,guys welcome hows life workout   and made change"
// console.log(text.lastIndexOf("guys",10));
//? c. search():The search() method searches a string for a
//string (or a regular expression) and return the position of the match.
//(return first index where match found else return -1).
//!Example 2:
//  let text="Hello People, lala looking forward Hello for more";
// const result=text.search(/la/);
// console.log(result);

 //  console.log(text.search("Hello"));
//  console.log(text.search(/He/));
//  console.log(text.search(/hello/));
//  console.log(text.search(/Hello/g));//*( g represent global search but always consider first index)
//  console.log(text.search(/hello/i));//!(i represents ignore case-sensitivity)
// * Important Tips:
//! In search you cannot write position

//! match(): Return an array of the matched value or null if no match is found.
let text="Hello People, lala looking forward Hello for more";
let result =text.match(/Hello/);
console.log(result);



 











