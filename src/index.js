module.exports = function toReadable (number) {
// function toReadable (number) {
    let upToTwenty = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
                    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let upToHundred = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number === 0) return 'zero';

    if (number < 20) return upToTwenty[number];
    let hundredDigit = parseInt(number / 100);
    let decimalDigit = parseInt(number / 10) - hundredDigit * 10;
    let digit = number - decimalDigit * 10 - hundredDigit * 100;
    let result = '';

    hundredDigit > 0 ? result += `${upToTwenty[hundredDigit]} hundred ` : '';
    decimalDigit > 0 ? result += `${upToHundred[decimalDigit - 2]} ` : '';
    digit > 0 ? result += `${upToTwenty[digit]}` : '';
    // console.log(hundredDigit);
    // console.log(decimalDigit);
    // console.log(digit);
    return result.replace(/\s+$/, '')

}

// console.log(toReadable(20));
