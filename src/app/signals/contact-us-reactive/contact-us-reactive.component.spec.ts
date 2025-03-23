import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsReactiveComponent } from './contact-us-reactive.component';

describe('ContactUsReactiveComponent', () => {
  let component: ContactUsReactiveComponent;
  let fixture: ComponentFixture<ContactUsReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsReactiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
