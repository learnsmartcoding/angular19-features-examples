import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo1Component } from './demo1.component';

describe('Demo1Component', () => {
  let component: Demo1Component;
  let fixture: ComponentFixture<Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Demo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
