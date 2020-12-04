import { Component, OnInit, Input } from '@angular/core';
import { faEarlybirds } from '@fortawesome/free-brands-svg-icons';
import {
  faCalendarWeek,
  faClock,
  faGlobe,
  faMapMarkedAlt,
  faMoon,
  faTags,
} from '@fortawesome/free-solid-svg-icons';
import { IEvent } from '../shared/event';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: 'event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss'],
})
export class EventThumbnailComponent implements OnInit {
  @Input()
  event!: IEvent;
  faEarly = faEarlybirds;
  faLate = faMoon;
  faTags = faTags;
  faClock = faClock;
  faCalendar = faCalendarWeek;
  faAddress = faMapMarkedAlt;
  faGlobe = faGlobe;

  constructor() {}

  getStartTimeStyle(): any {
    if (
      this.event &&
      (this.event.time === '8:00 am' || this.event.time === '10:00 am')
    )
      return { 'font-style': 'italic' };
    return {};
  }

  ngOnInit(): void {}
}
