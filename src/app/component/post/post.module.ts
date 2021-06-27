import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { AddPostComponent } from "./add-post/add-post.component";
import { PostListComponent } from "./post-list/post-list.component";
import { postsReducer } from "./state/posts.reducer";
import { topPostList } from "./state/posts.selectors";
import { UpdatePostComponent } from "./update-post/update-post.component";

const route : Routes = [
    {
        path : '',
        component : PostListComponent,
        children: [
            {
              path:'add',
              component : AddPostComponent
            },
            {
              path : 'update/:id',
              component : UpdatePostComponent
            }
      
          ]
    }
    
]

@NgModule({
    declarations: [
        PostListComponent,
        AddPostComponent,
        UpdatePostComponent
    ],
    imports: [
        CommonModule, ReactiveFormsModule, RouterModule.forChild(route),
        StoreModule.forFeature(topPostList,postsReducer)
    ]
})

export class PostModule{

}