import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonVideoComponent } from './button-video.component';

describe('ButtonVideoComponent', () => {
  let component: ButtonVideoComponent;
  let fixture: ComponentFixture<ButtonVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
