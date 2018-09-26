import { State } from '../enums/state.enum';
export interface ClientI {
    id: string;
    name: string;
    email: string;
    tel: string;
    contact: string;
    state: State;
}
