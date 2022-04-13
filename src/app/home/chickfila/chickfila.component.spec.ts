import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickfilaComponent } from './chickfila.component';

describe('ChickfilaComponent', () => {
  let component: ChickfilaComponent;
  let fixture: ComponentFixture<ChickfilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChickfilaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChickfilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
