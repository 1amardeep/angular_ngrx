export interface Post {
    id ?: string;
    title : string;
    description : string;
}

export interface PostsState {
    posts : Post[];
}


export const initialState : PostsState = {
    posts : [
        {id: '1', title : 'Sample title 1', description : 'sample description 1'},
        {id: '2', title : 'Sample title 2', description : 'sample description 2'}
    ]
}