import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingAuthoringToolComponent } from './landing-authoring-tool.component';

describe('LandingAuthoringToolComponent', () => {
  let component: LandingAuthoringToolComponent;
  let fixture: ComponentFixture<LandingAuthoringToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingAuthoringToolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingAuthoringToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
