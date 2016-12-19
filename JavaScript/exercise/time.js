// var HOUR = 8;
// var MINUTE = 50;
// var PERIOD = "AM";

var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";

if (MINUTE >= "30") {
    var msg = "It's almost ";
    if (HOUR == 12) {
        HOUR = 0;
    }
    HOUR += 1;
} else {
    var msg = "It's just after ";
}

if (PERIOD == "AM") {
    var meridiem = " in the morning.";
} else {
    var meridiem = " in the evening.";
}

console.log(msg + HOUR + meridiem);
