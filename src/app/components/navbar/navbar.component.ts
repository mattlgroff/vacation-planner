import { Component, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

export const routeConstants = {
  '/ticket-calculator': 'Ticket Calculator',
  '/wait-times': 'Wait Times at the Parks',
  '/weather': 'Weather at the Castle',
};

@Component({
  selector: 'app-root',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnDestroy {
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  public routerSubscription: Subscription;
  public route = 'Vacation Planner';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private location: Location,
  ) {
    this.routerSubscription = router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const path = location.path();
        this.route = path !== '' ? routeConstants[path] : 'Vacation Planner';
      }
    });
  }

  public ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
