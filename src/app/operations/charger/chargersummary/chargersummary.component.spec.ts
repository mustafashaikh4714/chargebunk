import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargersummaryComponent } from './chargersummary.component';

describe('ChargersummaryComponent', () => {
  let component: ChargersummaryComponent;
  let fixture: ComponentFixture<ChargersummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargersummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargersummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
