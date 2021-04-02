import { Component } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPosition = 'Summary';
  title = 'Ping-Shao-Shao' + this.currentPosition;
  faShoppingCart = faShoppingCart;
}
