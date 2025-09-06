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

function user(u,a){
    return function action(){
        return function allowed(){
            if(u=="admin"){
                return true;
            }
            if(u=="editor"){
                if(a=="edit"||a=="create"||a=="read"){
                    return true;
                }
                else {return false;}
            }
            if(u=="viewer"){
                if(a=="read"){
                    return true;
                }
                else{ return false;} 
            }
        }
    }
}

console.log(user("viewer","create")()());







