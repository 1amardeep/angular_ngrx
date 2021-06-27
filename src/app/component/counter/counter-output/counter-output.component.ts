import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { getCounter } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit{

  // @Input() counter :  number;
  counter : number;
  counterSubscription : Subscription;
  //counterAsync$ : Observable<CounterState>;

  constructor(private store : Store<AppState>) { }

  ngOnInit() {
   this.counterSubscription = this.store.select(getCounter).subscribe((data) => {
      console.log('counter called');
      this.counter = data;
    })
    //  this.counterAsync$ = this.store.select('counter$');

  }

  // ngOnDestroy(): void {
  //   if(this.counterSubscription){
  //     this.counterSubscription.unsubscribe();
  //   }
  // }

}
