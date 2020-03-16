import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmritsarComponent } from './amritsar.component';

describe('AmritsarComponent', () => {
  let component: AmritsarComponent;
  let fixture: ComponentFixture<AmritsarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmritsarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmritsarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
