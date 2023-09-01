import { Injectable } from '@angular/core';
import { Post } from '../interfaces/blog';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectPostsData } from '../state/posts.selectors';

const API_POST = environment.apiBaseLink ;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts$!: Observable<Post[]>;

  constructor(
    private httpClient: HttpClient,
    private store: Store
  ) { }


  getAllPosts() {
    return this.httpClient.get<{data: Post[]}>(API_POST + 'posts');
  }

  getPostWIthPAgination(page?:number, limite?:number){

    // if this route with same page and same limite hitted the get data from state store
    // this.posts$ = this.store.pipe(select(selectPostsData));
    // else cale api
    // this.httpClient.get<{data: Post[]}>(API_POST + 'posts' + '?_page=' + page + '&_limit=' + limite);




  }


}
