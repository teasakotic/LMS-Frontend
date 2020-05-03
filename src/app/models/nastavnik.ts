import { Zvanje } from './zvanje';
import { LicniPodaci } from './licni-podaci';
import { RegistrovaniKorisnik } from './registrovani-korisnik';

export interface Nastavnik {
    id:number
    biografija: String
    zvanje: Zvanje
    licniPodaci: LicniPodaci
    registrovaniKorisnik: RegistrovaniKorisnik
}
