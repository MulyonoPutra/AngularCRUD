import { Component } from '@angular/core';
import {
  Event,
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  NavigationCancel,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showLoadingIndicator!: boolean;

  constructor(private router: Router) {
    this.router.events.subscribe((routeEvent: Event) => {
      if (routeEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }

      if (routeEvent instanceof NavigationEnd) {
        this.showLoadingIndicator = false;
      }

      if (
        routeEvent instanceof NavigationEnd ||
        routeEvent instanceof NavigationError ||
        routeEvent instanceof NavigationCancel
      ) {
        this.showLoadingIndicator = false;
      }
    });
  }
}
