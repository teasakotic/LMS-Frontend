import { ActivatedRouteSnapshot } from '@angular/router';

export interface Univerzitet {
    id: number,
    naziv: String,
    datumOsnivanja: String, //FIXME: Will be date or string
    opis: String,
    adresa: String, // FIXME: Adresa will be interface[]
    emailUniverziteta: String // FIXME: Email will be interface[]
    telefonUniverziteta: String // FIXME: Telefon will be interface[]
}
