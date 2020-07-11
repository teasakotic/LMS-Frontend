import { LicniPodaci } from './licni-podaci';
import { RegistrovaniKorisnik } from './registrovani-korisnik';
import { Adresa } from './adresa';

export interface Nastavnik {
  id: number;
  biografija: String;
  licniPodaci: LicniPodaci;
  registrovaniKorisnik: RegistrovaniKorisnik;
  adresa: Adresa;
  obrisan: boolean;
}
