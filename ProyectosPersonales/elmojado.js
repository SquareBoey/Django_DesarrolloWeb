// Select the canvas element
const canvas = document.querySelector("#canvas");

// Get the 2D context of the canvas
const ctx = canvas.getContext("2d");

// Create an array to store the drawing history
const history = [];

// Add an event listener to the canvas for mouse movement
canvas.addEventListener("mousemove", draw);

// Add an event listener to the canvas for touch movement
canvas.addEventListener("touchmove", draw);

// Draw function that adds points to the drawing history and draws the line
function draw(event) {
  // Get the mouse or touch coordinates
  let x, y;
  if (event.type.startsWith("mouse")) {
    x = event.offsetX;
    y = event.offsetY;
  } else if (event.type.startsWith("touch")) {
    x = event.touches[0].clientX - canvas.offsetLeft;
    y = event.touches[0].clientY - canvas.offsetTop;
  }

  // Add the coordinates to the history array
  history.push([x, y]);

  // Draw the line
  ctx.lineTo(x, y);
  ctx.stroke();
}

// Create the undo button and add it to the document
const undoButton = document.createElement("button");
undoButton.textContent = "Undo";
document.body.appendChild(undoButton);

// Add an event listener to the undo button to undo the last drawing
undoButton.addEventListener("click", undo);

// Function to undo the last drawing
function undo() {
  // If there's no history, return
  if (history.length === 0) {
    return;
  }

  // Remove the last point from the history array
  history.pop();

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Redraw all the points in the history array
  for (let i = 0; i < history.length; i++) {
    const [x, y] = history[i];
    if (i === 0) {
      ctx.beginPath();
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  }
}
