import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingAuthoringToolContentComponent } from './landing-authoring-tool-content.component';

describe('LandingAuthoringToolContentComponent', () => {
  let component: LandingAuthoringToolContentComponent;
  let fixture: ComponentFixture<LandingAuthoringToolContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingAuthoringToolContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingAuthoringToolContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
