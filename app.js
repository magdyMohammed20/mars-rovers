import MarsRover from './rover.js'

// Example usage
const rover1 = new MarsRover(4, 2, 'EAST');
const commandString = 'FLFFFRFLB';
const finalPosition = rover1.executeCommand(commandString);
console.log('Final Position:', finalPosition); // Output: (6, 4) NORTH


// Part II
console.log(`Rover's current position: (${rover1.x}, ${rover1.y}) ${rover1.direction}`);

