import { CITIES } from "./cities"

export const ROUTES = {
  DOMOV: '/',
  VITAJTE: '/#vitajte',
  O_SLUZBE: '/#o-sluzbe',
  POSTUP: '/#postup',
  POTREBUJEM_POMOC_HASH: '/#potrebujem-pomoc',
  POTREBUJEM_POMOC: '/potrebujem-pomoc',
  CHCEM_POMOCT_HASH: '/#chcem-pomoct',
  KONTAKT: '/#kontakt',
  MESTO: [...CITIES.map(city => city.route)],
  VYBER_MESTA: '/mesta',
  CHCEM_POMOCT: '/chcem-pomoct',
  O_NAS: '/o-nas',
  O_NAS_HASH: '/#o-nas',
  NOT_FOUND: '*',
}