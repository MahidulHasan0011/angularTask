import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPosts } from '../state/posts.actions';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  showHeader = true;
  constructor(private store: Store,private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Get the current route's data
        const routeData = this.activatedRoute.snapshot.firstChild?.data;

        // Check if the route data specifies to hide the header
        this.showHeader = !(routeData && routeData?.['showHeader'] === false);
      }
    });
  }

  ngOnInit(): void {

  }

}
















