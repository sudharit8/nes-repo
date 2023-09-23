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
    { title: 'Item 3', content: 'Content for Item 3', active: false }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
