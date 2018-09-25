import { PrestationI } from '../interfaces/prestation-i';
import { State } from '../enums/state.enum';

export class Prestation implements PrestationI {
    id: string;
    type_presta: string;
    client: string;
    nb_jours = 0;
    tjm_ht = 0;
    taux_tva = 20;
    state = State.OPTION;
// constructor(id, type_presta, client, nb_jours?, tjm_ht?, statte?){
constructor(fields?: Partial<Prestation>) { // fields optionnel + partiellement corespend à Prestation
    if (fields) {
        Object.assign(this, fields);
    }
}

public total_HT() {
    console.log('total HT called');

    return this.tjm_ht * this.nb_jours;
}
public total_TTC(tva?: number) {
    console.log('total TTH called');

    if (!tva) {
        return this.total_HT() + (1 + this.total_HT() / 100);
    }
    if (tva <= 0) {
        return this.total_HT();
    }
    return this.total_HT() + (1 + tva  / 100);
}

}

