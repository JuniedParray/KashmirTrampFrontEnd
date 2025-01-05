import { Component, OnInit } from '@angular/core';
import { ContactDetails } from 'src/app/models/contact-details';
import { Destination } from 'src/app/models/destination';
import { PackageInfo } from 'src/app/models/package-info';
import { Teams } from 'src/app/models/teams';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) {}
  
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
      this.loadData();
    }
  
    loadData(): void{
      this.dataService.get('api/home/getHomePageDetails').subscribe(
        (response) => {
          debugger
          
        },
        (error) => {
          console.error('Error fetching home page details', error)
        }
  
      );
    }
  destinations: Destination[] = [
    { id: 1, name: 'Srinagar', image: `assets/img/destination-1.jpg`, discount:10},
    { id: 2, name: 'Pahalgam', image: `assets/img/destination-2.jpg`, discount:20},
    { id: 3, name: 'Ladakh', image: `assets/img/destination-3.jpg`, discount:10},
    { id: 4, name: 'Sonamarg', image: `assets/img/destination-4.jpg`, discount:10},
   
  ]
  teamsInfo : Teams[] = [
    {id:1,name:'Zahid Malik',role:'Founder Of KashmirTrampAdventure',image:'assets/img/team-1.jpg',fbLink:'',instaLink:''},
    {id:2,name:'Gulzar Malik',role:'Co-Founder Of KashmirTrampAdventure',image:'assets/img/team-2.jpg',fbLink:'',instaLink:''},
    {id:3,name:'Bilal Ahmad',role:'Tour Guide',image:'assets/img/team-3.jpg',fbLink:'',instaLink:''},
    {id:4,name:'Mushtag Ahmad',role:'Tour Guide',image:'assets/img/team-4.jpg',fbLink:'',instaLink:''}
  ]
  packageInfo : PackageInfo[]=[
    {id:1,name:'Pahalgam to Sheshnag Lake',image:'assets/img/package-1.jpg',description:'Pahalgam is a hill station in the north Indian state of Jammu and Kashmir. Mountain trails run northeast to Amarnath Cave Temple, a Hindu shrine and site of the annual Amarnath Yatra pilgrimage. Overa Aru Wildlife Sanctuary is home to animals including brown bears and musk deer. Northeast, the Lidder River runs through scenic Betaab Valley. Southeast, Tulian Lake is flanked by mountain peaks and often frozen',location:'Pahalgam',price:220,persons:2,duration:4},
    {id:2,name:'Gulmarg',image:'assets/img/package-2.jpg',description:'Gulmarg, known as Gulmarag in Kashmiri, is a town, hill station, popular tourist destination, popular skiing destination and a notified area committee in the Baramulla district in the Indian union territory of Jammu and Kashmir. It is located at a distance of 31 km from Baramulla and 49 km from Srinagar.',location:'Gulmarg',price:120,persons:4,duration:2},
    {id:3,name:'Sonamarg Package',image:'assets/img/package-3.jpg',description:'Sonamarg or Sonmarg, known as Sonamarag in Kashmiri, is a hill station located in the Ganderbal District of Jammu and Kashmir, India. It is located about 62 kilometers from Ganderbal Town and 80 kilometres northeast of the capital city, Srinagar',location:'Sonamarg',price:260,persons:3,duration:5}
  ]
onItemChange($event: Event) {
    throw new Error('Method not implemented.');
}
slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});


}
