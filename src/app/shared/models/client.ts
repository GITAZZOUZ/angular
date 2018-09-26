import { ClientI } from '../interfaces/client-i';
import { State } from '../enums/state.enum';

export class Client implements ClientI {
    id: string;
    name: string;
    email: string;
    tel: string;
    contact: string;
    state: State;
// constructor(id, type_presta, client, nb_jours?, tjm_ht?, statte?){
constructor(fields?: Partial<Client>) { // fields optionnel + partiellement corespend à Prestation
    if (fields) {
        Object.assign(this, fields);
    }
}


}

