import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //   templateUrl: './app.component.html',
  template: `<app-nav></app-nav> <app-events-list></app-events-list>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-fundamentals';
}
