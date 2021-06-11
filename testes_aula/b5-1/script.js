let headerContainer = document.getElementById("header-container");
headerContainer.style.backgroundColor = "rgb(8 136 41)";

let sectionEmerg  = document.getElementsByClassName("emergency-tasks")[0];
sectionEmerg.style.backgroundColor = "rgb(183 12 123)";

let divEmerg = document.querySelectorAll(".emergency-tasks h3");
for (index = 0; index < divEmerg.length; index += 1){
    divEmerg[index].style.backgroundColor = "rgb(32, 56, 163)"
};

let sectionNoEmerg = document.getElementsByClassName("no-emergency-tasks")[0];
sectionNoEmerg.style.backgroundColor = "rgb(14, 26, 121)"

let divNoEmerg = document.querySelectorAll(".no-emergency-tasks h3");
for (index = 0; index < divNoEmerg.length; index += 1){
    divNoEmerg[index].style.backgroundColor = "rgb(47, 21, 14)"
};

let footer = document.getElementById("footer-container");
footer.style.backgroundColor = "rgb(74, 25, 199)"
