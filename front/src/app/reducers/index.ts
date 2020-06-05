import {
  ActionReducerMap,
  MetaReducer,
  createReducer,
  on,
} from '@ngrx/store';
import { increment, decrement, reset } from '../actions/articles.actions';

export interface State {
  count: number;
}

export const initialState = 0;

const myCounterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function counterReducer(state, action) {
  return myCounterReducer(state, action);
}

export const reducers: ActionReducerMap<State> = {
  count: counterReducer,
};

export const metaReducers: MetaReducer<number>[] = [];
