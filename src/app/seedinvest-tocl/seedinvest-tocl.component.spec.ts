import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedinvestToclComponent } from './seedinvest-tocl.component';

describe('SeedinvestToclComponent', () => {
  let component: SeedinvestToclComponent;
  let fixture: ComponentFixture<SeedinvestToclComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeedinvestToclComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedinvestToclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
