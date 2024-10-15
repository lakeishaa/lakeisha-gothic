const colors = [
  "#FF87F3", // MIK-AS3.mp3
  "#32B5FF", // MIK-C3.mp3
  "#FF3232", // MIK-D3.mp3
  "#0EDC0A", // MIK-E3.mp3
  "#E9ED19", // MIK-FS3.mp3
  "#ff8b2a", // MIK-GS3.mp3
]; // Your specified colors

// Map colors to audio files
const audioFiles = {
  "#FF87F3": "assets/MIK-AS3.mp3", // Replace with actual paths
  "#32B5FF": "assets/MIK-C3.mp3",
  "#FF3232": "assets/MIK-D3.mp3",
  "#0EDC0A": "assets/MIK-E3.mp3",
  "#E9ED19": "assets/MIK-FS3.mp3",
  "#FF87F3": "assets/MIK-GS3.mp3", // Ensure unique keys or handle duplicates appropriately
};

const blackCells = document.querySelectorAll(".cell.black");

blackCells.forEach((cell) => {
  cell.addEventListener("mouseenter", () => {
    const randomColor = getRandomColor();
    cell.style.backgroundColor = randomColor; // Change background color to random

    // Play corresponding audio
    const audioSrc = audioFiles[randomColor];
    if (audioSrc) {
      playAudio(audioSrc);
    }
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

// Function to play audio
function playAudio(src) {
  const audio = new Audio(src);
  audio.play();
}
