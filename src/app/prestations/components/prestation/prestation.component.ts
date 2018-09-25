import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { State } from '../../../shared/enums/state.enum';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
    @Input() item: Prestation;
    public states = Object.values(State);
  constructor() {
      console.log(this.item);
  }

  ngOnInit() {
    console.log(this.item);
  }

}
