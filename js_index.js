function myFunction1() {
  var element = document.getElementById("but1");
  var info = document.getElementById("collapseOne");
  if (element.ariaExpanded === "false"){
    element.classList.remove("collapsed");
element.ariaExpanded = "true";
info.classList.add("show");
} else {
  element.classList.add("collapsed");
element.ariaExpanded = "false";
info.classList.remove("show");
}
}
function myFunction2() {
  var element = document.getElementById("but2");
  var info = document.getElementById("collapseTwo");
  if (element.ariaExpanded === "false"){
  element.classList.add("collapsed");
    element.classList.remove("collapsed");
element.ariaExpanded = "true";
info.classList.add("show");
} else {
  element.classList.add("collapsed");
element.ariaExpanded = "false";
info.classList.remove("show");
}
}
function myFunction3() {
  var element = document.getElementById("but3");
  var info = document.getElementById("collapseThree");
  if (element.ariaExpanded === "false"){
      element.classList.remove("collapsed");
element.ariaExpanded = "true";
info.classList.add("show");
} else {
  element.classList.add("collapsed");
element.ariaExpanded = "false";
info.classList.remove("show");
}
}

function buttonFunction(){
var elem1 = document.getElementById("elli1");
var elem2 = document.getElementById("elli2");

if (elem1.classList.contains("active") && elem2.classList.contains("carousel-item")){
  elem2.classList.add("active");
  elem1.classList.remove("active");
} else if (elem2.classList.contains("active") && elem1.classList.contains("carousel-item")){
  elem1.classList.add("active");
  elem2.classList.remove("active");
}
}
