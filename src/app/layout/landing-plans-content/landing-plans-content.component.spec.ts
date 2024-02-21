import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPlansContentComponent } from './landing-plans-content.component';

describe('LandingPlansContentComponent', () => {
  let component: LandingPlansContentComponent;
  let fixture: ComponentFixture<LandingPlansContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPlansContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingPlansContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
