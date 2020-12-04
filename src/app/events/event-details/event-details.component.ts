import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  faCalendarWeek,
  faClock,
  faGlobe,
  faMapMarkedAlt,
  faTags,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/user/auth.service';
import { ISession } from '../shared/event';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit {
  event: any;
  addMode: boolean = false;
  filterBy: string = 'all';
  sortBy: string = 'votes';
  faTags = faTags;
  faClock = faClock;
  faCalendar = faCalendarWeek;
  faAddress = faMapMarkedAlt;
  faGlobe = faGlobe;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.route.data.forEach((data) => {
      this.event = data['event'];
      this.addMode = false;
      this.filterBy = 'all';
      this.sortBy = 'votes';
    });
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(
      null,
      this.event.sessions.map((s: ISession) => s.id)
    );
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
