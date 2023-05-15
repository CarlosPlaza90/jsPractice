const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener('click', () => {
    var randomHex = "";
    for (let i = 0; i <= 5; i++) {
        randomHex = randomHex + hex[Math.floor(Math.random() * 14)];
    }
    randomHex = "#" + randomHex;
    document.body.style.backgroundColor = randomHex;
    color.textContent = randomHex;
    console.log(randomHex);

});


