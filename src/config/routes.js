import { CITIES } from "./cities"

export const ROUTES = {
  DOMOV: '/',
  VITAJTE: '/#vitajte',
  O_SLUZBE: '/#o-sluzbe',
  POSTUP: '/#postup',
  POTREBUJEM_POMOC_HASH: '/#potrebujem-pomoc',
  POTREBUJEM_POMOC: [
    CITIES.POPRAD,
    CITIES.TRNAVA,
    CITIES.HUMENNE,
    CITIES.PIESTANY,
  ],
  CHCEM_POMOCT_HASH: '/#chcem-pomoct',
  CHCEM_POMOCT: '/chcem-pomoct',
  VYBERTE_VASE_MESTO: '/vyberte-vase-mesto',
  KONTAKT: '/#kontakt',
  O_NAS: '/o-nas',
  O_NAS_HASH: '/#o-nas',
  NOT_FOUND: '*',
}

const makeId = hashRoute => hashRoute.replace('#', '').replace('/', '');

export const IDS = {
  VITAJTE: makeId(ROUTES.VITAJTE),
  O_SLUZBE: makeId(ROUTES.O_SLUZBE),
  POSTUP: makeId(ROUTES.POSTUP),
  POTREBUJEM_POMOC: makeId(ROUTES.POTREBUJEM_POMOC_HASH),
  CHCEM_POMOCT: makeId(ROUTES.CHCEM_POMOCT_HASH),
  KONTAKT: makeId(ROUTES.KONTAKT),
  O_NAS: makeId(ROUTES.O_NAS_HASH),
}

export const TITLES = {
  O_SLUZBE: "O službe",
  POSTUP: "PostuP",
  POTREBUJEM_POMOC: "Potrebujem Pomoc",
  CHCEM_POMOCT: "Chcem Pomôcť",
  KONTAKT: "Kontakt",
  O_NAS: "O nás",
}