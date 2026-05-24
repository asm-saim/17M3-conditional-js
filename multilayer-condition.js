
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
