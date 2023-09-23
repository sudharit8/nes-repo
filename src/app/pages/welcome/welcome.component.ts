import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  accordionItems = [
    { title: 'Credit Card', content: 'Content for Credit Card', active: true },
    { title: 'Array Sort', content: 'Content for Sorting', active: false },
    { title: 'Star Rating', content: 'Content for Star Rating', active: false },
    { title: 'Card', content: 'Content for card goes here', active: false },
    { title: 'Popup', content: 'Content for Popup', active: false },
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
