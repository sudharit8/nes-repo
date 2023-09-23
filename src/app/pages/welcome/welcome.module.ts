import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { CardComponent } from '../card/card.component';
import { AccordionComponent } from '../accordion/accordion.component';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreditCardPipe } from 'src/app/shared/credit-card.pipe';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { SortPipe } from 'src/app/shared/sort.pipe';
import { SortDemoComponent } from '../sort-demo/sort-demo.component';
import { PopupComponent } from '../popup/popup.component';


@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule
  ],
  declarations: [
    WelcomeComponent,
    PopupComponent,
    CreditCardPipe,
    StarRatingComponent,
    SortPipe,
    CardComponent,
    SortDemoComponent,
    AccordionComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  exports: [
    WelcomeComponent,
    StarRatingComponent,
    CreditCardPipe,
    DemoNgZorroAntdModule,
    FormsModule,
    CommonModule,
    AccordionComponent,
    PopupComponent,
    SortDemoComponent,
    SortPipe
  ]
})
export class WelcomeModule { }
