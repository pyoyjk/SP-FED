var birthday = new Date("Jul 8, 2023 0:00:00").getTime();

// Update every second
var x = setInterval(function() {

    // Get today's date and time
    var today = new Date().getTime();

    // Find the distance between today and the next birthday
    var distance = birthday - today;

    // Calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="birthdayCountdown"
    document.getElementById("birthdayCountdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // On my birthday display "It's my birthday!"
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("birthdayCountdown").innerHTML = "It's my birthday!";
    }
}, 1000);