import { CITIES } from "./cities"

export const ROUTES = {
  DOMOV: '/',
  VITAJTE: '/#vitajte',
  O_SLUZBE: '/#o-sluzbe',
  POSTUP: '/#postup',
  POTREBUJEM_POMOC: '/#potrebujem-pomoc',
  CHCEM_POMOCT: '/#chcem-pomoct',
  KONTAKT: '/#kontakt',
  MESTA: '/mesta',
  MESTO: [...CITIES.map(city => city.route)],
  POVINNOSTI_DOBROVOLNIKA: '/povinnosti-dobrovolnika',
  O_NAS: '/o-nas',
  NOT_FOUND: '*',
}