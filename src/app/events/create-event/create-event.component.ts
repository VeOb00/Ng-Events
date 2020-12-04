import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
})
export class CreateEventComponent implements OnInit {
  isDirty!: boolean;
  newEvent!: any;
  mouseoverRequired!: boolean;

  constructor(private router: Router, private eventService: EventService) {}

  setDirty(value: boolean | undefined) {
    if (!!value) return (this.isDirty = true);
    else return (this.isDirty = false);
  }

  saveEvent(formValues: any) {
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isDirty = false;
      this.router.navigate(['/events']);
    });
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }

  ngOnInit(): void {}
}
