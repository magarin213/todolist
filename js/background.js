const body = document.querySelector("body");


const IMGS = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg"
]


const chosenImage = IMGS[Math.floor(Math.random() * IMGS.length)]

const bgImage = document.createElement("img");
bgImage.src = `/img/${chosenImage}`
bgImage.classList.add("bgimg")


document.body.appendChild(bgImage)

