import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleHooksExComponent } from './lifecycle-hooks-ex.component';

describe('LifecycleHooksExComponent', () => {
  let component: LifecycleHooksExComponent;
  let fixture: ComponentFixture<LifecycleHooksExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecycleHooksExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleHooksExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
