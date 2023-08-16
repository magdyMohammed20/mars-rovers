// MarsRover: Is The Main Class That Contains All Functionalities
export default class MarsRover {
  // Initiate x , y , direction with the created object initial values
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  // Function That takes the String Command And Exexute Conditions On It
  executeCommand(commandString) {
    // Split Command String To Be Array
    const commands = commandString.split('');

    // Loop Through Each Character And Pass Each Character To executeSingleCommand Function
    for (const command of commands) {
      this.executeSingleCommand(command);
    }

    // Return The Final Result 
    return this.getPositionAndDirection();
  }

// Function That Make Condition On Each Character In The Command String
  executeSingleCommand(command) {
    switch (command) {
      // if The Command Is F So Mars Will Move Forward
      case 'F':
        this.moveForward();
        break;
      // if The Command Is B So Mars Will Move Backward
      case 'B':
        this.moveBackward();
        break;
      // if The Command Is L So Mars Will Rotate Left
      case 'L':
        this.rotateLeft();
        break;
      // if The Command Is R So Mars Will Rotate Right
      case 'R':
        this.rotateRight();
        break;
    }
  }

  // Here We Working On Both Directions x & y   
  moveForward() {
    switch (this.direction) {
      // If Firection Is NORTH will Increment y
      case 'NORTH':
        this.y++;
        break;
      // If Firection Is EAST will Increment x
      case 'EAST':
        this.x++;
        break;
      // If Firection Is SOUTH will Decrement y
      case 'SOUTH':
        this.y--;
        break;
      // If Firection Is WEST will Decrement x
      case 'WEST':
        this.x--;
        break;
    }
  }

  moveBackward() {
    switch (this.direction) {
      case 'NORTH':
        this.y--;
        break;
      case 'EAST':
        this.x--;
        break;
      case 'SOUTH':
        this.y++;
        break;
      case 'WEST':
        this.x++;
        break;
    }
  }

  rotateLeft() {
    const directions = ['NORTH', 'WEST', 'SOUTH', 'EAST'];
    const currentIndex = directions.indexOf(this.direction);
    this.direction = directions[(currentIndex + 1) % directions.length];
  }

  rotateRight() {
    const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
    const currentIndex = directions.indexOf(this.direction);
    this.direction = directions[(currentIndex + 1) % directions.length];
  }

  getPositionAndDirection() {
    return `(${this.x}, ${this.y}) ${this.direction}`;
  }
}

