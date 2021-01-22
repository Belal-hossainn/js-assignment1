
//convert kilometer to meter via JS function.

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    if (kilometer < 0) {
        //if user put negetive input
        return 'Length can not be negetive'
    }
    else {
        return meter;
    }

}
var result = kilometerToMeter(12);
console.log(result);

// calculate total budget for buying watch, phone & laptop.
function budget(watch, phone, laptop) {

    var watchCost = watch * 50;
    var phoneCost = phone * 100;
    var laptopCost = laptop * 500;
    var result = watchCost + phoneCost + laptopCost;
    return result;
}
var sum = budget(2, 5, 1);
console.log(sum);


// to calculate total hotel room fare in different condition.
function hotelCost(day) {
    var roomFare = 0;
    if (day <= 10) {
        roomFare = day * 100;
    }
    else if (day <= 20) {
        var firstTenDays = 10 * 100;
        var remainingDays = day - 10;
        var secondTenDays = remainingDays * 80;
        roomFare = firstTenDays + secondTenDays;
    }
    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = day - 20;
        var nextDays = remainingDays * 50;
        roomFare = firstTenDays + secondTenDays + nextDays;
    }
    return roomFare;
}
var result = hotelCost(38);
console.log(result);

// find largest string from array.

function megaFriend(nameArray) {
    var largestName = nameArray[0];
    for (i = 0; i < nameArray.length; i++) {
        if (nameArray[i].length > largestName.length) {
            largestName = nameArray[i];
        }
    }
    return largestName;
}

var result = megaFriend(['Rayhan', 'Farzaul', 'Kafka', 'shahsszaman']);

console.log(result);