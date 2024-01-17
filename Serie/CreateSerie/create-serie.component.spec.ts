import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSerieComponent } from './create-Serie.component';

describe('CreateSpecialiteComponent', () => {
  let component: CreateSerieComponent;
  let fixture: ComponentFixture<CreateSerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
