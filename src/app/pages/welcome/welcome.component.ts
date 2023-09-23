import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  accordionItems = [
    { title: 'Card', content: 'Content for card goes here', active: true },
    { title: 'Credit Card', content: 'Content for Credit Card', active: false },
    { title: 'Star Rating', content: 'Content for Star Rating', active: false }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
