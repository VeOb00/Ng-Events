import { TestBed } from '@angular/core/testing';

import { EventsListResolverService } from './events-list-resolver.service';

describe('EventsListResolverService', () => {
  let service: EventsListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsListResolverService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
