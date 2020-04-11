import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import {filter, map, shareReplay} from 'rxjs/operators';
import { NavigationEnd, Router} from '@angular/router';

interface NavLink {
  label: string;
  path: string;
  fullMatch?: boolean;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  currentRoute = '/';

  navLinks: NavLink[] = [
    {
      label: 'Home',
      path: '/',
      fullMatch: true
    },
    {
      label: 'Users',
      path: '/users'
    }
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router) {}

  ngOnInit(): void {
    this.router.events
    .pipe(
      filter(x => x instanceof NavigationEnd)
    )
    .subscribe(_ => {
      this.currentRoute = this.router.url;
    });
  }
}
