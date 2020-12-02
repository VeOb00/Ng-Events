import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollapsibleWellComponent } from 'src/app/common/collapsible-well/collapsible-well.component';
import { AuthService } from 'src/app/user/auth.service';
import { DurationPipe } from '../../shared/duration.pipe';
import { UpvoteComponent } from '../upvote/upvote.component';
import { VoterService } from '../voter.service';

import { SessionListComponent } from './session-list.component';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let fixture: ComponentFixture<SessionListComponent>;
  let element: HTMLElement;
  let debugEl: DebugElement;

  beforeEach(async () => {
    let mockAuthService = {
      isAuthenticated: () => true,
      currentUser: { userName: 'Joe' },
    };
    let mockVoterService = {
      userHasVoted: () => true,
    };
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent,
        // UpvoteComponent,
        DurationPipe,
        // CollapsibleWellComponent,
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  describe('initial display', () => {
    it('should have the correct session title', () => {
      component.sessions = [
        {
          id: 3,
          name: 'Session 1',
          presenter: 'Joe',
          duration: 1,
          level: 'beginner',
          abstract: 'abstract',
          voters: ['john', 'bob'],
        },
      ];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;

      component.ngOnChanges();
      fixture.detectChanges();

      expect(element.querySelector('[well-title]')?.textContent).toContain(
        'Session 1'
      );
    });
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
