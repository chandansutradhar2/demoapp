import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demoapp';
  someMoreVar: boolean;
  constructor() {
    console.log('sample constructor');
  }
}
