const mainDiv = document.createElement("div");
mainDiv.style.cssText = "width:200px;height:200px;background-color:green;"
mainDiv.setAttribute("id", "child");

document.body.appendChild(mainDiv);

const myTimeout = setTimeout(changeColor, 3000);

function changeColor() {
const child = document.getElementById("child");
child.style.backgroundColor = "red";
};