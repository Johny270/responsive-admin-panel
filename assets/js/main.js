// Add class to selected elements
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach(item => {
    item.classList.remove('hovered');
  });
  this.classList.add('hovered');
}

list.forEach(item => item.addEventListener("mouveover", activeLink))