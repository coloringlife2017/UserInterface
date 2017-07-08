import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClDonationComponent } from './cl-donation.component';

describe('ClDonationComponent', () => {
  let component: ClDonationComponent;
  let fixture: ComponentFixture<ClDonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClDonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
