// const tr = (arr) => {
//     if(arr.length == 0) return 0
//     if (arr.length == 1) return arr[0]
//     else {
//         return arr[0] += tr(arr.slice(1))
//     }
// }

// console.log(tr([20,3,2,2,8,6,9,3,0,4,1,2]));

// const tr = (arr) => {
//     if(!arr[0]) return 0
//     else {
//         return 1 + tr(arr.slice(1))
//     }
// }

// console.log(tr([6,6,8]));

// const arraySumRecursion = (arr) => {
//     if (arr.length < 2) return arr
//     else {
//         return arr[0] += +arraySumRecursion(arr.slice(1))
//     }
// }

// console.log(arraySumRecursion([20, 1, 5, 4, 8, 2, 5, 5]));

const arraySumRecursion = (arr) => {
    let x = 0
    if (!arr[0]) return 0
    else {
        x++
        return arraySumRecursion(arr.slice(0, arr.length - 1))
    }
}

console.log(arraySumRecursion([20, 1, 5, 4, 8, 2, 5, 5]));

// let quicksort = (arr) => {
//     if(arr.length <= 1) return arr
//     else{
//         let pre = []
//         let post = []
//         let tr = []
//         let pivot = arr.pop()
//         for(var i = 0; i < arr.length; i++){
//             if(arr[i] < pivot) pre.push(arr[i])
//             else post.push(arr[i])
//         }
//         return tr.concat(quicksort(pre), pivot, quicksort(post))
//     }
// }
// console.log(quicksort([6,5,8,1,3,0,9,11,-6]))


// function quick_Sort(origArray) {
// 	if (origArray.length <= 1) { 
// 		return origArray;
// 	} else {

// 		var left = [];
// 		var right = [];
// 		var newArray = [];
// 		// var pivot = origArray[Math.floor(origArray.length / 2)];
//         var pivot = origArray.pop();
//         console.log( { pivot } );
// 		var length = origArray.length;

// 		for (var i = 0; i < length; i++) {
//             if (origArray[i] == pivot) continue;
//             if (origArray[i] < pivot) {
//               left.push(origArray[i]);
//             }
//             else {
//               right.push(origArray[i]);
//             }
// 		}

// 		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
// 	}
// }
// var myArray = [3, 0, 2, 5, -1, 4, 1 , 7];
// console.log("Original array: " + myArray);
// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);


function binary_search(list, item) {
    let low = 0;
    let high = list.length - 1;
    let mid, guess
    while (low <= high) {
        mid = low + high
        guess = list[mid]
        console.log({ low, high, mid, guess });

        if (guess == item) {
            return mid
        } if (guess > item) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return null
}

// console.log(binary_search([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 2));



// function binarySearch(arr, val) {
//     let start = 0;
//     let end = arr.length - 1;
//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);
//         if (arr[mid] === val) {
//             return mid;
//         }
//         if (val < arr[mid]) {
//             end = mid - 1;
//         } else {
//             start = mid + 1;
//         }
//     }
//     return null;
// }
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))

function binarySearchRecursion(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === val) {
        return mid;
    } else {
        if (val < arr[mid]) {
            console.log({ fff: arr[mid], arr, mid });
            return binarySearchRecursion(arr.slice(start, mid), val)
        } else if (val > arr[mid]) {
            // console.log({ fff: arr[mid], arr, mid });

            return binarySearchRecursion(arr.slice(mid + 1, arr.length), val)
        } else {
            return null;
        }
    }
}
// console.log(binarySearchRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
// let tr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(

//     tr.slice(8, tr.length),
//     // tr.slice(Math.floor(tr.length / 2), tr.length)

// );

