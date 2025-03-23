import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsBasicsComponent } from './signals-basics.component';

describe('SignalsBasicsComponent', () => {
  let component: SignalsBasicsComponent;
  let fixture: ComponentFixture<SignalsBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsBasicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
