const backgroundImage = document.querySelector("#background");

const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

backgroundImage.src = `img/${chosenImage}`;


