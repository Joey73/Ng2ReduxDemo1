import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux'
import { IAppState } from './store';
import { INCREMENT } from './actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number = 0;

  constructor(private ngRedux: NgRedux<IAppState>){

  }

  increment(){
    // this.counter++; // this is how you usually would do it
    
    /*
      Instead you dispatch an action (Action -> Store -> Reducer).
      The reducer will give back a new state to the store.
      The store will update the state internally.
    */
    this.ngRedux.dispatch({type: INCREMENT});  // pass an action object with the type    
    
  }
}
