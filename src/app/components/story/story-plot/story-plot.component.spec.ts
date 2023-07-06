import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryPlotComponent } from './story-plot.component';

describe('StoryPlotComponent', () => {
  let component: StoryPlotComponent;
  let fixture: ComponentFixture<StoryPlotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoryPlotComponent]
    });
    fixture = TestBed.createComponent(StoryPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
