import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnTabComponent } from './btn-tab.component';

describe('BtnTabComponent', () => {
  let component: BtnTabComponent;
  let fixture: ComponentFixture<BtnTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
