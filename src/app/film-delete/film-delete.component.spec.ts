import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDeleteComponent } from './film-delete.component';

describe('FilmDeleteComponent', () => {
  let component: FilmDeleteComponent;
  let fixture: ComponentFixture<FilmDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
