"use strict";
//! Topics Arrays :-
//* Arrays:- An array ia a list of values stored n singal veriable.means ky multiple values ko store kar lyta ha .
//? Collection of value ....
// !                      0        1        2
// const arr:string[] = ["karachi","lahore","punjab"]
// const msg:string[] = ["I love"]
// console.log(`${msg} ${arr[0]}`);
// console.log(`${msg} ${arr[1]}`);
// console.log(`${msg} ${arr[2]}`);
// const arr1:number[] = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr1[5]);
// const arr = ["jaweria", 78765544 , true]
//! Array Method......
//? 1- Pop
//? 2- Push
//? 3- Shift
//? 4- Unshift
//? 5- Slice 
//? 6- Splice
//! Pop... 
//* Pop method:- pop method humary array ky last element ko remove karta ha .
// const arr1:number[] = [1, 2, 3, 4, 5, 6, 7]
// arr1.pop()
// console.log(arr1);
//! Push.... 
//* Push:- push method  humary array ky last me ek value ko add kar dytaaa ha...
// const arr2:number[] = [1, 2, 3, 4, 5, 6, 7]
// arr2.push(10)
// console.log(arr2);
//! Shift... 
//* Shift:- humary arrays ki first value ko remove kar dyta ha....
// const arr3:number[] = [1, 2, 3, 4, 5, 6, 7]
// arr3.shift()
// console.log(arr3);
//! Unshift... 
//* Unshift:- unshift method humary array ky start me ek element ko add karta ha...
// const arr4:number[] = [1, 2, 3, 4, 5, 6, 7]
// arr4.unshift(0)
// console.log(arr4);
//! Slice.... 
//* Slice Method :- slice method humny retrun selected items array me sy ek new array me ...
// !                   0  1  2  3  4  5  6
// const arr5:number[] = [1, 2, 3, 4, 5, 6, 7]
// const newArray:number[] = arr5.slice(1,4)
// console.log(newArray);
// const friends:string[] = ["jiya","noor","alishba","wayna"]
// const newArray1:string[] = friends.slice(0,3)
// console.log(newArray1);
//! Splice... 
//* Splice Method :- Splice method humary array me sy selected value to delete or replace kar dyta ha or humary original array ko bhi change kar dyta ha ...
// const friends1:string[] = ["jiya","noor","alishba","wayna"]
// const newArr:string[] = friends1.splice(0,2, "zuhaa","maria" )
// console.log(newArr);
// console.log(friends1[0]);
//! Map... 
//* Map Method:- sab sy best part pata ha kiya ha ya data ko mutetat  nhi arta balky ek new array bana kar dyta ha with changing original array .
let array = [1, 2, 3, 4, 5, 6, 7, 8,];
//? Double each number...
// let doubleNum = array.map((currentVal:number) => currentVal * 2)
// console.log(doubleNum);
//? Convert number into string...
// const numchange = array.map((currenyEle)=> currenyEle.toString())
// console.log(numchange);
//! Filter... 
//* Filter Method:- filter method humary array me sy valu filterout kar dyta ha .
//? Filter even number ...
// const evenNumber:number[] = array.filter((currentEle)=> currentEle % 2 === 0)
// console.log(evenNumber);
//? number grater than 3...
// const numGreater:number[] = array.filter((CurrentEle:number)=> CurrentEle > 3)
// console.log(numGreater);
//! Join... 
//* Join Method:- kisi bhi array ky item ko retrun karta ha string ki shakal me or usko seprate karta ha by defualt comma sy..
// let array8:number[]=[ 1, 2, 3, 4, 5, 6, 7, 8, ]
// let space =  array8.join(" - ")
// console.log(space);
//! Find... 
//* Find Method:- find method humary array me sy value ko find kar ky dy dyta ha means hum jo bhi value dyty ha wo phaly usy array me dhundta ha or jab usy mil jatii ha value tab wo print kar dyta ha.
// const arr:string[] = ["apple","mango","banana"] 
// const result = arr.find((val)=> {
//     return val == "mango"
// })
// console.log(result);
//! Include... 
//* Include Method:- agar hum array me sy kisi value ko search karna chaty ha to us ky liya hum include method use kary gy or ya humy ans me do hi falue print kar ky dyta ha ya true/ false bilkul if ki condition ki tarha.... 
// const arr:string[] = ["a","b","c","d","e","f",]
// const ans:boolean = arr.includes("c",3)
// console.log(ans);
//! Fill.... 
//* Fill Method:- fill method humary array ky sary method ko fill kar dyta ha lkn static value ky saat.
//? syntax:- array_name.fill(value,start,end)
// const arr:number[] = [1, 2, 3, 4, 5, 6, 7]
// const result = arr.fill(10, 1,5)
// console.log(result);
//! Concate... 
//* Concat Method:- concat method arrays ko apas me cocat kar dyta ha ...
const arr1 = [1, 2];
const arr2 = [3, 4];
const result = arr1.concat(arr2);
console.log(result);
