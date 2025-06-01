import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNumberComponent } from './prime-number.component';

describe('PrimeNumberComponent', () => {
  let component: PrimeNumberComponent;
  let fixture: ComponentFixture<PrimeNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
