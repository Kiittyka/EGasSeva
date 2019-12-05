import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerQueryComponent } from './customer-query.component';

describe('CustomerQueryComponent', () => {
  let component: CustomerQueryComponent;
  let fixture: ComponentFixture<CustomerQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
