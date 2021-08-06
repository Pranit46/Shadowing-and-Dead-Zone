
let price2 = "$100"
const price3 = "$500"

function getPrice(){
    var price1 = "$20"
    console.log("Original Price " +price1)   //  In this code value of price shadowing the value of price which at line 4.
    var price1 = "$14.98"                    //  It modifies the the value of price.
    console.log("Discount Price " +price1)   //  They pointing to the same memory loction.

    let price2 = "$200"                     
    console.log("Price of PS4 " +price2)    // Here the output will be $200. 
                                            //Because  price2 value shadowing the value from price2 which is at line 1.
                                            //we are taking the value of let from block scope.
    let price3 = "$400"                     
    console.log("Price of PS4 " +price3)    // Here the output will be $400. 
                                            //Because  price3 value shadowing the value from price3 which is at line 2.
                                            //we are taking the value of const from block scope.

}

getPrice()
console.log("Price of PS4 " +price3)        // Here the output will be $500. Because we are accessing the vale from outside the scope.

/*-----------------------------------------------------*/

/*

Shadowing also consist of
1) Illegal shadowing:- 

  Below lines(40-46) of code is the example of illegal shadowing we cannot shadow the let variable 
  with var variables.
  It will show the error " num has already been declared ".

2) Legal shadowing:-
  Below lines(53-57) of code is the example of legal shadowing. We can shadow var variable by let variable. 
*/


/* Illegal Shadowing Example

let num = 20
{
    var num = 30    
}
console.log(num)
*/


/* Legal Shadowing Example */ 
var num = 20
{
    let num = 30    
}
console.log(num)

/* -------------------------------------------------------------*/

/*  Temporal DeadZone  */

/*Time when since Let varible was hoisted till it is intialised some value
  the time between these two term is know as dead zone
*/

function getPrice(){
    console.log("Original Price " +price1)
    let price = "$20"  
}

/*
    In the above code variable is hoisted. price was assigned a memory space but it has not been initilize. 
    This phase is known as dead zone until it goes to the line number 63. 
*/

