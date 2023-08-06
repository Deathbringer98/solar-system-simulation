Solar System Simulation
This is a simple solar system simulation built with JavaScript and HTML5 canvas, depicting the motion of planets orbiting around the sun in 2D space.

Solar System Simulation

Features
Realistic 2D representation of the solar system.
Planets rotate around the sun at their respective speeds and distances.
Customize each planet's size, color, distance from the sun, and rotational speed.
How to Use
Clone the repository or download the project files to your local machine.
bash
Copy code
git clone https://github.com/your-username/solar-system-simulation.git
Open the index.html file in your web browser.

Observe the planets rotating around the sun in the canvas.

Customize the Solar System
You can customize the solar system by modifying the solarSystem.js file.

Adding New Planets
To add new planets to the simulation, you need to define their properties in the planets array. Each planet should have the following properties:

name: The name of the planet.
radius: The size of the planet.
color: The color of the planet (HTML color string).
distance: The distance of the planet from the sun (controls the orbit radius).
angle: The initial angle (in radians) of the planet's position relative to the sun.
speed: The rotational speed of the planet (in radians per frame).
javascript
Copy code
const planets = [
  //...
  { name: 'Mars', radius: 6, color: 'red', distance: 250, angle: 0, speed: 0.008 },
  { name: 'Jupiter', radius: 15, color: 'orange', distance: 350, angle: 0, speed: 0.005 },
  //...
];
Changing the Canvas Size
You can adjust the canvas size by modifying the width and height attributes in the index.html file.

html
Copy code
<canvas id="solarSystemCanvas" width="800" height="600"></canvas>
Contributing
If you find any issues with the simulation or have suggestions for improvements, feel free to open an issue or submit a pull request. Contributions are welcome!
# Video
https://www.youtube.com/watch?v=4g2YNEo_Dkg
License
This project is licensed under the MIT License - see the LICENSE file for details.

Enjoy exploring the solar system simulation! If you have any questions or need further assistance, please don't hesitate to contact us.

Note: This simulation is a simplified 2D representation and may not reflect the actual planetary orbits and movements in space.
