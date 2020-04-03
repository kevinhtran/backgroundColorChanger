const changeColor = document.getElementById("changeColor"), // get element by the changeColor id
      colors = ['#FFBD66', '#EF617B', '#D3485D', '#475677', '#283150']; // color choices
let colorIndex = 0; // index of the current color

changeColor.addEventListener("click", () => { // listen for a click event
  document.body.style.backgroundColor = colors[colorIndex];  // change color to the current color index 
  colorIndex = (colorIndex + 1) % colors.length // increment colorIndex by 1 and if it goes beyond the length of the array, then get it back to 0 using modulo %
});