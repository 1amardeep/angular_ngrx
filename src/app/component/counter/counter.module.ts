import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Route, RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { CounterButtonsComponent } from "./counter-buttons/counter-buttons.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterComponent } from "./counter/counter.component";
import { CustomCounterComponent } from "./custom-counter/custom-counter.component";
import { counterReducer } from "./state/counter.reducer";
import { topCounter } from "./state/counter.selectors";


const route : Routes = [{
    path: '',
    component: CounterComponent
}]


@NgModule({
    declarations: [
        CounterComponent,
        CounterOutputComponent,
        CounterButtonsComponent,
        CustomCounterComponent,
    ],
   imports: [ CommonModule , 
           FormsModule, 
           StoreModule.forFeature(topCounter,counterReducer),
           RouterModule.forChild(route)]
})

export class CounterModule {

}