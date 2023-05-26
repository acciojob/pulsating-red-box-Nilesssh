//your JS code here. If required.
const box = document.querySelector(".box");

box.style.width = "100px"
box.style.height = "100px"
box.style.backgroundColor = "red"

box.style.animation = "chetan 1s linear infinite";

let style = document.createElement("style");

style.innerHTML = `@keyframes chetan {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }`;

document.body.append(style);

