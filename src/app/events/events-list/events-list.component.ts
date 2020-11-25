import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/event';

@Component({
  selector: 'app-events-list',
  templateUrl: 'events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {
  events: IEvent[] = [];
  constructor(private toastr: ToastrService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName: string) {
    this.toastr.success(eventName);
  }
}
