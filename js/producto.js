const buttons = document.querySelectorAll('.boton1');
const blocks = document.querySelectorAll('.activar1');

buttons.forEach((button, index) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (blocks[index].style.display === "block") {
      blocks[index].style.display = "none";
    } else {
      blocks.forEach(block => block.style.display = "none");
      blocks[index].style.display = "block";
    }
  });
});