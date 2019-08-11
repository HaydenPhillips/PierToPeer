import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListTransportPage } from './event-list-transport.page';

describe('EventListTransportPage', () => {
  let component: EventListTransportPage;
  let fixture: ComponentFixture<EventListTransportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListTransportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListTransportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
