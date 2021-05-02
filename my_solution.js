function mergeSort(array) {
    if(array.length <= 1) return array
    
    const mid = Math.floor(array.length / 2)
    const left = []
    const right = []
    for(let i = 0; i < array.length; i++){
        if(i < mid) left.push(array[i])
        else right.push(array[i])
    }
    const arr1 = mergeSort(left)
    const arr2 = mergeSort(right)
    
    return merge(arr1, arr2)
}

function merge(arr1, arr2){
    let merged = []
    
    // while both arrays have elements
    //     compare the smaller element
    //         the smaller one gets added to our merged array and removed from the array it came from
    while(arr1.length && arr2.length){
        if(arr1[0] < arr2[0]){
            merged.push(arr1[0])
            arr1.shift()
        }
        else {
            merged.push(arr2[0])
            arr2.shift()
        }
    }
    
    // if either array still has elements
    // loop through them and append to end of merged array
    while(arr1.length){
        merged.push(arr1.shift())
    }
    while(arr2.length){
        merged.push(arr2.shift())
    }
    
    return merged   
}

// Test Cases
// console.log(mergeSort([])) // []
// console.log(mergeSort([1])) // [1]
console.log(mergeSort([3, 1, 2, 4])) // [1, 2, 3, 4]
console.log(mergeSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]
