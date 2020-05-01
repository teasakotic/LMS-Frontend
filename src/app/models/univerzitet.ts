import { Fakultet } from './fakultet';
import { Email } from './email';
import { Telefon } from './telefon';
import { Adresa } from './adresa';
import { Nastavnik } from './nastavnik';

export interface Univerzitet {
    id: number;
    naziv: String;
    datumOsnivanja: Date;
    opis: String;
    rektor: Nastavnik;
    adresa: Adresa;
    emailUniverziteta: Email[];
    telefonUniverziteta: Telefon[];
    fakulteti: Fakultet[];
}
