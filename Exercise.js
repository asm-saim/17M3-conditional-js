// Ex - 1
let burgerPrice=600;
if(burgerPrice>500)
{
    console.log("Free Coke");
}
else{
    console.log("Coke is 30TK");
}

// Ex -2 
// you have two numbers in two variables, called: num1, num2
// now declare a variable called result. 
// if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

// write a simple if-else. 

// also, write it using ternary operator.

let num1=10;
let num2= 20;
num1>num2? result = num1*2 :  result = num1 + num2;
console.log(result);
// let result
// if(num1>num2)
// {
//     result=num1*2;
//     console.log(result);
// }
// else{
//     result= num1 + num2;
//     console.log(result);
// }


/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let category = "Senior Citizen";
let age = 75;
let ticket = 800;
if(category==="Children" && age<10)
{
    console.log("Free ticket!");    
}
else if (category==="Student")
{
     let discount=ticket * 50/100;
     let pay = ticket-discount;
    console.log("Pay Amount:",pay)
}
else if (category==="Senior Citizen" && age>=60)
{
    let discount=ticket * 15/100;
    let pay = ticket - discount;
    console.log("Pay Amount:",pay);
}
else{
    console.log("Pay Amount 800tk");
}