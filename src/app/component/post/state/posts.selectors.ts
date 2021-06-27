import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "./posts.state";

export const topPostList = 'topPostList';

const getPostStates = createFeatureSelector<PostsState>(topPostList);

export const getPosts = createSelector(getPostStates,(state)=>{
    return state.posts
})

export const getPostById = createSelector(getPostStates,(state, id)=>{
    return state.posts.find((post)=> post.id === id)
})