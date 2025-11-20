//for
for (let index = 0; index <= 10; index++) {
    console.log(index);
}
let myArray=["flash","batman","superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

//break and continue

for (let index = 1; index < 21; index++) {
    if(index==5)
    {
        console.log("5 detected");
        break;
    }
    console.log(index);

}

for (let index = 1; index < 21; index++) {
    if(index==5)
    {
        console.log("5 detected");
        continue;
    }
    console.log(index);

}