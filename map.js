// Use the map method to solve these problems!


let pets = 

[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]


/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNamesWithMap(arr) {
    let names = [];
    arr.map(item => {
        names.push(item.name)
    });
    return names;
}
/*
Output:

[
    { name: 'spot', isHungry: true, type: 'dog' },
    { name: 'rover', isHungry: true, type: 'dog' },
    { name: 'jumpy', isHungry: true, type: 'frog' },
    { name: 'einstein', isHungry: true, type: 'cat' },
]*/
export function makeArrayWithIsHungry(arr) {
    let hungry = arr.map (item => Object.assign(item, {isHungry: true}))
         return hungry;
     };

/*
Output:

[
    { name: 'SPOT', type: 'dog' },
    { name: 'ROVER', type: 'dog' },
    { name: 'JUMPY', type: 'frog' },
    { name: 'EINSTEIN', type: 'cat' },
]*/

export function makeShoutingArray(arr) {
    // let names = arr.map (item => {item.name.toUpperCase(), item.type})
    let names = arr.map(item => {return{'name': item.name.toUpperCase(), 'type': item.type}})
   return names;
    
}



/*

Output:
['spotdog', 'roverdog', 'jumpyfrog', einsteincat']
*/

export function makeStringArray(arr) {
    let string = arr.map((item) => `${item.name}${item.type}`)
    return string;
}

/*
Output:

[
    [
        ['name', 'spot'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'rover'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'jumpy'], 
        ['type', 'frog']
    ],
    [ 
        ['name', 'einstein'], 
        ['type', 'cat']
    ]
*/

export function makeArrayOfArraysOfArrays(arr) {
    let arrOfArr = arr.map((item) => `[${item.name},${item.type}]`)
    return arrOfArr;
}