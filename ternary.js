// ternary operator : three condition

let age=19;
// ternary condition
// condition ? yes result  : no result
age>=18 ? console.log("you can vote") : console.log("You can not vote");

/*
if(age>=18)
{
    console.log("You can vote");
    
}
else{
    console.log("you are not eligible.")
} 
*/

//Ex: 2

let price = 500;
let isLeader=true;

// if(isLeader===false)
// {
//     price = 0;
// }
// else{
//     price = price + 100;
// }
// console.log(price);

price = isLeader===false?  0 : price + 100;
console.log(price);


// Ex - 3

let cost = 1500;
let isMP = true;

cost = isMP===true? cost>=1000? cost/2 :cost : cost + 100;
console.log(cost);

// if(isMP===true)
// {
//     if(cost>=1000)
//     {
//         cost = cost/2;
//     }
//     else{
//         cost=cost;
//     }
// }
// else{
//     cost=cost+100;
// }
// console.log(cost);