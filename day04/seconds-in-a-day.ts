let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

    console.log(
        (24 * (60**2)) - ( (currentHours * (60**2)) + (currentMinutes * 60) + currentSeconds ) + " seconds left till midnight"
    )