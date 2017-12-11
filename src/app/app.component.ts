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
  @select('counter') count: number; // select a slice of the store as an observable
  /*
  @select(['messaging', 'newMessages']) newMessages;
  @select((s: IAppState) => s.messaging.newMessages) newMessagesCount;
  */

  constructor(private ngRedux: NgRedux<IAppState>){
    /*
    var subscription = ngRedux.subscribe(() => {
      //console.log(ngRedux.getState());
      var store = ngRedux.getState();
      this.counter = store.counter;
    });
    */
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
