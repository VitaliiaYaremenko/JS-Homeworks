let unpairedSum = 0;
// outerLoop:
    for (let i = 1; i <= 20; i++ ) {
    if ( i % 2 !== 0) {
        unpairedSum += i;
        // break outerLoop;
    }
}
alert(unpairedSum);
