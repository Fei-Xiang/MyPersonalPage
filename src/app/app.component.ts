import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPosition = 'Summary';
  title = 'My-Personal-Page-' + this.currentPosition;
}
