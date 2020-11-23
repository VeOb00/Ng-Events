import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: 'event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss'],
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;

  constructor() {}

  getStartTimeStyle(): any {
    if (this.event && this.event.time === '8:00 am')
      return { color: '#003300', 'font-weight': 'bold' };
    return {};
  }

  ngOnInit(): void {}
}
