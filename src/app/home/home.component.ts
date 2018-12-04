import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = [];
  cities = [];

  constructor() { }

  ngOnInit() {
    this.products = ['buterfly.jpg', 'bars2.png', 'fittings.jpg', 'volves.jpg', 'pipes2.jpg', 'flanges.jpg'
    , 'stainless-steel-sheet.jpg', 'poles.jpg', 'fasteners2.jpg'];

    this.cities = [
      { img: 'ahmedabad.jpg', place: 'Ahmedabad' },
      { img: 'bangalore.png', place: 'Bangalore' },
      { img: 'chennai.png', place: 'Chennai' },
      { img: 'delhi.png', place: 'Delhi' },
      { img: 'ghaziabad.png', place: 'Ghaziabad' },
      { img: 'gurgaon.png', place: 'Gurgaon' },
      { img: 'hyderabad.png', place: 'Hyderabad' },
      { img: 'jaipur.png', place: 'Jaipur' },
      { img: 'jalandhar.png', place: 'Jalandhar' },
      { img: 'kolkata.png', place: 'Kolkata' },
      { img: 'mumbai.png', place: 'Mumbai' },
      { img: 'raipur.png', place: 'Raipur' }];
  }


}
