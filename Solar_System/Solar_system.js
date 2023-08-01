// Written by MR.PY

const canvas = document.getElementById('solarSystemCanvas');
const ctx = canvas.getContext('2d');

// Function to draw a planet
function drawPlanet(planet) {
  ctx.beginPath();
  ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
  ctx.fillStyle = planet.color;
  ctx.fill();
}

// Define the planets
const planets = [
  { name: 'Sun', radius: 30, color: 'yellow', distance: 0, angle: 0, speed: 0 },
  { name: 'Mercury', radius: 5, color: 'gray', distance: 100, angle: 0, speed: 0.02 },
  { name: 'Venus', radius: 7, color: 'orange', distance: 150, angle: 0, speed: 0.015 },
  { name: 'Earth', radius: 7, color: 'blue', distance: 200, angle: 0, speed: 0.01 },
  { name: 'Mars', radius: 7, color: 'red', distance: 250, angle: 0, speed: 0.012},
  // Add other planets with their properties
  // ...
];

function drawSolarSystem() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Get the center of the canvas
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  // Draw each planet
  planets.forEach(planet => {
    // Update the planet's position
    planet.angle += planet.speed;
    const x = centerX + planet.distance * Math.cos(planet.angle);
    const y = centerY + planet.distance * Math.sin(planet.angle);
    planet.x = x;
    planet.y = y;

    // Draw the planet
    drawPlanet(planet);
  });

  // Request the next animation frame
  requestAnimationFrame(drawSolarSystem);
}

// Start the animation
drawSolarSystem();
