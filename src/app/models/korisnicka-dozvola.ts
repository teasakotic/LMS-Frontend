import { RegistrovaniKorisnik } from './registrovani-korisnik';
import { Dozvola } from './dozvola';

export interface KorisnickaDozvola { 
  id: number;
  registrovaniKorisnik: RegistrovaniKorisnik;
  dozvola: Dozvola; 
}
