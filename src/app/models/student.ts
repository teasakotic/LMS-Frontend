import { RegistrovaniKorisnik } from './registrovani-korisnik';
import { LicniPodaci } from './licni-podaci';
import { Adresa } from './adresa';
import { PohadjanjePredmeta } from './pohadjanje-predmeta';

export interface Student {
    id: number
    registrovaniKorisnik: RegistrovaniKorisnik
    licniPodaci: LicniPodaci
    adresa: Adresa
    pohadjanjePredmeta: PohadjanjePredmeta[]
}
