let initialSecond = 0;
let initialMinute = 0;
let initialHour = 0;
const second = document.querySelector('#second')
const minute = document.querySelector('#minute')
const hour = document.querySelector("#hour")

function countSecond(currentSecond) {
    if (currentSecond > 60) {
        currentSecond = 0; // Reset to 0 when it reaches 60
    }

    second.innerText = currentSecond;
    setTimeout(() => {
        countSecond(currentSecond + 1); // Recursively call the function
    }, 1000);

    if(currentSecond == 60){
        initialMinute += 1
        minute.innerText = initialMinute
        if(initialMinute==60){
            initialHour += 1
            hour.innerText = initialHour
            if(initialHour == 12){
                hour.innerText =''
                minute.innerText=''
                second.innerText=''
            }
        }
    }
}

// Call the function to start counting seconds
countSecond(0);








