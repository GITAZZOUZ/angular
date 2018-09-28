import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { State } from '../../../shared/enums/state.enum';
import { PrestationsService } from '../../services/prestations.service';
import {Router} from '@angular/router';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';


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
      private prestationService: PrestationsService,
      private router: Router
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


  public edit() {
   //   this.router.navigate();
      this.router.navigate(['/prestations/edit', this.item.id]);
    // this.prestationService.delete(this.item).then((data) => {
    //     this.prestationService.msg$.next('Prestation supprimée !');
    // }

    // );
}

}
