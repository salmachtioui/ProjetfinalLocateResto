import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVilleComponent } from './update-ville.component';

describe('UpdateVilleComponent', () => {
  let component: UpdateVilleComponent;
  let fixture: ComponentFixture<UpdateVilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
