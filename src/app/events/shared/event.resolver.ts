import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IEvent } from './event';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root',
})
export class EventResolver implements Resolve<IEvent> {
  constructor(private eventService: EventService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IEvent> {
    return this.eventService.getEvent(route.params['id']);
  }
}
