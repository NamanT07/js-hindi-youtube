console.log('Hello mate');
//Object creation
// let rectangle = {
//     length: 1,
//     breadth: 2,

//     //adding behaviour by use of functions inside object
//     draw: function()
//     {
//         console.log('drawing Rectangle');
//     }

// };
//for creating multiple objects we need 1)factory Function 2)Contructor function
//factory function
// function createRectangle(len,bre)
// {
//     return rectangle = {
//             length: len,
//              breadth: bre,
        
//              //adding behaviour by use of functions inside object
//              draw: function()
//          {
//                  console.log('drawing Rectangle');
//              }
        
//          };

//         // return rectangle;
// }

// let rectangleObj1=createRectangle(5,4);
// let obj2=createRectangle(6,9);


//contructor function



// function Rectangle(len, bre)
// {
//     this.length=1;
//     this.breath=2;
//     this.draw= function()
//     {
//         console.log('Drawing');
//     }
// }


// let rectangleObj=new Rectangle(4,6);

// rectangleObj.color='yellow';//Dynamic Nature of object

// console.log(rectangleObj);

// delete rectangleObj.color;//Dynamic nature of object

// console.log(rectangleObj);

//In primitives type copy is made thus answer is 11 and 10 in the below example

// let a=10;
// let b=a;
// a++;
// console.log(a);
// console.log(b);

//while Dealing with objects(ex:array,object) address is [passed] thus a and b both are pointing at same address block

// let a={value:10};
// let b=a;
// a.value++;

// console.log(a.value);
// console.log(b.value);


//example of pass by
let a=10;
function inc(a){
    a++;
};
inc(a);
console.log(a);
//output is 10 because a copy of a is sent to inc function