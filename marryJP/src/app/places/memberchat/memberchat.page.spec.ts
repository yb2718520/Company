import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberchatPage } from './memberchat.page';

describe('MemberchatPage', () => {
  let component: MemberchatPage;
  let fixture: ComponentFixture<MemberchatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberchatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
