var dragBox = document.getElementById("dragBox");
var textBox = document.getElementById("textBox");

var isDragging = false;
var mouseOffset = {x:0, y:0};

// When the mouse is pressed down within the textbox, set isDragging to true
// and calculate the offset between the mouse and the top-left corner of the box.
textBox.addEventListener("mousedown", function(e) {
  isDragging = true;
  mouseOffset.x = e.clientX - dragBox.offsetLeft;
  mouseOffset.y = e.clientY - dragBox.offsetTop;
});

// When the mouse is moved while isDragging is true, move the box to the new position.
document.addEventListener("mousemove", function(e) {
  if (isDragging) {
    dragBox.style.left = (e.clientX - mouseOffset.x) + "px";
    dragBox.style.top = (e.clientY - mouseOffset.y) + "px";
  }
});

// When the mouse is released, set isDragging back to false.
document.addEventListener("mouseup", function(e) {
  isDragging = false;
});

