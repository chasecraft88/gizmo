// Create a list of raindrops
const raindrops = [];

// Create a function to create a new raindrop
function createRaindrop() {
  // Create a new DOM element
  const raindrop = document.createElement('div');

  // Set the raindrop's CSS properties
  raindrop.style.position = 'absolute';
  raindrop.style.left = Math.random() * window.innerWidth + 'px';
  raindrop.style.top = '0';
  raindrop.style.width = '10px';
  raindrop.style.height = '10px';
  raindrop.style.color = 'green'; // Text color
  raindrop.style.fontWeight = 'bold';
  raindrop.textContent = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random letter (A-Z)
  document.body.appendChild(raindrop);
  raindrops.push(raindrop);
}

// Create a function to update the position of a raindrop
function updateRaindropPosition(raindrop) {
  const screenHeight = window.innerHeight;
  raindrop.style.top = parseInt(raindrop.style.top) + 1 + 'px';

  if (parseInt(raindrop.style.top) > screenHeight) {
    // Reset raindrop at the top
    raindrop.style.top = '0';
    raindrop.textContent = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  }
}

// Create a function to update the position of all raindrops
function updateRaindrops() {
  for (const raindrop of raindrops) {
    updateRaindropPosition(raindrop);
  }
}

// Create raindrops at intervals
setInterval(createRaindrop, 100);

// Update raindrop positions at intervals
setInterval(updateRaindrops, 30);
