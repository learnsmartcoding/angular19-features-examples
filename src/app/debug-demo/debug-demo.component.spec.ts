import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugDemoComponent } from './debug-demo.component';

describe('DebugDemoComponent', () => {
  let component: DebugDemoComponent;
  let fixture: ComponentFixture<DebugDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebugDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebugDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
