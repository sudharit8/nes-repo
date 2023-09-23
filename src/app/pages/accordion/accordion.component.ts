import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subject, delay, of, takeUntil } from 'rxjs';
import { PopupComponent } from '../popup/popup.component';
import { fadeInOutAnimation } from 'src/app/shared/popup-animation/popup.animation';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  animations: [fadeInOutAnimation] // Apply the animation
})
export class AccordionComponent implements OnInit, OnDestroy {

  @Input() items: { title: string, content: string, active: boolean }[] = [];

  public creditCardNumber: string = '1234567890123456'; 
  private destroy$ = new Subject<void>();
  public showModal = false;
  public popupTitle = 'Popup Title';

  constructor(private modalService: NzModalService) { }

  ngOnInit(): void {
    
  }

  showPopup(): void {
    this.showModal = true;
  
    of(null).pipe(
      delay(1000),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      const modal = this.modalService.create({
        nzTitle: this.popupTitle,
        nzContent: PopupComponent,
        nzComponentParams: {
          isVisible: this.showModal,
          modalTitle: this.popupTitle
        },
        nzFooter: null
      });
  
      modal.afterClose.pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.showModal = false;
      });
    });
  }
  
  isValidCreditCard(creditCardNumber: string): boolean {
    return /^\d{16}$/.test(creditCardNumber);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
