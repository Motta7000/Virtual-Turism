import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoContentDosComponent } from './video-content-dos.component';

describe('VideoContentDosComponent', () => {
  let component: VideoContentDosComponent;
  let fixture: ComponentFixture<VideoContentDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoContentDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoContentDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
