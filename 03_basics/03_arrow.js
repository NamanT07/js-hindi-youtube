const user = {
    username: "Hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to Website`)
        console.log(this)
    }
}

// user.welcomeMessage();
// user.username="Sam"
// user.welcomeMessage();
// console.log(this.username);

// function chai(){
//     let username="Hitesh"
//     console.log(this);
// //     console.log(this.username) this keyword works only for object
// // }
// chai();

const chai = () => {
    let username = "Hitesh"
    console.log(this);
    console.log(this.username)
}
// chai();

//-------------------------ARRoW Function-----------------------
// const addTwo=(num1,num2)=>
// {
//     return num1+num2;//using curly braces it's mandatory to write return keyword 
// }

// const addTwo = (num1, num2) =>(num1 + num2);//using curly braces it's mandatory to write return keyword 
//     console.log(addTwo(8, 12));

const addTwo=(num1,num2)=>({username:"NAMAN"});//always wrap within parenthesis for returninh without return keyword
// console.log(addTwo(8, 12));

// const myArray=[2,5,3,7,8]