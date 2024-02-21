import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingNavigationMobileComponent } from './landing-navigation-mobile.component';

describe('LandingNavigationMobileComponent', () => {
  let component: LandingNavigationMobileComponent;
  let fixture: ComponentFixture<LandingNavigationMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingNavigationMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingNavigationMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
