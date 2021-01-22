
//No.1: convert kilometer to meter via JS function.

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    if (kilometer < 0) {
        //if user give negetive number as input:
        return 'Length can not be negetive'
    }
    if (typeof kilometer == "string") {
        //if user give a string as input:
        return 'length must be in number'
    }
    else {
        return meter;
    }

}


//No.2: calculate total budget for buying watch, phone & laptop.

function budget(watch, phone, laptop) {

    const watchCost = watch * 50;
    const phoneCost = phone * 100;
    const laptopCost = laptop * 500;
    const result = watchCost + phoneCost + laptopCost;

    if (watch < 0 || phone < 0 || laptop < 0) {
        return 'Input must be 1 or above'
    }
    if (typeof watch == "string" || typeof phone == "string" || typeof laptop == "string") {
        return 'Input must be in number'
    }
    return result;
}



//No.3: to calculate total hotel room fare in different condition.
function hotelCost(day) {
    var roomFare = 0;
    if (day <= 10) {
        //calculate total fare for less than 10 days:
        roomFare = day * 100;
    }
    else if (day <= 20) {
        //calculate total fare for 11 t0 20 days:
        var firstTenDays = 10 * 100;
        var remainingDays = day - 10;
        var secondTenDays = remainingDays * 80;
        roomFare = firstTenDays + secondTenDays;
    }
    else if (day > 20) {
        //calculate total fare for 20 days or above:
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = day - 20;
        var nextDays = remainingDays * 50;
        roomFare = firstTenDays + secondTenDays + nextDays;
    }
    else if (typeof day == "string") {
        //if user give string as input:
        return 'Day must be in number.';

    }
    return roomFare;
}



//No.4: find largest string from array.

function megaFriend(nameArray) {
    var largestName = nameArray[0];
    for (i = 0; i < nameArray.length; i++) {
        if (nameArray[i].length > largestName.length) {
            largestName = nameArray[i];
        }
    }
    return largestName;
}

