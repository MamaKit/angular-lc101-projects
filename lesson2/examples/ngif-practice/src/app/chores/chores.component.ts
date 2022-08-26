import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Complete LaunchCode prep work'];
   finishedChores = ['Clean bathroom', 'Sweep porch', 'Buy groceries','Empty dishwasher'];

   targetImage = 'target.jpg';

   constructor() { }

   ngOnInit() {
   }

}
