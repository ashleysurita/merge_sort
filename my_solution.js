function mergeSort(array) {
    if(array.length <= 1) return array
    
    let mid = Math.floor(array.length / 2)
    let left = []
    let right = []
    for(let i = 0; i < array.length; i++){
        if(i < mid) left.push(array[i])
        else right.push(array[i])
    }
    
    let arr1 = mergeSort(left)
    let arr2 = mergeSort(right)
    
    return merge(arr1, arr2)
}

function merge(arr1 = [], arr2 = []){
    let res = []
    
    let a1 = 0
    let a2 = 0
    while(a1 < arr1.length && a2 < arr2.length){
        if(arr1[a1] < arr2[a2]){ 
            res.push(arr1[a1])
            a1++
        }
        else{
            res.push(arr2[a2])
            a2++
        }
    }
    // console.log(res, a1, a2)
    
    res = [...res, ...arr1.slice(a1), ...arr2.slice(a2)]
    
    return res.flat()
}

// Test Cases
console.log(mergeSort([])) // []
console.log(mergeSort([1])) // [1]
console.log(mergeSort([3, 1, 2, 4])) // [1, 2, 3, 4]
console.log(mergeSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]
