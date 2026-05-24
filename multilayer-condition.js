//Showroom example

const price =2600;

if(price>=5000)
{   
    // discount 10%
    const discount = price * 10/100;
    const payAble = price - discount;
    console.log(payAble);
}
else if(price>=2500)
{
    // discount 5%
    const discount = price * 5 /100;
    const payAble = price - discount;
    console.log(payAble); 

}
else{
    console.log(price);
}


// -----------------------------------------------------------------

// Restaurant Example

const age=16;
const foodPrice= 3000;

if(age<=12)
{
    console.log("Food is free");
}

else if(age>=50)
{
    // 50% discount
    const discount = foodPrice * 50/ 100;
    const pay= foodPrice- discount;
    console.log(pay);
}
else if(age>=30 && age<=40)
{
    // 25%
    const discount = foodPrice * 25 /100;
    const pay = foodPrice - discount;
    console.log(payAble);
}
else{
    console.log(foodPrice);
}