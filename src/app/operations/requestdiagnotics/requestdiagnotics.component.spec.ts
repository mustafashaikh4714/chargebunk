import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestdiagnoticsComponent } from './requestdiagnotics.component';

describe('RequestdiagnoticsComponent', () => {
  let component: RequestdiagnoticsComponent;
  let fixture: ComponentFixture<RequestdiagnoticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestdiagnoticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestdiagnoticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
