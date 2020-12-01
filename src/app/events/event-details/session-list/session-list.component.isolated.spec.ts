import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ISession } from '../../shared/event';

import { SessionListComponent } from './session-list.component';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let mochAuthService: any, mockVoterService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SessionListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    component = new SessionListComponent(mochAuthService, mockVoterService);
  });

  describe('ngOnChanges', () => {
    it('should filter the sessions correctly', () => {
      component.sessions = <ISession[]>[
        { name: 'session 1', level: 'intermediate' },
        { name: 'session 2', level: 'intermediate' },
        { name: 'session 3', level: 'beginner' },
      ];
      component.filterBy = 'intermediate';
      component.sortBy = 'name';

      component.ngOnChanges();

      expect(component.visibleSessions.length).toBe(2);
    });

    it('should sort the sessions correctly', () => {
      component.sessions = <ISession[]>[
        { name: 'session 1', level: 'intermediate' },
        { name: 'session 3', level: 'intermediate' },
        { name: 'session 2', level: 'beginner' },
      ];
      component.filterBy = 'all';
      component.sortBy = 'name';

      component.ngOnChanges();

      expect(component.visibleSessions[2].name).toBe('session 3');
    });
  });
});
