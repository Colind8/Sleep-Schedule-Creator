var total_hours = 8; //total hours of sleep
var alarm_time = 8.0; //time you wake up
var sleep_time = 0.0; //time you sleep

//0.0 = 12AM, 12.0 = 12PM, 23.5 = 11:30PM

function update () {
    console.log("=================");
    console.log("===Before Warp===");
    console.log("sleep_time: " + sleep_time);
    console.log("alarm_time: " + alarm_time);
    console.log("total_hours: " + total_hours);
    if (sleep_time < 0.0) {
        sleep_time = 23.5;
    } else if (sleep_time > 23.5) {
        sleep_time = 0.0;
    }

    if (alarm_time < 0) {
        alarm_time = 23.5;
    } else if (alarm_time > 23.5) {
        alarm_time = 0.0;
    }

    if (total_hours < 0.5) {
        total_hours = 0.5;
    } else if (total_hours > 23.5) {
        alarm_time = 23.5;
    }
    console.log("===After Warp===");
    console.log("sleep_time: " + sleep_time);
    console.log("alarm_time: " + alarm_time);
    console.log("total_hours: " + total_hours);

    document.getElementById("totalsleep").innerHTML = total_hours;
    document.getElementById("totalawake").innerHTML = 24.0 - total_hours;
    document.getElementById("alarmtime").innerHTML = convert_to_time(alarm_time);
    document.getElementById("sleeptime").innerHTML = convert_to_time(sleep_time);
    
}

function convert_to_time (x) {
    //x is float input
    //y is floored x, so basically the hour
    //converts to time string
    var y = Math.floor(x);
    var firsthalf;
    var secondhalf;
    var thirdhalf;
    
    if ((x - y) == 0.5) { //checks to see if it's #:30
        secondhalf = ":30";
    } else {
        secondhalf = ":00";
    }

    if (x > 11.5) { //checks to see if it's AM or PM
        firsthalf = (y - 12);
        thirdhalf = "PM";
    } else {
        firsthalf = y;
        thirdhalf = "AM";
    }

    if (firsthalf == 0) {
        firsthalf = 12;
    }

    

    let time = firsthalf + secondhalf + " " + thirdhalf; //creates the time

    return time; //returns the time

}

//HOURS OF SLEEP BUTTONS
function increase_hours () {
    if (sleep_time - alarm_time != 0.5) {
        total_hours = total_hours + 0.5;
        sleep_time = sleep_time - 0.5;
    }

    update();
}

function decrease_hours () {
    if (total_hours != 0.5) {
        total_hours = total_hours - 0.5;
        sleep_time = sleep_time + 0.5;
    }

    update();
}

//HOURS AWAKE BUTTONS
function increase_awake () {
    if (total_hours != 0.5) {
        total_hours = total_hours - 0.5;
        sleep_time = sleep_time + 0.5;
    }

    update();
}

function decrease_awake () {
    if (total_hours != 23.5) {
        total_hours = total_hours + 0.5;
        sleep_time = sleep_time - 0.5;
    }

    update();
}

//WAKE UP BUTTONS
function increase_alarm () {
    if (total_hours != 23.5) {
        total_hours = total_hours + 0.5;
        alarm_time = alarm_time + 0.5;
    }

    update();
}

function decrease_alarm () {
    if (total_hours != 0.5) {
        total_hours = total_hours - 0.5;
        alarm_time = alarm_time - 0.5;
    }

    update();
}

//SLEEP BUTTONS
function increase_sleep () {
    if (total_hours != 0.5) {
        total_hours = total_hours - 0.5;
        sleep_time = sleep_time + 0.5;
    }

    update();
}

function decrease_sleep () {
    if (total_hours != 23.5) {
        total_hours = total_hours + 0.5;
        sleep_time = sleep_time - 0.5;
    }

    update();
}