import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { customAdd, updateText } from '../state/counter.actions';
import { getText } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss']
})
export class CustomCounterComponent implements OnInit {

  value : number;
  title : string;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(getText).subscribe((obj)=>{
      console.log('text called');
      this.title = obj;
    })
  }

  addNumber(){
       this.store.dispatch(customAdd({counter : +this.value}));
  }

  upDateText(){
    this.store.dispatch(updateText());
  }

}
