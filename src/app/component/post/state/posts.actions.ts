import { createAction, props } from "@ngrx/store";
import { Post } from "./posts.state";

export const ADD_POST_ACTION = '[Post pages] and post';

export const UPDATE_POST_ACTION = "[Update pages] and update";

export const DELETE_POST_ACTION = "[Delete pages] and delete";

export const addPost = createAction(ADD_POST_ACTION, props<{post : Post}>())

export const updatePost = createAction(UPDATE_POST_ACTION, props<{post : Post}>())

export const deletePost = createAction(DELETE_POST_ACTION, props<{id : string}>());