import { Polaganje } from './polaganje';
import { Disertacija } from './disertacija';

export interface StudentNaGodini {
    id: number
    polaganje: Polaganje
    disertacija: Disertacija
}
