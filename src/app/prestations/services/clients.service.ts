import { Injectable } from '@angular/core';
import { Client } from '../../shared/models/Client';
import { fakeClients } from './fakeClients';
import { State } from '../../shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

    private _collection: Client[];

  constructor() {
    //  this.setCollection(fakeClients);
    this._collection = fakeClients;
}
    // get collection
get collection(): Client[] {
    return this._collection;
}

// get collection
//   public getCollection(): Client[] {
//      return this.collection;
// }

    // set collection
set collection(col: Client[]) {
    this._collection = col;

}
    // get item in collection by id

    // update collection
public update(item: Client, state: State) {
item.state = state;
}
    // delete collection


}
