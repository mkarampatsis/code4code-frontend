import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPlansComponent } from './landing-plans.component';

describe('LandingPlansComponent', () => {
  let component: LandingPlansComponent;
  let fixture: ComponentFixture<LandingPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPlansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
