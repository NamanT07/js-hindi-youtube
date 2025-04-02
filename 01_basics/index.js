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

function Rectangle()
{
    this.length=1;
    this.breath=2;
    this.draw= function()
    {
        console.log('Drawing');
    }
}

let rectangleObj=new Rectangle();


 
