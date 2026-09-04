const numbers = [1, 2, 3, 4, 5];

const numbersMultipliedByTwo = numbers.map(function(number){
    return number * 2;
})

const ages = [23, 44, 21, 11, 22];

// const evenAges = ages.filter(function(age){
//     return age % 2 ===0;
// })

//se eu quiser reduzir/soma

const sumOFages = ages.reduce(function(age, accumulator){
    return accumulator + age;
},0)

console.log(sumOFages);


