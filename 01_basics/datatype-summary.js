// #primitive datatype

// 7 types:String,Number,Boolean,Null,undefined,Symbol,bigInt

const score=100
const scoreval=100.3

const IsloggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol("123")
const anotherId=Symbol("123")
console.log(id==anotherId)

const bigInt=12345678893484398n

//#Reference Type or Non primitive
//types:Array,Objects,Functions

const heros=["shaktimaan","nagaraj","doga"]
let myObj={
    name:"Naman",
    age:"22",

}

const myFunction=function(){
    console.log("Hello World")
}
//console.log(typeof bigInt)
console.log(typeof outsideTemp)


//Return type of variables in JavaScript
//1) Primitive Datatypes
//Number => number
//String  => string
//Boolean  => boolean
//null  => object
//undefined  =>  undefined
//Symbol  =>  symbol
//BigInt  =>  bigint

//2) Non-primitive Datatypes(always have typeof=>function)
//Arrays  =>  object
//Function  =>  function
//Object  =>  object