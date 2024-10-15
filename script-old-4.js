const colors = [
    "#FF87F3",
    "#32B5FF",
    "#FF3232",
    "#0EDC0A",
    "#E9ED19",
    "#FF87F3",
  ]; // Your specified colors
  const blackCells = document.querySelectorAll(".cell.black");
  
  blackCells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
      const randomColor = getRandomColor();
      cell.style.backgroundColor = randomColor; // Change background color to random
    });
  
    cell.addEventListener("mouseleave", () => {
      cell.classList.add("transition");
      setTimeout(() => {
        cell.style.backgroundColor = ""; // Reset to default (or specify a color)
        cell.classList.remove("transition");
      }, 1000); // Duration of the color change effect
    });
  });
  
  // Function to randomly select a color from the predefined colors
  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }
  