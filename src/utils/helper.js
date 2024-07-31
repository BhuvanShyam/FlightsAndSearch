function compareTime(timeString1, timeString2) {
    // Parse the input strings into Date objects
    let dateTime1 = new Date(timeString1);
    let dateTime2 = new Date(timeString2);

    // Check if the dates are valid
    if (isNaN(dateTime1.getTime()) || isNaN(dateTime2.getTime())) {
        throw new Error("Invalid date-time strings provided.");
    }

    // Compare the dates
    return dateTime1.getTime() > dateTime2.getTime();
}



module.exports = {
    compareTime
};
