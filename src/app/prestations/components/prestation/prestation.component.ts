import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { State } from '../../../shared/enums/state.enum';
import { PrestationsService } from '../../services/prestations.service';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
    @Input() item: Prestation;
    public states = Object.values(State);
    public faTrashAlt = faTrashAlt;
  constructor(
      private prestationService: PrestationsService
  ) {
      console.log(this.item);
  }

  ngOnInit() {
    console.log(this.item);
  }

  public changeState(e) {
    const state = e.target.value;
    this.prestationService.update(this.item, state).then((data) => {
        this.item.state = state;
        // const msg = 'Super tout est ok !';
        this.prestationService.msg$.next(`Prestation ${state}`);
    });


  }
  public delete() {
      this.prestationService.delete(this.item).then((data) => {
          this.prestationService.msg$.next('Prestation supprimée !');
      }

      );
  }
}
