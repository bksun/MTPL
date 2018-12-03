import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = [];

  constructor() { }

  ngOnInit() {
    this.products = ['buterfly.jpg', 'bars2.png', 'fittings.jpg', 'volves.jpg', 'pipes2.jpg', 'flanges.jpg'
    , 'stainless-steel-sheet.jpg', 'poles.jpg'];
  }

}
