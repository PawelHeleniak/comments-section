import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'comments-section';

  items = 'Television';
  addItem(newItem: string) {
    // this.items.push(newItem)
    console.log(newItem);
  }
}
