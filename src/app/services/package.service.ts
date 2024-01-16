import { Injectable } from '@angular/core';
import { PackageInfo } from '../models/package-info';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  packagesList :PackageInfo[] =[
    {id:1,name:'Pahalgam to Sheshnag Lake',image:'assets/img/package-1.jpg',description:'Pahalgam is a hill station in the north Indian state of Jammu and Kashmir. Mountain trails run northeast to Amarnath Cave Temple, a Hindu shrine and site of the annual Amarnath Yatra pilgrimage. Overa Aru Wildlife Sanctuary is home to animals including brown bears and musk deer. Northeast, the Lidder River runs through scenic Betaab Valley. Southeast, Tulian Lake is flanked by mountain peaks and often frozen',location:'Pahalgam',price:220,persons:2,duration:4},
    {id:2,name:'Gulmarg',image:'assets/img/package-2.jpg',description:'Gulmarg, known as Gulmarag in Kashmiri, is a town, hill station, popular tourist destination, popular skiing destination and a notified area committee in the Baramulla district in the Indian union territory of Jammu and Kashmir. It is located at a distance of 31 km from Baramulla and 49 km from Srinagar.',location:'Gulmarg',price:120,persons:4,duration:2},
    {id:3,name:'Sonamarg Package',image:'assets/img/package-3.jpg',description:'Sonamarg or Sonmarg, known as Sonamarag in Kashmiri, is a hill station located in the Ganderbal District of Jammu and Kashmir, India. It is located about 62 kilometers from Ganderbal Town and 80 kilometres northeast of the capital city, Srinagar',location:'Sonamarg',price:260,persons:3,duration:5}
  ]

  getPackages(): PackageInfo[] {
    return this.packagesList;
  }

  getPackageById(id: number): PackageInfo | undefined {
    return this.packagesList.find(p => p.id === id);
  }
  constructor() { }
}
