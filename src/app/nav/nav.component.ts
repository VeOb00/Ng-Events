import { Component, OnInit } from '@angular/core';
import { EventService, IEventSession } from '../events';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  searchTerm: string = '';
  foundSessions!: IEventSession[];

  constructor(public auth: AuthService, private eventService: EventService) {}

  ngOnInit(): void {}

  searchSessions(searchTerm: string) {
    this.eventService
      .searchSessions(searchTerm)
      .subscribe((sessions: IEventSession[]) => {
        this.foundSessions = sessions;
      });
  }
}
