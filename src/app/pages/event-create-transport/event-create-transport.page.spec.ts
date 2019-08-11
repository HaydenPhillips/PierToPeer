import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCreateTransportPage } from './event-create-transport.page';

describe('EventCreateTransportPage', () => {
  let component: EventCreateTransportPage;
  let fixture: ComponentFixture<EventCreateTransportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCreateTransportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCreateTransportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
