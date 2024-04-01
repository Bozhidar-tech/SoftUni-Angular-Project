import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthTrainingComponent } from './strength-training.component';

describe('StrengthTrainingComponent', () => {
  let component: StrengthTrainingComponent;
  let fixture: ComponentFixture<StrengthTrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrengthTrainingComponent]
    });
    fixture = TestBed.createComponent(StrengthTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
