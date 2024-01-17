import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantVListComponent } from './RestaurantV-list.component';

describe('RestaurantVListComponent', () => {
  let component: RestaurantVListComponent;
  let fixture: ComponentFixture<RestaurantVListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantVListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantVListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
