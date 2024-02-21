import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingLearningComponent } from './landing-learning.component';

describe('LandingLearningComponent', () => {
  let component: LandingLearningComponent;
  let fixture: ComponentFixture<LandingLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingLearningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
