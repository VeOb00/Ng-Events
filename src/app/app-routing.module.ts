import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './errors/error404/error404.component';
import { EventsListResolverService } from './events/shared/events-list-resolver.service';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { CreateSessionComponent } from './events/event-details/create-session/create-session.component';
import { EventResolver } from './events/shared/event.resolver';

const routes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventsListResolverService },
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    resolve: { event: EventResolver },
  },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: `./user/user.module#UserModule` },
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
