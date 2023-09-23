import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  accordionItems = [
    { title: 'Card', content: 'Content for card goes here', active: true },
    { title: 'Item 2', content: 'Content for Item 2', active: false },
    { title: 'Item 3', content: 'Content for Item 3', active: false }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
