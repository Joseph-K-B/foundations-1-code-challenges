// Use the filter or find array methods to solve these problems


const groceries =  [
    {
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    {
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    {
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    {
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        {
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]

/*Output:
[
    {
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        {
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]
*/

export function getAllDairy(arr) {
    let results = arr.filter(word => word.category === 'dairy')
    return results;
    }



/*
Output:
[
    {
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    }
]
*/

export function getAllFruitsThatCostMoreThanTwo(arr) {
    let results = arr.filter(word => word.category === 'fruit' && word.price > 2);
    return results;
}



/*
Output:
    {
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
*/

export function findTheCheese(arr) {
    let results = arr.find (item => item.id === 'cheese');
    return results;
}


/*
Output:
['apple', 'banana']
*/
//map category?
export function listNamesOfAllFruits(arr) {
    let names = arr.filter ((item) => item.category === 'fruit')
    // let result = names.find (item => item.id)
    console.log(names)
    return names.map(item => `${item.id}`);
}