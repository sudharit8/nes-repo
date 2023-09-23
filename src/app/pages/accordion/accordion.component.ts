import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() items: { title: string, content: string, active: boolean }[] = [];
  public creditCardNumber: string = '1234567890123456'; 
  constructor() { }

  ngOnInit(): void {
    
  }

  isValidCreditCard(creditCardNumber: string): boolean {
    return /^\d{16}$/.test(creditCardNumber);
  }

}
