import { CITIES } from "./cities"

export const HASH_ROUTES = {
  O_SLUZBE: {
    pathname: '/',
    hash: '#o-sluzbe',
  },
  POSTUP: {
    pathname: '/',
    hash: '#postup',
  },
  POTREBUJEM_POMOC: {
    pathname: '/',
    hash: '#potrebujem-pomoc',
  },
  CHCEM_POMOCT: {
    pathname: '/',
    hash: '#chcem-pomoct',
  },
  KONTAKT: {
    pathname: '/',
    hash: '#kontakt',
  },
}

export const ROUTES = {
  DOMOV: '/',
  MESTA: '/mesta',
  MESTO: [...CITIES.map(city => city.route)],
  POVINNOSTI_DOBROVOLNIKA: '/povinnosti-dobrovolnika',
  O_NAS: '/o-nas',
  NOT_FOUND: '*',
}