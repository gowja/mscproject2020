import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PbpaperComponent } from './pbpaper.component';

describe('PbpaperComponent', () => {
  let component: PbpaperComponent;
  let fixture: ComponentFixture<PbpaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PbpaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PbpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
