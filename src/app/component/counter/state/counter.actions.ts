import { createAction, props } from "@ngrx/store";

export const increment =  createAction('increment');
export const decrement =  createAction('decrement');
export const reset =  createAction('reset');

export const customAdd = createAction('customAdd',
                 props <{counter: number}>()
             );

export const updateText = createAction('updateText');