import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState} from './counter.state';

export const topCounter = 'topCounter';

const getCounterState = createFeatureSelector<CounterState>(topCounter);

export const getCounter = createSelector(getCounterState,(state) =>{
    return state.counter;
})

export  const getText = createSelector(getCounterState,(state) =>{
    return state.text;
})