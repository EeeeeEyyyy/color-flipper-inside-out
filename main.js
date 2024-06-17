const other = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById("button");
const colorText = document.querySelector(".color");
const feelingImage = document.getElementById("feeling-image");
const images = [
    "images/a (1).png",
    "images/a (2).png",
    "images/a (3).png",
    "images/a (4).png",
    "images/a (5).png",
    "images/a (6).png",
    "images/a (7).png",
    "images/a (8).png",
    "images/a (9).png",
    "images/a (10).png",
];
button.addEventListener("click", function () {
    let otherColor = "#";
    for (let i = 0; i < 6; i++) {
        otherColor += other[getRandomNumber()];
    }
    const randomImage = images[getRandomNumberFromImageArray()];
    colorText.textContent = `Current Color: ${otherColor}`;
    document.body.style.backgroundColor = otherColor;
    feelingImage.src = randomImage;
});
function getRandomNumber() {
    return Math.floor(Math.random() * other.length);
}
function getRandomNumberFromImageArray() {
    return Math.floor(Math.random() * images.length);
}
