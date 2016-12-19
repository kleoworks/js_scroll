var value = .01;

for (var i = 1; i < 31; i++) {
    value *= 2;
    // if (value > 10000) {
    //     console.log("It takes " + i + " days for $10k");
    //     break;
    // }
    // if (value > 10000000000) {
    //     console.log("It takes " + i + " days for $10B");
    //     break;
    // }
    // if (value == Infinity) {
    //     console.log("It takes" + i + " days for Infinity");
    //     break;
    // }
}

console.log("Total value is $" + value);
