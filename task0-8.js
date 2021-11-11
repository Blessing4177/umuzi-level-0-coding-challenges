function checkHours(hour, minutes) {
  let timeString = "";

  if (hour < 1) {
    timeString += `0 hours, `;
    timeString += checkMinutes(minutes);
  } else if (hour === 1) {
    timeString += `1 hour, `;
    timeString += checkMinutes(minutes);
  } else {
    timeString += `${hour} hours, `;
    timeString += checkMinutes(minutes);
  }

  return timeString;
}

function checkMinutes(minutes) {
  if (minutes === 0) {
    return `${minutes} minutes.`;
  } else if (minutes === 1) {
    return `${minutes} minute.`;
  } else {
    return `${minutes} minutes.`;
  }
}

function convertToHoursAndMin(num) {
  let hour = Math.floor(num / 60);
  let minutes = num % 60;

  return checkHours(hour, minutes);
}

console.log(convertToHoursAndMin(133));
