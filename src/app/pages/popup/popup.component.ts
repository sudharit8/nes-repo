import { Component, Input, OnDestroy } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { of } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';
import { fadeInOutAnimation } from 'src/app/shared/popup-animation/popup.animation';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  animations: [fadeInOutAnimation] 
})
export class PopupComponent implements OnDestroy {
  @Input() isVisible = false;
  @Input() modalTitle = '';
  
  constructor(private modal: NzModalRef) { }

  handleCancel(): void {
    this.modal.destroy();
  }

  ngOnDestroy(): void {
    // Clean up subscriptions when the component is destroyed
  }
}
