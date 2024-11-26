// Set the date of the event
const eventDate = new Date("January 15, 2025 05:00:00").getTime();

// Update the countdown every second
const countdownFunction = setInterval(() => {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the remaining time
    const distance = eventDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the countdown element
    document.getElementById("countdown").innerHTML = `
        ${days}d ${hours}h ${minutes}m ${seconds}s
    `;

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Event has started!";
    }
}, 1000);


