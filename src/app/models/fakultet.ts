import { Univerzitet } from './univerzitet';
import { Telefon } from './telefon';
import { Email } from './email';
import { Adresa } from './adresa';
import { StudijskiProgram } from './studijski-program';

export interface Fakultet {
    id: number,
    naziv: String,
    opis: String
    univerzitet: Univerzitet;
    studijskiProgram: StudijskiProgram[];
    telefonFakulteta: Telefon[];
    emailFakulteta: Email[];
    adresa: Adresa;
}
