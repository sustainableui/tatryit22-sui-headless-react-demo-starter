import { CITIES } from "./cities"

export const ROUTES = {
  DOMOV: '/',
  VITAJTE: '/#vitajte',
  O_SLUZBE: '/#o-sluzbe',
  POSTUP: '/#postup',
  POTREBUJEM_POMOC_HASH: '/#potrebujem-pomoc',
  POTREBUJEM_POMOC: [
    CITIES.POPRAD.ROUTE,
    CITIES.HUMENNE.ROUTE,
    CITIES.PIESTANY.ROUTE,
    // CITIES.TRNAVA.ROUTE,
  ],
  CHCEM_POMOCT_HASH: '/#chcem-pomoct',
  CHCEM_POMOCT: '/chcem-pomoct',
  VYBERTE_VASE_MESTO: '/vyberte-vase-mesto',
  KONTAKT: '/#kontakt',
  O_NAS: '/o-nas',
  O_NAS_PAGE_HASH: '/o-nas#vseobecne',
  O_NAS_HASH: '/#o-nas',
  TEAM_HASH: `/o-nas#team`,
  PODME_SA_ROZPRAVAT: '/o-nas#podme-sa-rozpravat',
  NOT_FOUND: '*',
}

export const HASHES = {
  VSEOBECNE: '#vseobecne',
  TEAM: "#team",
  PODME_SA_ROZPRAVAT: '#podme-sa-rozpravat',
}

const getSectionIdFromHashRoute = hashRoute => hashRoute.replace('#', '').replace('/', '');

export const SECTION_IDS = {
  VITAJTE: getSectionIdFromHashRoute(ROUTES.VITAJTE),
  O_SLUZBE: getSectionIdFromHashRoute(ROUTES.O_SLUZBE),
  POSTUP: getSectionIdFromHashRoute(ROUTES.POSTUP),
  POTREBUJEM_POMOC: getSectionIdFromHashRoute(ROUTES.POTREBUJEM_POMOC_HASH),
  CHCEM_POMOCT: getSectionIdFromHashRoute(ROUTES.CHCEM_POMOCT_HASH),
  KONTAKT: getSectionIdFromHashRoute(ROUTES.KONTAKT),
  O_NAS_HASH: getSectionIdFromHashRoute(ROUTES.O_NAS_HASH),
  O_NAS: getSectionIdFromHashRoute(HASHES.VSEOBECNE),
  TEAM: getSectionIdFromHashRoute(HASHES.TEAM),
  PODME_SA_ROZPRAVAT: getSectionIdFromHashRoute(HASHES.PODME_SA_ROZPRAVAT),
}

export const TITLES = {
  O_SLUZBE: "O službe",
  POSTUP: "PostuP",
  POTREBUJEM_POMOC: "Potrebujem Pomoc",
  CHCEM_POMOCT: "Chcem Pomôcť",
  KONTAKT: "Kontakt",
  O_NAS: "O nás",
}