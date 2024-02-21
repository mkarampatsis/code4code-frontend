import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileVideoComponent } from './tile-video.component';

describe('TileVideoComponent', () => {
  let component: TileVideoComponent;
  let fixture: ComponentFixture<TileVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TileVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TileVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
