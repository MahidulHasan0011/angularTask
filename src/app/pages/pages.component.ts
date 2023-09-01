import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPosts } from '../state/posts.actions';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
 
  }

}






