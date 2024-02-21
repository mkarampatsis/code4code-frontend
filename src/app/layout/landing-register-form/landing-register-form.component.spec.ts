import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingRegisterFormComponent } from './landing-register-form.component';

describe('LandingRegisterFormComponent', () => {
  let component: LandingRegisterFormComponent;
  let fixture: ComponentFixture<LandingRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingRegisterFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
