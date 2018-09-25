import { State } from '../enums/state.enum';

export interface PrestationI {
        // tslint:disable-next-line:no-unused-expression
        id: string;
        type_presta: string;
        client: string;
        nb_jours: number;
        tjm_ht: number;
        taux_tva: number;
        state: State;
}
