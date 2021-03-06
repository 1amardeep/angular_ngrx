import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../state/posts.actions';
import { Post } from '../state/posts.state';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  postForm: FormGroup

  constructor(private store : Store<AppState>) { }

  ngOnInit() {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
        ]),
        discription : new FormControl(null, [
          Validators.required, 
          Validators.minLength(10)
        ])
    })
  }

  onAddPost(){
    if(!this.postForm.valid){return;}
    const post : Post = {
      title :  this.postForm.value.title ,
      description : this.postForm.value.discription
    }
    this.store.dispatch(addPost({post}));
  }

  validateMessage(type){
     const getField = this.postForm.get(type);
     if(getField.touched && !getField.valid ){
         return "Please fill the field and all mandatory length"
     }
  }



}
