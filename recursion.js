function factorialRecursion (x) {
    if(x == 1 || x == 0) return 1
    return x * factorialRecursion(x - 1)
}

console.log(factorialRecursion(5))

/*   
    5 * factorialRecursion(4) => 120
    4 * factorialRecursion(3) => 24
    3 * factorialRecursion(2) => 6
    2 * factorialRecursion(1) => 2
*/
