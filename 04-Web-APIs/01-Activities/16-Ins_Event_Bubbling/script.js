var grandFather = document.querySelector(".outer-div");
var father = document.querySelector(".inner-div");
var child = document.querySelector(".button");

function changeBlue(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: blue; fontSize: 30px"
  );
}

function changePurple(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: purple"
  );
}

function changeOrange(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: orange"
  );
}

grandFather.addEventListener("click", changeOrange);
father.addEventListener("click", changePurple);
child.addEventListener("click", changeBlue);