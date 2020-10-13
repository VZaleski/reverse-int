module.exports = function reverse (n) {
    let reverse_n = 0;
    while ( n !== 0) {
        reverse_n = (reverse_n * 10) + (n % 10); 
        n = Math.floor( n / 10);
    }
    return reverse_n;
}
