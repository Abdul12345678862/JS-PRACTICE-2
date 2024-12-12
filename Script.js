let array = [1, 2, 3, 2, 1, 3, 4, 4, 5,'a','b','c','a','b','d'];

// map = {};
// array.forEach(ele =>{
//     if(map[ele]===undefined){
//         map[ele]=1;
//     }
//     else{
//         map[ele]++;
//     }
// })

// for(let key in map){
//     console.log(`Element ${key} occurs ${map[key]} times`);
// }

array.forEach(ele=>{
    console.log(ele);
})
//REMOVE DUPLICATES FROM ARRAY
const map = new Map();

array.forEach(element =>{
    map.set(element,true)
})

console.log([...map.keys()]);