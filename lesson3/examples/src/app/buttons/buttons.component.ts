import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactive: boolean = false;
   inactiveGold: boolean = false;
   inactiveSilver: boolean = false;
   inactiveCopper: boolean = false;

   constructor() { }

   ngOnInit() { }

   activateAll() {
      this.inactive = !this.inactive;
      this.inactiveGold = this.inactive;
      this.inactiveSilver = this.inactive;
      this.inactiveCopper = this.inactive;
      }

}
