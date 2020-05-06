import { Zvanje } from './zvanje';
import { LicniPodaci } from './licni-podaci';
import { RegistrovaniKorisnik } from './registrovani-korisnik';
import { NastavnikNaRealizaciji } from './nastavnik-na-realizaciji';
import { Adresa } from './adresa';
import { Fakultet } from './fakultet';
import { StudijskiProgram } from './studijski-program';
import { Univerzitet } from './univerzitet';

export interface Nastavnik {
    id:number
    biografija: String
    zvanje: Zvanje
    licniPodaci: LicniPodaci
    registrovaniKorisnik: RegistrovaniKorisnik
    nastavnikNaRealizaciji: NastavnikNaRealizaciji
    adresa: Adresa
    fakultet: Fakultet
    studijskiProgram: StudijskiProgram
    univerzitet: Univerzitet
}
