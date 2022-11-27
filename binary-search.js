function binary_search (list, item) {
    let low = 0 ; 
    let high = list.length - 1;
    let mid, guess
    while (low <= high){
        mid = low + high
        guess = list[mid]
        console.log({low,high, mid, guess});

        if(guess == item){
            return mid
        }if (guess > item){
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return null
}

console.log(binary_search([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 12));