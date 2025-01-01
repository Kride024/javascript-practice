//! for emoji use "window + ."
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
//(-1)
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
//null (case sensitive)
// let text="Hello People, lala looking forward Hello for more";
// let result =text.match(/hello/i);
// console.log(result);
// let result1=text.match(/hello/ig);//i: ignore, g:global here you can see use of g bcz here by including this U get element search else than array
// console.log(result1);
//! matchAll():Returns an iterator of all matches, providing detailed information about each match .Return an empty iterator if no match is found.
// {} (not case sensitive)
// let text="Hello People, lala looking forward Hello for more";

// let matchResult=text.matchAll("Hello");
// 1. console.log(...matchResult);


// 2. for ( let item of matchResult){
//     console.log(item);  
// }
//*Both 1 & 2 are same !!

//! key Other ways
// * Only to get element value we use iterator

    // for (let item of matchResult) {
    //   console.log(item[0]);
    // }

// for(let index of matchResult){
//     console.log(index.index);
//     }

 
// for(let {input} of matchResult){
//     console.log(input);
    
// }


//! includes(): Returns true if string contains the specific value, else false.
// case sensitive //came in ES6 feature
// we can'nt take regular expression over here like (/hey/i)":("
// let text="Hello People, lala looking forward Hello for more";
// console.log(text.includes("HelLi"));


//! startsWith(): The startsWith() return true if string begin with specified value else return false;
//case sensitive
// let text="Hello People, lala looking forward Hello for more";
// console.log(text.startsWith("Hello People"));
// //* specify start position
// console.log(text.startsWith("lala",14));

//! endsWith(): The endsWith() method return true if string end with specified value ,else false;
// console.log(text.endsWith(" more"));

//! Extracting string Parts:

//? String.prototype.substr() it is deprecated ❌

//? a. slice() extracts a part of a string and return the extracted part in a new string.
//* syntax:
//slice(start,end) (last end index don'nt included, start index from 0)
 //* example 1:
//  let text="Hello People, lala looking forward Hello for more";
//  console.log(text.slice(4));
//  console.log(text.slice(7,25));

 //? b. substring() extracts a part of string based on starting and ending index.
 //camelCase used to separate words,substring is not intended as Sub String but as Substring.
 //*syntax:
//  substring(indexStart) //index start with 0
//  subString(indexStart, indexEnd);
//? substring() is similar to slice().The difference is that start and end values less than 0 in
//? substring treated as 0,But in slice() work as negative index and then took start point 
// let text="Hello People, lala looking forward Hello for more";
// console.log(text.slice(-4));
// console.log(text.substring(-4));

//! Similarity
//todo In both the slice() and substring() methods,the end parameter indicates the ending index up to which the extraction occur, but the character at the end index is excluded from substring.

//? interview Questions:
//let text="Hello People, lala looking forward Hello for more";
//let result = text.slice(1);
 //let result=text.replace("H","");//(first exist H will only replace)
//let result=text.substring(1);
//console.log(result);(all three give same result)

//! Key concept
//let result=text.replace("Hello","lovely"); // remove first exist element
//let result=text.replaceAll("Hello","Vinod"); //replace all existing element
//console.log(result);

//! Extracting String Characters
//There are 3 methods for extracting string characters:

//?The charAt(position)Method
//?The charCodeAt(position)Method
//?The at(position)Method

//* charAt(): The charAt() method returns the character at a specified index (position) in a string.
// negative index not consider
//let text="Hello People, lala looking forward Hello for more";
// let result=text.charAt(6);
//  let result=text.charAt(-6); //{}mean blank space we get
//console.log(result);

//*charCodeAt(): The charCodeAt() method returns the code of the
// negative index not consider
//character at a specified index in a string. The method returns a
//UTF-16 (an integer between 0 and 65535).
//let text="Hello People, lala looking forward Hello for more"; 
// let result=text.charCodeAt(6);
//let result=text.charAt(-6); //{}mean blank space we get
//console.log(result);

//todo ES2022 introduced the string method at():
//? The at() method returns the character at a specified index (position).same as charAt()
//negative index also work here
//let text="Hello People, lala looking forward Hello for more"; 
//let result=text.at(6);
//let result=text.at(-6); //{}mean blank space we get
//console.log(result);

//! Replacing String Content:
//? replace(): The replace method is used to replace a specified value with another value.
//* Example:1
// const str="Hello,World!";
//const newStr =str.replace("World","Vinod");
// const newStr =str.replace(/World/,"Vinod");
// console.log(newStr);
//* Example:2
// let text="Hello People, lala looking forward Hello for more"; 
// const newStr =text.replace(/hello/ig,"Vinod");
// console.log(newStr);

//! Other useful Method:
//* toUpperCase() 
// let text="Hello People, lala looking forward Hello for more"; 
// console.log(text.toUpperCase());
//*toLowerCase()
// console.log(text.toLowerCase());
//* trim:Removes whitespace from both ends of the string
// Example 1:
// const str="       Hello,World!      ";
// console.log(str.length);
// let trimStr=str.trim();
// console.log(trimStr);
// console.log(trimStr.length);

//* split: splits the string into an array of substrings based on a specified delimiter.
const str="apple,orange,banana";
// 1.let strArr = str.split(",");
//? 2.  let strArr = str.split(",").reverse();**
// 3. let strArr= str.split("").reverse();
// 4.  let strArr= str.split(",").reverse().join(); //(array to string again through join())
// 5. console.log(strArr);

//! Interview Question :

//? Write a JavaScript function that print the letter 'a' through 'z' in the console. You should
// use a loop to iterate the letters and print each one on a new line?

console.log("a".charCodeAt(0));//97
console.log("z".charCodeAt(0));//122
//! to convert code to char : fromCharCode(char) (we putting string bcz there it exist)
for(let char=97;char<123;char++){
    console.log(String.fromCharCode(char));    
}

//? Write a function to check if all the vowels presents in a string or not ?
let items="my name u is vinod @ thapa";
const checkAllVowelPresentOrNot(items)=

console.log(checkAllVowelPresentOrNot(items));







