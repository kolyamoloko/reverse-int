module.exports = function reverse (n) {
    let number = 0;
    let absn = Math.abs(n);
    while (absn > 0){
        number = number + absn % 10 ;
        absn = Math.floor(absn/10);
        number = number * 10;
    }
    return number / 10;
}
