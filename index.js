const colors = [
    { color: "yellow", image: "images/joy.png" },
    { color: "blue", image: "images/sadness.png" },
    { color: "red", image: "images/anger.png" },
    { color: "violet", image: "images/fear.png" },
    { color: "green", image: "images/disgust.png" },
    { color: "orange", image: "images/anxiety.webp" },
    { color: "cyan", image: "images/Envy.webp" },
    { color: "pink", image: "images/e.png" },
    { color: "darkblue", image: "images/Ennui.webp" }
];
const button = document.getElementById("button");
const colorText = document.querySelector(".color");
const feelingImage = document.getElementById("feeling-image");
button.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    const selected = colors[randomNumber];
    document.body.style.backgroundColor = selected.color;
    colorText.textContent = `Current Color: ${selected.color}`;
    feelingImage.src = selected.image;
});
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}



