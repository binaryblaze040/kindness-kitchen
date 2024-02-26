import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveFoodComponent } from './receive-food.component';

describe('ReceiveFoodComponent', () => {
  let component: ReceiveFoodComponent;
  let fixture: ComponentFixture<ReceiveFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiveFoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceiveFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
