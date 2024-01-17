import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVilleComponent } from './create-ville.component';

describe('CreateInsuranceComponent', () => {
  let component: CreateVilleComponent;
  let fixture: ComponentFixture<CreateVilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
