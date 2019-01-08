import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbwregistrationComponent } from './cbwregistration.component';

describe('CbwregistrationComponent', () => {
  let component: CbwregistrationComponent;
  let fixture: ComponentFixture<CbwregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbwregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbwregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
