function reverse(number) {
    var reverseNumber = '';
    for (var i = number.length - 1; i >= 0; i--) {
        reverseNumber += number[i];
    }
    return +reverseNumber;

}

console.log(reverse('4321'));
