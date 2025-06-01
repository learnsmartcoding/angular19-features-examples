import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuggyFormComponent } from './buggy-form.component';

describe('BuggyFormComponent', () => {
  let component: BuggyFormComponent;
  let fixture: ComponentFixture<BuggyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuggyFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuggyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
