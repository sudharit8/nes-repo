import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-demo',
  templateUrl: './sort-demo.component.html',
  styleUrls: ['./sort-demo.component.css']
})
export class SortDemoComponent implements OnInit {

  public items: string[] = ['Banana', 'Apple', 'Cherry', 'Date', 'Fig'];
  public sortDirection: string = 'none';
  constructor() { }

  ngOnInit(): void {
  }

}
