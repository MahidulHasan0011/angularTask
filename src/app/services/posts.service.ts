import { Injectable } from '@angular/core';
import { Post } from '../interfaces/blog';
import { Comment } from '../interfaces/comment';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectPostsData } from '../state/posts.selectors';
import { loadComments } from '../state/comment.action';
import { selectComments } from '../state/comment.selectors';
import * as CommentActions from '../state/comment.action';
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


  grtCommentByPostIdFromStore(postId:number){
    this.store.dispatch(loadComments({ postId: postId }));
  }

getComment(){
  this.store.select(selectComments)
}
addComentInStore( postId: number,  comment:  string, name: string | undefined, ){

  this.store.dispatch(CommentActions.addComment({ postId, body: comment, name }));

  // this.store.select(saveCommentBody{})
}

}












































