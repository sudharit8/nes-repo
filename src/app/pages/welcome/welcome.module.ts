import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { CardComponent } from '../card/card.component';
import { AccordionComponent } from '../accordion/accordion.component';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule
  ],
  declarations: [
    WelcomeComponent,
    CardComponent,
    AccordionComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  exports: [
    WelcomeComponent,
    DemoNgZorroAntdModule,
    FormsModule,
    CommonModule
  ]
})
export class WelcomeModule { }
