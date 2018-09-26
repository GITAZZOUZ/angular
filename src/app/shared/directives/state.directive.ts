import { Directive, HostBinding, Input, OnChanges } from '@angular/core';
import { State } from '../enums/state.enum';
import { NgOnChangesFeature } from '@angular/core/src/render3';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
@HostBinding('class') nomClass: string;
@Input() appState: State;

   constructor() {

    //   console.log('state directive called');
    //   this.nomClass = 'state-annule';

  }
  ngOnChanges() {
      console.log(this.appState);
      this.nomClass = this.formatClass(this.appState);

  }
  private formatClass(state: State): string {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }
}
