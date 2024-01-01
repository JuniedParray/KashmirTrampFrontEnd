import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
onItemChange($event: Event) {
throw new Error('Method not implemented.');
}
slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

ngOnInit(): void {
  this.slides[0] = {
    src: './assets/img/bg-hero.jpg',
  };
  this.slides[1] = {
    src: './assets/img/bg-hero1.jpg',
  }
  this.slides[2] = {
    src: './assets/img/destination-2.jpg',
  }
}

}
