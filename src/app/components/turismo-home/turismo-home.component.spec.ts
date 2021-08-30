import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurismoHomeComponent } from './turismo-home.component';

describe('TurismoHomeComponent', () => {
  let component: TurismoHomeComponent;
  let fixture: ComponentFixture<TurismoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurismoHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurismoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
