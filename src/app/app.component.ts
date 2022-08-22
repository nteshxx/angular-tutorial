import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  showText: boolean = false;
  fontSizePx: number = 16;

  toggleShowText(): void {
    this.showText = !this.showText;
  }
}
