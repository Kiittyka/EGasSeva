import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferInfoComponent } from './transfer-info.component';

describe('TransferInfoComponent', () => {
  let component: TransferInfoComponent;
  let fixture: ComponentFixture<TransferInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
