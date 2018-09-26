import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../../../shared/models/Client';
import { State } from '../../../shared/enums/state.enum';
import { ClientsService } from '../../../prestations/services/clients.service';
// import { ClientsService } from '../../services/Clients.service';

@Component({
  selector: 'app-client',
  templateUrl: './Client.component.html',
  styleUrls: ['./Client.component.scss']
})
export class ClientComponent implements OnInit {
    @Input() item: Client;
    public states = Object.values(State);

  constructor(
      private Clientservice: ClientsService
  ) {
      console.log(this.item);
  }

  ngOnInit() {
    console.log(this.item);
  }

  public changeState(e) {
    const state = e.target.value;
    this.Clientservice.update(this.item, state);


  }
}
