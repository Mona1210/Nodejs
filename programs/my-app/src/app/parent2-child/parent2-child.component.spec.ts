import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent2ChildComponent } from './parent2-child.component';

describe('Parent2ChildComponent', () => {
  let component: Parent2ChildComponent;
  let fixture: ComponentFixture<Parent2ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Parent2ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Parent2ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
