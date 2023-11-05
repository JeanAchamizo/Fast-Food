import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastfoodDetailComponent } from './fastfood-detail.component';

describe('FastfoodDetailComponent', () => {
  let component: FastfoodDetailComponent;
  let fixture: ComponentFixture<FastfoodDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FastfoodDetailComponent]
    });
    fixture = TestBed.createComponent(FastfoodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
