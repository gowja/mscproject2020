import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pbpaper1Component } from './pbpaper1.component';

describe('Pbpaper1Component', () => {
  let component: Pbpaper1Component;
  let fixture: ComponentFixture<Pbpaper1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pbpaper1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pbpaper1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
