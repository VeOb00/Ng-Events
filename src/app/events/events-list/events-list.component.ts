import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-events-list',
  templateUrl: 'events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {
  events: any = [];
  constructor(
    private eventService: EventService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName: any) {
    this.toastr.success(eventName);
  }
}
