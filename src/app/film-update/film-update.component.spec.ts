import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmUpdateComponent } from './film-update.component';

describe('FilmUpdateComponent', () => {
  let component: FilmUpdateComponent;
  let fixture: ComponentFixture<FilmUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
