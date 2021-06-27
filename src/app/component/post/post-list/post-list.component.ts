import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { deletePost } from '../state/posts.actions';
import { getPosts } from '../state/posts.selectors';
import { Post } from '../state/posts.state';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts : Observable<Post[]>;

  constructor(private store : Store<AppState>) { }

  ngOnInit() {
     this.posts = this.store.select(getPosts);
  }

  onDeletePost(id){
    if(confirm("Are you sure you want to delete ?")){
      this.store.dispatch(deletePost({id}));
    }
  }
}
