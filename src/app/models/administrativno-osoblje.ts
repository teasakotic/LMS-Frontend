import { RegistrovaniKorisnik } from './registrovani-korisnik';
import { LicniPodaci } from './licni-podaci';

export interface AdministrativnoOsoblje {
    id: number
    registrovaniKorisnik: RegistrovaniKorisnik,
    licniPodaci: LicniPodaci
}
