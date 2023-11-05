import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastfoodtableComponent } from './fastfoodtable.component';

describe('FastfoodtableComponent', () => {
  let component: FastfoodtableComponent;
  let fixture: ComponentFixture<FastfoodtableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FastfoodtableComponent]
    });
    fixture = TestBed.createComponent(FastfoodtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
