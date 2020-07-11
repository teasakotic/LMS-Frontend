import { Dozvola } from './dozvola';
import { KorisnickaDozvola } from './korisnicka-dozvola';

export interface RegistrovaniKorisnik {
    id: number
    username: String
    lozinka: String
    email: String
    korisnickaDozvola: KorisnickaDozvola;
}
