import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEventSession } from '../events/shared/event';
import { EventService } from '../events/shared/event.service';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  searchTerm: string = '';
  foundSessions!: IEventSession[];

  constructor(
    public auth: AuthService,
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe((sessions: any) => {
      this.foundSessions = sessions;
    });
  }
}
