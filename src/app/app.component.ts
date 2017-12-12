import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux'
import { IAppState } from './store';
import { INCREMENT } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @select('counter') count: number;

  constructor(private ngRedux: NgRedux<IAppState>){
  }

  increment(){
    /*
      Instead you dispatch an action (Action -> Store -> Reducer).
      The reducer will give back a new state to the store.
      The store will update the state internally.
    */
    this.ngRedux.dispatch({type: INCREMENT});  // pass an action object with the type    
  }
}
