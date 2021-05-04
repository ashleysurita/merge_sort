def mergeSort(array: [int]) -> [int]:   
    if len(array) <= 1:
        return array
    
    mid = len(array) // 2
    leftSide = array[:mid]
    rightSide = array[mid:]
    leftSide = mergeSort(leftSide)
    rightSide = mergeSort(rightSide)
    return merge(leftSide, rightSide)

def merge(left, right):
    mergedArr = []
    leftIndex = 0
    rightIndex = 0
    
    while leftIndex < len(left) and rightIndex < len(right):
        if left[leftIndex] > right[rightIndex]:
            mergedArr.append(right[rightIndex])
            rightIndex += 1
        else:
            mergedArr.append(left[leftIndex])
            leftIndex += 1
             
    mergedArr += left[leftIndex:]
    mergedArr += right[rightIndex:]
    return mergedArr
            



# Test Cases
print(mergeSort([])) # []
print(mergeSort([1])) # [1]
print(mergeSort([3, 1, 2, 4])) # [1, 2, 3, 4]
print(mergeSort([-10, 1, 3, 8, -13, 32, 9, 5])) # [-13, -10, 1, 3, 5, 8, 9, 32]
