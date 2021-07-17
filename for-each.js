// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.


const dogs = 
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]

// const outcome = 
// let name = [];
// let type = [];
/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    let empty = [];
    arr.forEach(element => {
    empty.push(element.name)
    });
    return empty;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    let reversed = [];
    arr.forEach(element => {
        reversed.push(element.type)
    });
    
    return reversed.reverse();
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    let convertSpanish = [];
    arr.forEach(element => {
        convertSpanish.push({nombre:element.name,
             tipo:element.type})
       
});

    return convertSpanish;
}
