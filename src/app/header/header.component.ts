import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // document.getElementsByClassName('nav-item');
    // const x = document.getElementsByClassName('nav-item');
    // console.log(x[0]);
    // x[0].style.backgroundColor = 'red';
  }

}
