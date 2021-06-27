import { counterReducer } from "../component/counter/state/counter.reducer";
import { CounterState } from "../component/counter/state/counter.state";
import { postsReducer } from "../component/post/state/posts.reducer";
import { PostsState } from "../component/post/state/posts.state";

export interface AppState{
  counter : CounterState ;
  posts : PostsState
}

export const appReducer = {
    topCounter: counterReducer,
    topPostList : postsReducer
  }