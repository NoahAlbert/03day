// function checkEven (num) {
//     return num % 2 === 0
// }

// console.log(checkEven(13))

function checkEvenArray (arr) {
    let newArr = []
    for (i = 0; i < arr.length; i++){
        newArr.push(arr[i] % 2 === 0)
    }
    return newArr
}

const myarr = [1,2,4,5,7,13,25,15]
console.log(checkEvenArray(myarr))