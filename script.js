let circle = document.querySelector("#circle");

document.addEventListener("mousemove", (e) => {
  //   console.log(e.clientX + "px"); x-axis ko index (100 px)
  //   console.log(e.clientY + "px");  Y-axis ko index (100 px)

  circle.style.left = e.clientX + "px"; // left or vertical  position of the cursor
  circle.style.top = e.clientY + "px"; // top or horizontal position of the cursor
});

const arr = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
let hex = "#";

setInterval(() => {
  for (let i = 0; i <= 5; i++) {
    hex = hex + arr[Math.floor(Math.random() * 16)];
  }
  console.log(hex);
  circle.style.borderColor = hex;
  hex = "#";
}, 2000);
