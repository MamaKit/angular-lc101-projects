import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;

  handleTakeOff(rocketImage) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
      rocketImage.style.left = 0;
      rocketImage.style.bottom = 0;
    }
    this.takeOffEnabled = !this.takeOffEnabled;
  }

  handleLand(rocketImage) {
    if(!this.takeOffEnabled) {
      let result = window.confirm("Are you sure you want to land?");
      if (result) {
        this.color = 'green';
        this.height = 0;
        this.width = 0;
        this.message = "Shuttle has landed.";
        rocketImage.style.bottom = 0;
        rocketImage.style.left = 0;
      }
    }
    this.takeOffEnabled = !this.takeOffEnabled;
  }

  handleAbort(rocketImage) {
    if (!this.takeOffEnabled) {
      let result = window.confirm("Are you sure you want to abort the mission?");
      if (result) {
        this.color = 'green';
        this.height = 0;
        this.width = 0;
        this.message = "Mission aborted.";
        rocketImage.style.bottom = 0;
        rocketImage.style.left = 0;
      }
    }
    this.takeOffEnabled = !this.takeOffEnabled;
  }

  moveRocket(rocketImage,direction: string) {
    if(this.message !== "Shuttle lost in space" && this.message !== "Shuttle crashed.") {
      if(direction === 'up') {
        if(parseInt(rocketImage.style.bottom) < 330) {
          let movementU = parseInt(rocketImage.style.bottom) + 10 + 'px';
          rocketImage.style.bottom = movementU;
          this.height = this.height + 10000;
        } else {
          this.message = "Shuttle lost in space.";
          this.color = 'black';
          rocketImage.style.visibility = 'hidden';
        };
      } else if (direction === 'down') {
        if(parseInt(rocketImage.style.bottom) > 0) {
          let movementD = parseInt(rocketImage.style.bottom) - 10 + 'px';
          rocketImage.style.bottom = movementD;
          this.height = this.height - 10000;
        } else {
          this.color = 'red';
          rocketImage.style.bottom = 0;
          this.message = 'Shuttle crashed.';
          this.takeOffEnabled = !this.takeOffEnabled;
        };
      } else if (direction === 'right') {
        if(parseInt(rocketImage.style.left) < 450) {
          let movementR = parseInt(rocketImage.style.left) + 10 + 'px';
          rocketImage.style.left = movementR;
          this.width = this.width + 10000;
        } else {
          alert("WARNING: Rocket leaving defined mission area.");
        };
      } else {
        if(parseInt(rocketImage.style.left) > 0) {
          let movementL = parseInt(rocketImage.style.left) - 10 + 'px';
          rocketImage.style.left = movementL;
          this.width = this.width - 10000;
        } else {
          alert("WARNING: Rocket leaving defined mission area.");
        };
      }
    }
  }

}