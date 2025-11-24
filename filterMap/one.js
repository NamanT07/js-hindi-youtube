const coding = ["JS", "Ruby", "Java", "Python", "cpp"];

// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })

// console.log(values);

// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const ans=myNums.filter((num)=> num>4)
// console.log(ans);

// const newNums=[];

// myNums.forEach((num)=>{
//     if(num>4)
//         newNums.push(num)
// })
// console.log(newNums);
// console.log(myNums);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums=myNumbers.map((num)=>num+10)
// console.log(newNums);
// console.log(myNumbers);

const newNums = myNumbers
    .map((num) => num * 10)
    .map((num)=>num+1)
    .filter((num)=>num>=40)
console.log(newNums);

