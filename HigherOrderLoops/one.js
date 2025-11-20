//For of

// ["","",""];

// [{},{},{},{}];

// const arr=[1,2,3,4,5]

// for (const val of arr) {
//     console.log(val);
// }

// const greetings="HELLO WORLD!!";
// for (const greet of greetings) {
//     console.log(`Each character is ${greet}`);
// }

//---------------------------->MAPS<-------------------------
const map=new Map();
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES")
map.set('FR',"FRANCE")
map.set('IND',"INDIA")
console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key,value] of map) {
    console.log(key,":-",value);

}

//maps are iterable but not objects
// const myobj={
//     'game1':'NFS',
//     'game2':'FC3',
// }
// for (const [key,value] of myobj) {
//     console.log(myobj);
// }