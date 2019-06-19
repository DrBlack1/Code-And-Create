function isWeekday(day) {
  if (
    day == "Monday" ||
    day == "Tuesday" ||
    day == "Wednesday" ||
    day == "Thursday" ||
    day == "Friday"
  ) {
    return true;
  } else {
    return false;
  }
}

function duringWeekdayOpeningHours(time) {
  if (time => 6 && time < 20) {
    return true;
  } else {
    return false;
  }
}

function isWeekend(day) {
  if (day == "Saturday" || day == "Sunday") {
    return true;
  } else {
    return false;
  }
}

function duringWeekendOpeningHours(time) {
  if (time >= 8 && time < 18) {
    return true;
  } else {
    return false;
  }
}

// Users function. isWeekday, duringWeekdayOpeningHours, isWeekday, duringWeekendOpeningHours used within
function isShopOpen(day, time) {
  if (isWeekday(day) && duringWeekdayOpeningHours(time)) {
    return "Shop is open!";
  } else if (isWeekend(day) && duringWeekendOpeningHours(time)) {
    return "Shop is open!";
  } else {
    return "Shop is closed, please come back later";
  }
}

console.log(isShopOpen("Saturday", 17));
