import { Fakultet } from './fakultet';
import { Nastavnik } from './nastavnik';

export interface StudijskiProgram {
    id:number,
    naziv: string,
    opis: string,
    fakultet: Fakultet;
    studijskiProgram: StudijskiProgram[];
    nastavnik: Nastavnik;
}
