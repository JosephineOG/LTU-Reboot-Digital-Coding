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
