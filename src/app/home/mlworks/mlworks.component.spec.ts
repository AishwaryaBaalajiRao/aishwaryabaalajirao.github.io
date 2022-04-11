import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlworksComponent } from './mlworks.component';

describe('MlworksComponent', () => {
  let component: MlworksComponent;
  let fixture: ComponentFixture<MlworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlworksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
