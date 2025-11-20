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
