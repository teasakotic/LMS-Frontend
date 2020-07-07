import { Dozvola } from './dozvola';

export interface RegistrovaniKorisnik {
    id: number
    username: String
    lozinka: String
    email: String
    dozvola: Dozvola
}
