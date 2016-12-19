var daysUntilMyBirthday = 60;
var birthday = "♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*\n♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪\n*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«\n";

while (daysUntilMyBirthday > 0) {
    if (daysUntilMyBirthday > 2) {
        console.log(daysUntilMyBirthday + " Days until my birthday. Such a long time... :(");
    } else if (daysUntilMyBirthday == 2) {
        console.log(daysUntilMyBirthday + " DAYS UNTIL MY BIRTHDAY!!!");
    } else {
        console.log(daysUntilMyBirthday + " DAY UNTIL MY BIRTHDAY!!!");
    }
    daysUntilMyBirthday -= 1
}
console.log(birthday);
