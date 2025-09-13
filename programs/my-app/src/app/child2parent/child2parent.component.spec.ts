import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2parentComponent } from './child2parent.component';

describe('Child2parentComponent', () => {
  let component: Child2parentComponent;
  let fixture: ComponentFixture<Child2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
