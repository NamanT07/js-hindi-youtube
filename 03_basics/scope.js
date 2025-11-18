function one() {
    const userName = "Naman";
    function two() {
        const website="Youtube";
        console.log(userName);
    }
    // console.log(website);
    two();
}
// one();

// if(true)
// {
//     const userName="Tripathi";
//     if(userName==="Tripathi")
//     {
//         const website="Youtube";
//         console.log(userName+website);
//     }
//     // console.log(website);
// }
// console.log(userName);

//---------------------Interesting example-----------------

console.log(addOne(5));
function addOne(value)//functions
{
    return value+1
}

addTwo(5);
const addTwo=function(num){
    return num+2;
}