import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerSignupFormComponent } from './dealer-signup-form.component';

describe('DealerSignupFormComponent', () => {
  let component: DealerSignupFormComponent;
  let fixture: ComponentFixture<DealerSignupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerSignupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerSignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
