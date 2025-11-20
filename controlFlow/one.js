//if
// const isUserLoggedIn=true;
// const temperature=41;
// if(temperature<50)
// {
//     console.log("Executed");
//     console.log("Less than 50")
// }
// else
// {
//     console.log("temp greater than 50");
// }
2<2
//<,>,<=,>=
// = assignment operator
// == 
// !=
//=== also checks the type

//shorthand notation for if-else
const balance=1000;
// if(balance>500)console.log("Test");

// if(balance <500)
// {
//     console.log("LEss than 500")
// }
// else if(balance<750)
// {
//     console.log("LEss than 750")
// }
// else
// {
//     console.log("less than 1200 balance")
// }

const userLoggedIn=true;
const debitCard=true;
const userLoggedInFromGoogle=false;
const userLoggedInFromEmail=true;
if(userLoggedIn && debitCard)
{
    console.log("Allow to buy course")
}
if(userLoggedInFromEmail||userLoggedInFromGoogle)
{
    console.log("User logged in");
}
