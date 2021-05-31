import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLoginComponent } from './request-login.component';

describe('RequestLoginComponent', () => {
  let component: RequestLoginComponent;
  let fixture: ComponentFixture<RequestLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
