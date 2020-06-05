import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallariesComponent } from './gallaries.component';

describe('GallariesComponent', () => {
  let component: GallariesComponent;
  let fixture: ComponentFixture<GallariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
