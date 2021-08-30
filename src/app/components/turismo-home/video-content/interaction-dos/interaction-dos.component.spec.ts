import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionDosComponent } from './interaction-dos.component';

describe('InteractionDosComponent', () => {
  let component: InteractionDosComponent;
  let fixture: ComponentFixture<InteractionDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
