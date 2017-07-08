import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectCompComponent } from './connect-comp.component';

describe('ConnectCompComponent', () => {
  let component: ConnectCompComponent;
  let fixture: ComponentFixture<ConnectCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
