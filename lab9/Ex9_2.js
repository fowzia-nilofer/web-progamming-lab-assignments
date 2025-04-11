const seats=Array(10).fill(0);

function reserveSeat(){
    let name = document.getElementById("name").value;
    let classChoice = parseInt(document.getElementById("class").value);

    if(classChoice==1){
        if(!allocateSeat(name,0,4,"First Class")){
            if(confirm("First Class is full. Would you like to be placed in Economy Class?")){
                allocateSeat(name,5,9,"Economy Class");
            }
            else{
                alert("Next flight leaves in 3 hours.");
            }
        }
        else{
            allocateSeat(name,0,4,"First Class");
        }
    }
    else if(classChoice==2){
        if(!allocateSeat(name,5,9,"Economy")){
            if(confirm("Economy Class is full. Would you like to be placed in First Class?")){
                allocateSeat(name,0,4,"First Class");
            }
            else{
                alert("Next flight leaves in 3 hours.");
            }
        }
        else{
            allocateSeat(name,5,9,"Economy Class");
        }
    }
    else{
        alert("Incorrect Class choice!");
    }
}

function allocateSeat(name,start,end,classChoice){
    for(i=start;i<=end;i++){
        if(seats[i]==0){
            seats[i]=1;
            printBoardingPass(name,i+1,classChoice);
            return true;
        }
    }
    return false;
}

function printBoardingPass(name,seatNumber,classChoice){
    document.getElementById("pass").innerHTML=` <h3>Boarding Pass</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Seat No.:</strong> ${seatNumber}</p>
        <p><strong>Class:</strong> ${classChoice}</p>
        <hr>`;

}

// Simulate continuous booking
/*while (confirm("Would you like to book a seat?")) {
    reserveSeat();
}

alert("All bookings are done.");*/