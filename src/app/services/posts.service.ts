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
 private allpost?:any[]
  posts$!: Observable<Post[]>;

  constructor(
    private httpClient: HttpClient,
    private store: Store
  ) { }



  getAllPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(API_POST + 'posts');
  }



  getCommentByPostID(id: number) {
    return this.httpClient.get<Comment[]>(API_POST + 'posts/' + id + '/comments');
  }







}




