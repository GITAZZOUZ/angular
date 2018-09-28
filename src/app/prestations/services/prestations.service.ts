

import { Injectable } from '@angular/core';
import { Prestation } from '../../shared/models/prestation';
// import { fakeCollection } from './fakecollection';
import { State } from '../../shared/enums/state.enum';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private _collection$: Observable<Prestation[]>;
  private itemsCollection: AngularFirestoreCollection<Prestation>;
//   private _collection: Observable<Prestation[]>;
//   public message$: Subject<string> = new Subject();
    public msg$ = new Subject();

  constructor(
    private afs: AngularFirestore,
    private http: HttpClient
  ) {
    // this.collection = fakeCollection;
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this.collection$ = this.itemsCollection.valueChanges().pipe(
      map((data) => {
        console.log(data);
        const tab = [];
        data.forEach((res) => {
          tab.push(new Prestation(res));
        });
        return tab;
      })
    );

    // this.http.get<Prestation[]>('url_api/prestations');
    // this.collection$ = this.http.get('urlapi/prestation');
  }

  // get collection
  get collection$(): Observable<Prestation[]> {
    return this._collection$;
  }

  // set collection
  set collection$(col: Observable<Prestation[]>) {
    this._collection$ = col;
  }

  // add presta
  add(item: Prestation): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemsCollection.doc(id).set(prestation).catch((e) => {
      console.log(e);
    });
    // return this.http.post('urlapi/prestations', item);
  }


  update(item: Prestation, option?: State): Promise<any> {
    const presta  = {...item};
    console.log('8555555555555555555');
    console.log(item);


    if (option) {
      presta.state = option;
    }
    return this.itemsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });
    // return this.http.patch('urlapi/prestations/'+item.id, presta);
  }

  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
    // return this.http.delete(`urlapi/prestations/${item.id}`);
  }

  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
    // return this.http.get(`urlaspi/prestations/${id}`);
  }
}



// import { Injectable } from '@angular/core';
// import { Prestation } from '../../shared/models/prestation';
// import { fakePrestations } from './fakeprestations';
// import { State } from '../../shared/enums/state.enum';
// import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { element } from 'protractor';

// @Injectable({
//   providedIn: 'root'
// })

// export class PrestationsService {

//     private itemsCollection: AngularFirestoreCollection<Prestation>;
//        private _collection: Observable<Prestation[]>;

//   constructor(private afs: AngularFirestore) {
//     this.itemsCollection = afs.collection<Prestation>('prestations');
//     this._collection  = this.itemsCollection.valueChanges().pipe(
//         map(data => data.map((presta) => new Prestation(presta))));
//         }

//     // get collection
// get collection(): Observable<Prestation[]> {
//     return this._collection;
// }

// // get collection
// //   public getCollection(): Prestation[] {
// //      return this.collection;
// // }

//     // set collection
// set collection(col: Observable<Prestation[]>) {
//     this._collection = col;

// }
//     // get item in collection by id

//     // update collection
// public update(item: Prestation, state: State) {
// item.state = state;
// }
//     // delete collection
// // add item in collection
// public add(item: Prestation): void {
//     // this.collection.push(item);

// }
// }
