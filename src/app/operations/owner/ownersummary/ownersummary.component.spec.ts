import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersummaryComponent } from './ownersummary.component';

describe('OwnersummaryComponent', () => {
  let component: OwnersummaryComponent;
  let fixture: ComponentFixture<OwnersummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnersummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnersummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
