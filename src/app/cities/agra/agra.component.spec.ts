import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgraComponent } from './agra.component';

describe('AgraComponent', () => {
  let component: AgraComponent;
  let fixture: ComponentFixture<AgraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
