import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodrecognitionComponent } from './foodrecognition.component';

describe('FoodrecognitionComponent', () => {
  let component: FoodrecognitionComponent;
  let fixture: ComponentFixture<FoodrecognitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodrecognitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodrecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
