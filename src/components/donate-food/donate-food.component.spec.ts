import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateFoodComponent } from './donate-food.component';

describe('DonateFoodComponent', () => {
  let component: DonateFoodComponent;
  let fixture: ComponentFixture<DonateFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonateFoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonateFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
