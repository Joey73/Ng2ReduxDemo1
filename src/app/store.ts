import { tassign } from 'tassign';
import { INCREMENT } from './actions';

export interface IAppState {
    counter: number;
}

export const INITIAL_STATE: IAppState = {
    counter: 0
}

export function rootReducer(state: IAppState, action): IAppState{
    switch(action.type){
        case INCREMENT:
            // Make a copy of the state and return the mutation
            //return Object.assign({}, state, {state.counter + 1});
            return tassign(state, {counter: state.counter + 1});
    }
    return state;
}