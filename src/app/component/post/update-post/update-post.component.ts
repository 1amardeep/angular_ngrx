import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { addPost, updatePost } from '../state/posts.actions';
import { getPostById } from '../state/posts.selectors';
import { Post } from '../state/posts.state';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {

  postForm: FormGroup
  post : Post

  constructor(private store: Store<AppState>,
    private route : ActivatedRoute,
    private router : Router ) { 
    
    }

  ngOnInit() {

    this.route.paramMap.subscribe((r)=>{
       const id = r.get('id');
       this.store.select(getPostById,id).subscribe((data)=>{
         console.log(data);
         this.post = data;
         this.createForm();
       })
     })
  }

  validateMessage(type) {
    const getField = this.postForm.get(type);
    if (getField.touched && !getField.valid) {
      return "Please fill the field and all mandatory length"
    }
  }

  createForm(){
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [
        Validators.required,
        Validators.minLength(6)
      ]),
      discription: new FormControl(this.post.description, [
        Validators.required,
        Validators.minLength(10)
      ])
    })
  }


  onUpdatePost() {
    if (!this.postForm.valid) { return; }
    const post: Post = {
      id : this.post.id,
      title: this.postForm.value.title,
      description: this.postForm.value.discription
    }
    this.store.dispatch(updatePost({ post }));
    this.router.navigate(['post-list']);
  }
}
