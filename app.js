// function a(a=10,b=8){
//     console.log(a+b);
//     for(i=0;i<=arguments.length;i++)
//      console.log("hii");
// }
// a(5,6,7,8);

// function palindrome(num){
//     if(typeof(num)!="number"){
//         throw Error("Data type must be number")
//     }
//     let temp=0
//     n1=num
//     while(num!=0){
//         temp=temp*10+num%10
//         num=(num-num%10)/10
//     }
//     return temp==n1?true:false
    
// }
// console.log(palindrome(121));
// console.log(palindrome("hii"));

// let x=function(a=10,b=18){
//     console.log(a+b);
// }
// console.log(x());

// (function(){
//     console.log("hii");
// })();

// let x=(function(a,b){
//     console.log(a)
//     console.log(b)
//     return a+b
// })(10,20)
// console.log(x);

// let x=(a,b)=>a+b
// console.log(x(18,45));

// ((a,b)=>console.log(a+b))(18,45)

// let x=_=>console.log(20+30);
// x();

// function a(){
//     return function(){
//         return function(){
//             return 10
//         }
//     }
// }
// console.log(a()()());

// function user(u,a){
//     return function action(){
//         return function allowed(){
//             if(u=="admin"){
//                 return true;
//             }
//             if(u=="editor"){
//                 if(a=="edit"||a=="create"||a=="read"){
//                     return true;
//                 }
//                 else {return false;}
//             }
//             if(u=="viewer"){
//                 if(a=="read"){
//                     return true;
//                 }
//                 else{ return false;} 
//             }
//         }
//     }
// }

// console.log(user("viewer","create")()());


// console.log("hii");

// function gp(){
//     let x=10
//     function p(){
//         let y=20
//         function c() {
//             console.log(x+y);
//         }
//         c()
//     }p()
// }gp()

// function curring
// function sum(a){
//     return function (b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }console.log(sum(10)(20)(30));

// function cart(sum=0){
//     return function(a){
//         if(a==undefined) return sum
//         else return cart(sum+a)
//     }
// }console.log(cart(10)(20)(50)());
// console.log(cart(10)(20)(50)(80)(100)());

// generator functions
// function*demo(){
//     yield 1
//     yield 2
//     yield 3
//     yield 4
// }
// let x=demo()
// console.log(x.next().value);
// console.log(x.next().value);
// console.log(x.next().value);
// console.log(x.next().value);
// console.log(x.next().value);

// Arrays
// let userData=["Akash",21,"m",false]
// console.log(userData);

// let x=Array("Akash",21,"m",false)
// console.log(x);
// x[1]=16
// x[100]=50
// console.log(x[5],x[100]) undefined,50
// for(i=0;i<x.length;i++){
//     console.log(x[i]);
// }

// for(let a of x){
//     console.log(a);
// }

// function addLast(a){
//     let i=1
//     while(arguments[i]!=undefined){
//         a[a.length]=arguments[i]
//         i++
//     }
//     return a
// }
// let x=Array("Akash",21,"m",false)
// addLast(x,10,15,18,17)
// console.log(x);
// console.log(x.pop());

// function deleteLast(a){
//     let b=a[a.length-1]
//     a.length=a.length-1
//     return b
// }
// let x=Array("Akash",21,"m",false);
// deleteLast(x);
// console.log(x);

// function addFirst(){
//    let a=arguments[0]
//    let shift=arguments.length-1
//    for(let i=a.length-1;i>=0;i--){
//     a[i+shift]=a[i]
//    }
//    for(let i=0;i<=arguments.length-1;i++){
//     a[i]=arguments[i+1]
//    }
//    return a
// }
// let x=Array("Akash",21,"m",false);
// addFirst(x,15,17,19,28)
// console.log(x);

// function removeFirst(a){
//     let j=0
//     for(let i=1;i<a.length;i++){
//         a[j]=a[i]
//         j++
//     }
//     a.length=a.length-1
//     return a
// }
//  let x=Array("Akash",21,"m",false);
//  console.log(removeFirst(x));
// console.log(x.shift());
// console.log(x.unshift(10,15,20));
// console.log(x);

// let arr=[1,5,7,8]
// arr.splice(2,0,18,17,21);
// console.log(arr);
// console.log(arr.splice(3,1));
// console.log(arr);
// let arr2=[17,19,14,12]
// let x=arr.concat(arr2)
// console.log(x);
// console.log(x.slice(2,5));
// console.log(x.reverse());
// console.log(arr.toString());
// console.log(arr.join("-"));

// let x=["virat","rohit","msd","abd","faf"]
// console.log(x.sort());
// let y=[7,9,2,6]
// console.log(y.sort((a,b)=>a-b));
// console.log(y.map((a,b,c)=>a*2));
// console.log(y.map((a,b,c)=>a*b));

// function myMap(arr,callBack){
//     let newArr=[];
//     for(let i=0;i<arr.length;i++){
//         newArr[i]=callBack(arr[i],i,arr)
//     }
//     return newArr
// }
// console.log(myMap(y,(a)=>a*3));

// let x=[1,4,32,5,87,7,98,6,10,9,26]
// console.log(x.filter((a)=>a<10));

// function myFilter(arr,callBack){
//     let newArr=[]
//     for(let i=0;i<arr.length;i++){
//         if(callBack(arr[i],i,arr)){
//             newArr[newArr.length]=arr[i];
//         }
//     }
//     return newArr
// }
// console.log(myFilter(x,(a)=>a<10));

// console.log(x.find((a)=>a<10)); returns first occurance of the condition

// function myFind(arr,callBack){
//     for(let i=0;i<arr.length;i++){
//         if(callBack(arr[i],i,arr)){
//             return arr[i];
//         }
//     }
// }
// console.log(myFind(x,(a)=>a<10));

// let x=[10,20,30,40]
// x.forEach((a,b,c)=>console.log(a));
// function myForEach(arr,callBack){
//     for(let i=0;i<arr.length;i++){
//         callBack(arr[i],i,arr);
//     }
// }
// myForEach(x,(a)=>console.log(a));

// console.log(x.reduce((a,b)=>a+b));
// function myReduce(arr,callBack,init){
//     let value=0
//     if(init!=undefined){
//         value=init
//          for(let i=0;i<arr.length;i++){
//             value+=callBack(value,arr[i])
//         }
//     }
//     else{
//         value=arr[0];
//          for(let i=0;i<arr.length;i++){
//             value+=callBack(value,arr[i+1])
//         }
//     }
//     return value
//  }
//  console.log(myReduce(x,(a,b,c,d)=>a+b));

// let x="abc"
// let y='abc'
// let z=`abc
// csf
// sdfrs
// dssfbg`
// let i=String("asdfg")
// let j=new String("adffawedsc")
// let b=20
// console.log(`you are ${b>18?"allowed":"not allowed"}`);
// console.log(x.charAt(2));
// console.log(x.charCodeAt(1));
// console.log(x.includes('c'));
// trimStart(),trimEnd(),trim()
// replace(),replaceAll(),repeat()
// slice(),subString()
// toUpperCase(),toLowerCase()
// startsWith(),endsWith()
// split()


// let str="shubham"
// function toUpper(x){
//     let converted=""
//     let low="abcdefghijklmnopqrstuvwxyz"
//     let up="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     for(let i=0;i<x.length;i++){
//         for(let j=0;j<low.length;j++){
//             if(x[i]==low[j]){
//                 converted+=up[j]
//             }
//         }
//     }
//     return converted
// }
// console.log(toUpper(str));


// let str="shubham"
// let x=str.split("")
// console.log(x);
// let y=x.reverse()
// console.log(y);
// let isPalindrome=true
// let j=0;
// for(let i=0;i<x.length;i++){
//     if(x[i]!=y[j]){
//         isPalindrome=false
//         break
//     }
//     j++
// }
// if(isPalindrome) console.log("is palindrome");
// else console.log("not a palindrome");


// palindrome
// let str="malayam"
// let x=str===(str.split("").reverse().join(""))?"yes pali":"not a pali";
// console.log(x);


// let str="akash"
// function uCamel(x){
//     let y=x.slice(0,1)
//     z= y.toUpperCase()
//     return x.replace(y,z)
// }
// console.log(uCamel(str));

// let str="akash is a good man"
// function capitalise(x) {
//     return x.split(" ").map((a)=>a[0].toUpperCase()+a.substring(1,x.length)).join(" ");
// }
// console.log(capitalise(str));

// let obj={
//     name:"akash",
//     age:21,
//     printName(){
//         return this.name
//     },
//     addAge(a){
//         this.age=a;
//     }
// }
// console.log(obj.printName());
// delete obj.age
// console.log(obj);
// obj.gender="male";
// obj.addAge(24);
// console.log(obj);
// let obj1=new Object();
// console.log(obj1);
// obj1=Object.create(obj);
// console.log(obj1);

// let arr=[1,3,8,9]
// function secondLast(){
//     return this[this.length-1]
// }
// Array.prototype.secondLast=secondLast
// console.log(arr.secondLast());

// let obj2=Object.create(obj);
// console.log(obj2.name);
// console.log(Object.entries(obj));

// Object.freeze(obj1)// nothing is possible
// Object.seal(obj2)// only updation is possible
// delete obj1.age
// obj2.marks=95
// obj2.age=28
// console.log(obj1);
// console.log(obj2);
// console.log(Object.isSealed(obj2));
// console.log(Object.isFrozen(obj1));
// console.log(Object.assign(obj1,obj2));

// let obj={
//     "email":4,
//     "password":"abcs",
//     "isAvail":null,
//     "ispere":true,
//     "isDefined":undefined,
//     getName(){
//         return this.email
//     }
// }
// let jsonObj=JSON.stringify(obj);
// console.log(jsonObj);
// let jsObj=JSON.parse(jsonObj)
// console.log(jsObj);

// Math.min(),Math.max()
// Math.ceil(),Math.floor(),Math.round(),Math.trunc()
// Math.random()

// console.log("before");
// let x=setTimeout(()=> console.log("hii"),2000);
// // clearTimeout(x)
// console.log("bye");
// let y=setInterval(()=>document.writeln("hiii"),2000)
// setTimeout(()=>clearInterval(y),20000);


// let i=Math.round(Math.random()*10);
// let x=new Promise((res,rej)=>{
//     if(i>5){
//         res("i am resolved")
//     }
//     else rej("i am rejected")
// })

// x.then((data)=>console.log(data)).catch((data)=>console.log(data));

// let y=new Promise((res,rej)=>{
//     res("i am resolved")
// })

// y.then((data)=>5).then((a)=>console.log(a));

// let x=fetch("https://fakestoreapi.com/products");
// x.then((data)=>{ return data.json()} ).then((y)=>{console.log(y);}).catch(console.log("wrong"))


// async function demo() {
//    try {
//      let x=await fetch("https://fakestoreapi.com/products");
//      console.log(await x.json());
//    } catch (error) {
//     console.log("wrong");
//    }
//    finally{
//     console.log("always");
//    }

// }
// demo()


// async function demo() {
//    try {
//      let x=await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
//      let data=await x.json();
//      data.results.forEach(async element => {
//         let res=await fetch(element.url)
//         let data=await res.json();
//         console.log(data.sprites.front_default);
//      });
//    } catch (error) {
//     console.log("wrong");
//    }
//    finally{
//     console.log("always");
//    }

// }
// demo()


// alert("hiii")
// console.log(prompt("enter:"));
// console.log(confirm("are u ok"));

// if(confirm("do u want to see more offers in amazon")){
//    let x=open("https://www.amazon.com")
// }

// setTimeout(()=>x.close(),5000)

// reload()


// let h1s=document.getElementsByTagName('h1')
// console.log(h1s);

// let x=document.getElementsByName("email")
// x.forEach(element => {
//     console.log(element);
// });


// let x=document.querySelector("input");or querySelectorAll()
// console.log(x);
// console.log(x.parentNode.parentNode);
// nextSibling/ nextElementSibling /previousSibling / previousElementSibling
// document.body.firstChild/firstElementChild/lastChild/lastElementChild


// let x=document.querySelector("h1")
// console.log(x.innerText); dispaly's the data presented in the ui on the console
// x.textContent display's the content same as the content presented inside the tag in html
// x.innerHTML displays content along with the tags present inside the selected query


// let x=document.querySelector("h1")
// let count=0
// setInterval(()=>{
//     x.innerText=count
//     count++
// },1000)

// let root=document.querySelector(".root");
// async function demo() {
//     let x=await fetch("https://fakestoreapi.com/products")
//     // console.log(x);
//     let data=await x.json()
//     console.log(data);
//     data.forEach(element => {
//         console.log(element.title);
//         root.innerHTML+=`<div class="ele-container"><h4>${element.title}<h4><img src=${element.image} height="200" width="200"/></div>`
//     });
// }demo();



// let h1=document.createElement("h1")
// h1.innerText="shubham"
// root.appendChild("h1");


// let h1=document.querySelector("h1")
// h1.innerHTML="hii"
// h1.style.backgroundColor="red"
// h1.style.color="white"
// h1.style.fontSize="55px"
// h1.style.textTransform="upperCase"

// let body=document.body
// let spans=document.querySelectorAll("span")
// console.log(spans);

// function genCol() {
//     let r=Math.floor(Math.random()*255)
//     let g=Math.floor(Math.random()*255)
//     let b=Math.floor(Math.random()*255)
//     return `rgb(${r},${g},${b})`
// }
// setInterval(()=>{
//     spans.forEach((ele)=>{
//         ele.style.backgroundColor=genCol()
//     })
// },100)

// setAttribute(),getAttribute(),removeAttribute()

// let h1=document.querySelector('h1')
// h1.classList.add("c")
// console.log(h1.classList);
// h1.classList.remove("b")
// h1.classList.replace("a","c")
// h1.classList.contains("c") true/false
// h1.classList.toggle("c",true/false) if true add if false remove if none it will add if the class if not present or will romove if present

// function popUp() {
//     alert(`hii i am clicked`)
// }
// let h1=document.querySelector("button")
// function changeCol() {
//     h1.style.backgroundColor=genCol()
// }

// h1.onclick=changeCol

// h1.addEventListener("click",()=>h1.style.backgroundColor=genCol())

// let h1=document.querySelectorAll("button")
// h1.forEach((btn)=> {
//     btn.addEventListener(`click`,(e)=>console.log(e.target))
// });


// let body=document.body
// body.addEventListener(`click`,(e)=>{
//     console.log(e.clientX,e.clientY);
//     let div=document.createElement('div')
//     div.classList.add("show")
//     div.style.left=`${e.clientX}px`
//     div.style.top=`${e.clientY}px`
//     body.appendChild(div)
//     setTimeout(()=>{
//         div.classList.add("remove")
//     },1000)
// })


 





