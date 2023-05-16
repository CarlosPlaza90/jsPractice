let currentNumber = document.getElementById("counter");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");

reset.addEventListener("click", () => {
    currentNumber.textContent = 0
    console.log(currentNumber.textContent);
    currentNumber.style.color = "black";
});

decrease.addEventListener("click", () => {
    let Number = parseInt(currentNumber.textContent);
    Number -= 1;
    console.log(Number);
    currentNumber.textContent = Number;
    if(Number > 0){
        currentNumber.style.color = "green";
    }
    else if(Number < 0){
        currentNumber.style.color = "red";
    }
    else {
        currentNumber.style.color = "black";
    }

});

increase.addEventListener("click", () => {
    let Number = parseInt(currentNumber.textContent);
    Number += 1;
    console.log(Number);
    currentNumber.textContent = Number;
    if(Number > 0){
        currentNumber.style.color = "green";
    }
    else if(Number < 0){
        currentNumber.style.color = "red";
    }
    else {
        currentNumber.style.color = "black";
    }

});