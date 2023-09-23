import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortDemoComponent } from './sort-demo.component';

describe('SortDemoComponent', () => {
  let component: SortDemoComponent;
  let fixture: ComponentFixture<SortDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
