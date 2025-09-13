import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateloginComponent } from './templatelogin.component';

describe('TemplateloginComponent', () => {
  let component: TemplateloginComponent;
  let fixture: ComponentFixture<TemplateloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
