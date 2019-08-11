import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDetailPage } from './sub-detail.page';

describe('SubDetailPage', () => {
  let component: SubDetailPage;
  let fixture: ComponentFixture<SubDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
