import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECreatePaymentSlipComponent } from './e-create-payment-slip.component';

describe('ECreatePaymentSlipComponent', () => {
  let component: ECreatePaymentSlipComponent;
  let fixture: ComponentFixture<ECreatePaymentSlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECreatePaymentSlipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ECreatePaymentSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
