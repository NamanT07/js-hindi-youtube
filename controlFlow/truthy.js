// const userEmail="naman@gmail.com";
// const userEmail="";
const userEmail=[];

if(userEmail)
{
    console.log("Got USerEmail");
}else
{
    console.log("Don't have user Email");
}

//truthy value:"0",'false'," ",[],{},function(){}
// falsy value:false,0,-0,BigInt,"",null,NaN

if(userEmail.length===0)
{console.log("ARRAY IS EMOTY")};
const emptyObj={};
if(Object.keys(emptyObj).length===0)
    console.log("OBJECT IS EMPTY");

// Nullish Coalescing Operator(??):null undefined

// let val1;
// // val1=5??10;
// // val1=null??10;
// // val1=undefined??15;
// console.log(val1);

//Terniary Operator
// condition ? true:false

const iceTeaPrice=100;
iceTeaPrice<=80 ? console.log("LEss than 80"):console.log("LESS than 80")
