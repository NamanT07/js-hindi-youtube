//for-each loop

const coding=["js","ruby","java"];
// coding.forEach( function (item){
//     console.log(item)
// })

// coding.forEach( (item)=>{
//     console.log(item);
// })
// function printMe(item)
// {
//     console.log(item);
    
// }
// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// });

const myCoding=[
    {
        languageName:"JAVASCRIPT",
        languageFileName:"JS"
    },
    {
        languageName:"JAVA",
        languageFileName:"java"
    },
    {
        languageName:"Python",
        languageFileName:"Py"
    }
]
myCoding.forEach(function(item,index){
    console.log(item.languageFileName," ",item.languageFileName);
    
})