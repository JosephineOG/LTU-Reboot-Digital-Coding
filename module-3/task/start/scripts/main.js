// This is a single line comment

/**
 * This is a multiple
 * line comment
 **/

/**
 * let age =37;  
 * const name= 'Luke';
 * var address= '123 long avenue'
 * let means value can change
 * const means it stays constant
 * var is outdated but we'll still see it in old code.
  *
  *let $variable = 0;
  *let variable =);
  * let_variable =0;
  *
  *let firstName ="Luke"
  *let lastName ="Ashton-Johnson "
*/

//const productName = 'Baked Beans';
//let price= 1.27;
//let quantity= 4;
//let InStock = true;
//let discountAmount= 10;

//console.log ( 'Product Name',productName );
//console.log( 'Price',price );
//console.log ( 'Quantity', quantity ) 
//console.log( 'InStock',InStock );
//console.log ( 'discount amount',discountAmount );

//console.log( typeof productName );
//console.log( typeof price );
//console.log ( typeof quantity );
//console.log( typeof inStock );
//console.log( typeof discountAmount );

//document.write( "<p>" + productName + "</p>" );

//function showProductName() {
  //console.log( productName);
//}

//showProductName();

//function totalPrice( productPrice, productQuantity) {
  //console.log ( productPrice * productQuantity);
//}

//totalPrice( price, quantity );

//const productDiscount =() => {
  //if(quantity >1 ) {
    //let newPrice = discountAmount - (price * quantity);
    //console.log( newPrice);
  //} else {
    //console.log( price * quantity);
  //}
//}

//productDiscount();
 

// switch Statement

//const level = 4;

//switch(level) {
  //case 1:
    //console.log('You are on level 1');
    //break;
    //case 2:
   // console.log('You are on level 2');
    //break;
    //case 3:
    //  console.log('You are on level 3');
   //   case 4:
   // console.log('You are on level 4');
   // break;
   //   break;
   // default:
   //   console.log('No level found');
   //   break;

    //  if( level == 1) {
       // console.log('You are on level 1');
      //} else if (level ==2) { 
        //console.log('You are on level 2');
        //...
        //else{
          //console.log('No level found');
        //}
//}

//......code

//const drinkOrder = ( drink, size ) => {

  //switch( drink ) {
//case 'cola':
  //console.log( ${size} : ${ drink} );
  //break;
  //case 'lemonade':
   // console.log( ${size} : ${ drink} );
 // break;
  //case 'orangeade':
   // console.log( ${size} : ${ drink} );
    //break;
  
  //default:
    //console.log('We currently don't have your ${drink} in stock;
    //break;
  //}

//}

//drinkOrder( 'cola', 'small')  

const calculator = ( num1, num2, operator) => {

switch(operator) {

  case '+':
  
    console.log( `${num1} + ${num2} = ${num1 + num2}` );
    break;
case '-':
  console.log( `${num1} - ${num2} = ${num1 - num2}` );
  break;
  case '/':
    console.log( `${num1} / ${num2} = ${num1 / num2}` );
    break;
    case '*':
      console.log( `${num1} * ${num2} = ${num1 * num2}` );
      break;
  


    default:
      console.log(`The ${operator} that you chose is invalid`);
      break;
}
}

//calculator(5,5,'+');
//calculator(5,5,'*'); 
//calculator(5,5,'/');
//calculator(5,5,'-');
//calculator(5,5,'?');

//const product =[productName, price, quantity,inStock, discountAmount ];

//let firstItem = product[0];
//let lastItem = product[product.length -1];

// console.log( firstItem, lastItem);

const product2={
  productName: 'Apples',
  price: 1.60,
  quantity: 6,
  inStock: true,
  discountAmount: 0.20,

};

//console.log ( `Before : ${product2.price}` );

product2.price = 1.25; //Modifying the object
product2.colour ='Green'// Adding to the object
//console.log ( `After : ${product2.price}` );
//console.table (product2);
//console.dir( product2); // helps console the object

//console.log( product2.colour );

//const productName = product["product name"]

//console.log( product.price); // Dot notation
//console.log( product["price"]); // square bracket notation
//console.log(product["productName"]); // Square bracket notation

//for (start, condition, step) {
// code
// }

//for( let counter =0; counter <= 10; counter ++ ) {
//  console.log ( `Step ${counter} : ${counter}` );
//}

/**
 * get the results of the 7 times table
 */

function multiply (num, maxNum) {
  for( let counter = 1; counter <= maxNum; counter++) {

    let multiplyBy =num;
    let result = counter * multiplyBy;
  
    console.log ( `${counter} * ${num}=${result}` );
}

//multiply ( 8, 16);

//console.log( counter * 7 );

}

// 1. Create a function called totalPriceOfShopping that takes one (1)parameter, name the parameter arr - short for array
 
//function totalPriceOfShopping( arr ) {
//let totalPrice = 0;
//console.log( arr[0]);

//for ( let index = 0;index < arr.length; index ++ ) {

//totalPrice = totalPrice + arr[index].price *arr[index].quantity
//console.log( arr[index].price *arr[index].quantity  );
//}

//return  totalPrice.toFixed(2);
//}
//console.log (totalPriceOfShopping( shoppingBasket) );

function discountType (arr, type, discount ) {
let  totalPrice = 0;

for( let index= 0;index <arr.length; index++){

  if ( arr [index].type ===type){
  let discountAmount = discount * (arr[index].price * arr[index].quantity) / 100;

  totalPrice = totalPrice + (arr[index].price * arr[index].quantity - discountAmount); 
} else {
   
    totalPrice = totalPrice +  (arr[index].price * arr[index].quantity ); 
 
 
  }
  
} // end for loop   

return totalPrice.toFixed(2);

}

//console.log( discountType( shoppingBasket, 'vegetables', 20) );
//console.log( discountType( shoppingBasket, 'toiletries', 50));
//console.log( discountType(shoppingBasket. 'beverages', 10));

// arr, type, discount

//shoppingBasket.forEach( item => console.log(item) );


//for( let index =0; index < shoppingBasket.length; index++ ) {
// console.log( shoppingBasket[index])
//}

//map, filter, reduce - High Level Function

let arr = [1, 2 ,3 ,4 ,5 ,];

/** map */
//const newArray = arr.map( (element) => {
 // return element + 2;
//} );

//const newArray = arr.ma( function(element){
// return element + 2;
//});

// const newArray = arr.map( element => element + 2)

//console.log( arr, newArray);
 
/**filter */

//const moreThanThree = arr.filter((element)=>{
 // return element > 3 ;
//});

//const moreThanThree = arr.filter(element=> element > 3); 


//console.log( moreThanThree);

/**Reduce */

//const total = arr.reduce((acc, curr) ==> {
 // return acc + curr;
//}, 0 );

//const total = arr.reduce((acc, curr) ==> acc + curr, 0 );

//console.log ( total );

//let name ='Bob';

//if(name === 'Bob') {
 // console.log('Hi');
//}else {
 // console.log('What is your name?');
//}
// Ternary operator
//(name === 'Bob')? console.log('Hi'):console.log('What is your name?');

const obj = {
  name: 'Luke',
  age: 37,
  professoion: 'web developer'

}

// for in loop for objects
for( let key in obj) {
  console.log( `${key} :${obj[key]}` );
}

// do maths with two numbers

// get 2 numbers and an operator of the user

// get 1st number, 2nd number and operator 

// depending on the operator do something 

//    console.log('first number not valid');
//  }
  //console.log (num1, num2, num3 );
//console.log( num1 + num2 );
//}

//maths (1,1, '+')

//dom
//const heading1 = document.querySelector('h1');
//const heading4 = document.querySelector('h4');

//const paragraphs = document.querySelectorAll('p');

//for( let i =0; i < paragraphs.length; i++){
 // console.log( paragraph[i].style.color =
//}
