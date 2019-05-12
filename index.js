let main = document.querySelector("main").remove();

let newHeader = document.createElement('h1');

newHeader.id = "victory";
// newHeader.innerText = "Susantano is the champion";
newHeader.innerHTML = "Susantano oreo cupcake pineapples is the champion";

let appendNewHeader = document.body.appendChild(newHeader);
