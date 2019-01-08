import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargepointconfigurationComponent } from './chargepointconfiguration.component';

describe('ChargepointconfigurationComponent', () => {
  let component: ChargepointconfigurationComponent;
  let fixture: ComponentFixture<ChargepointconfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargepointconfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargepointconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
