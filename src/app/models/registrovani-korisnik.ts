import { Dozvola } from './dozvola';

export interface RegistrovaniKorisnik {
    id: number
    korisnickoIme: String
    lozinka: String
    email: String
    dozvola: Dozvola
}
