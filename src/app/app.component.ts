import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KashmirTrampAdventure';

  gallery :any[] = ['assets/img/package-1.jpg','assets/img/package-2.jpg',
  'assets/img/package-3.jpg' ]
}
