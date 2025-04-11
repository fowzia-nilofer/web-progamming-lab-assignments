// Airline Seat Reservation System

const seats = Array(10).fill(0); // 0 indicates an empty seat

function assignSeat() {
    const passengerName = prompt("Enter passenger's name:");
    const classChoice = parseInt(prompt("Type 1 for First Class (seats 1-5) or 2 for Economy Class (seats 6-10):"));

    if (classChoice === 1) {
        if (!allocateSeat(passengerName, 0, 4, "First Class")) {
            if (confirm("First Class is full. Would you like to be placed in Economy Class?")) {
                allocateSeat(passengerName, 5, 9, "Economy Class");
            } else {
                alert("Next flight leaves in 3 hours.");
            }
        }
    } else if (classChoice === 2) {
        if (!allocateSeat(passengerName, 5, 9, "Economy Class")) {
            if (confirm("Economy Class is full. Would you like to be placed in First Class?")) {
                allocateSeat(passengerName, 0, 4, "First Class");
            } else {
                alert("Next flight leaves in 3 hours.");
            }
        }
    } else {
        alert("Invalid selection. Please enter 1 for First Class or 2 for Economy Class.");
    }
}

function allocateSeat(name, start, end, seatClass) {
    for (let i = start; i <= end; i++) {
        if (seats[i] === 0) {
            seats[i] = 1;
            printBoardingPass(name, i + 1, seatClass);
            return true;
        }
    }
    return false;
}

function printBoardingPass(name, seatNumber, seatClass) {
    console.log("\n--- Boarding Pass ---");
    console.log("Passenger Name: " + name);
    console.log("Seat Number: " + seatNumber);
    console.log("Class: " + seatClass);
    console.log("---------------------\n");
}

// Simulate continuous booking
while (confirm("Would you like to book a seat?")) {
    assignSeat();
}

alert("All bookings are done.");
