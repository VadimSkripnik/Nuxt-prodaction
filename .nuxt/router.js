import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _47cdd870 = () => interopDefault(import('..\\pages\\adresnietablichkione.vue' /* webpackChunkName: "pages/adresnietablichkione" */))
const _81005e9a = () => interopDefault(import('..\\pages\\adressnietablichki.vue' /* webpackChunkName: "pages/adressnietablichki" */))
const _e8a39aea = () => interopDefault(import('..\\pages\\besedki.vue' /* webpackChunkName: "pages/besedki" */))
const _71607cf2 = () => interopDefault(import('..\\pages\\besedkiteplici.vue' /* webpackChunkName: "pages/besedkiteplici" */))
const _e7906702 = () => interopDefault(import('..\\pages\\bytilnici.vue' /* webpackChunkName: "pages/bytilnici" */))
const _0576f791 = () => interopDefault(import('..\\pages\\carts.vue' /* webpackChunkName: "pages/carts" */))
const _496ff110 = () => interopDefault(import('..\\pages\\cvetilniki.vue' /* webpackChunkName: "pages/cvetilniki" */))
const _2dd15cbe = () => interopDefault(import('..\\pages\\cvetochnicy.vue' /* webpackChunkName: "pages/cvetochnicy" */))
const _28df2499 = () => interopDefault(import('..\\pages\\cyveniry.vue' /* webpackChunkName: "pages/cyveniry" */))
const _b0805454 = () => interopDefault(import('..\\pages\\dekorativnaymebel.vue' /* webpackChunkName: "pages/dekorativnaymebel" */))
const _1637d827 = () => interopDefault(import('..\\pages\\divanikresla.vue' /* webpackChunkName: "pages/divanikresla" */))
const _f3ba694a = () => interopDefault(import('..\\pages\\dlagivotnix.vue' /* webpackChunkName: "pages/dlagivotnix" */))
const _43d6f8ec = () => interopDefault(import('..\\pages\\fryktovnicy.vue' /* webpackChunkName: "pages/fryktovnicy" */))
const _960502f4 = () => interopDefault(import('..\\pages\\itagerka.vue' /* webpackChunkName: "pages/itagerka" */))
const _208a6145 = () => interopDefault(import('..\\pages\\kacheli.vue' /* webpackChunkName: "pages/kacheli" */))
const _2742f431 = () => interopDefault(import('..\\pages\\kachelione.vue' /* webpackChunkName: "pages/kachelione" */))
const _0d8311c6 = () => interopDefault(import('..\\pages\\kaminienabory.vue' /* webpackChunkName: "pages/kaminienabory" */))
const _687abc3c = () => interopDefault(import('..\\pages\\klychnici.vue' /* webpackChunkName: "pages/klychnici" */))
const _b226d158 = () => interopDefault(import('..\\pages\\knignici.vue' /* webpackChunkName: "pages/knignici" */))
const _6cb2c0f6 = () => interopDefault(import('..\\pages\\kontakts.vue' /* webpackChunkName: "pages/kontakts" */))
const _da2589fe = () => interopDefault(import('..\\pages\\kovaniedveri.vue' /* webpackChunkName: "pages/kovaniedveri" */))
const _6386269b = () => interopDefault(import('..\\pages\\kozyrky.vue' /* webpackChunkName: "pages/kozyrky" */))
const _59feef74 = () => interopDefault(import('..\\pages\\kreslokachalka.vue' /* webpackChunkName: "pages/kreslokachalka" */))
const _34fe6486 = () => interopDefault(import('..\\pages\\krovati.vue' /* webpackChunkName: "pages/krovati" */))
const _45aa167a = () => interopDefault(import('..\\pages\\kyxonienabori.vue' /* webpackChunkName: "pages/kyxonienabori" */))
const _00e17a06 = () => interopDefault(import('..\\pages\\lavki.vue' /* webpackChunkName: "pages/lavki" */))
const _22c34e63 = () => interopDefault(import('..\\pages\\legaki.vue' /* webpackChunkName: "pages/legaki" */))
const _0e9d6222 = () => interopDefault(import('..\\pages\\lestnicaogragdeniy.vue' /* webpackChunkName: "pages/lestnicaogragdeniy" */))
const _453f4b86 = () => interopDefault(import('..\\pages\\lestnicaogragdeniydladoma.vue' /* webpackChunkName: "pages/lestnicaogragdeniydladoma" */))
const _f0d997f6 = () => interopDefault(import('..\\pages\\lestnicaogragdeniydlaylici.vue' /* webpackChunkName: "pages/lestnicaogragdeniydlaylici" */))
const _ded841b2 = () => interopDefault(import('..\\pages\\lystry.vue' /* webpackChunkName: "pages/lystry" */))
const _6dca71ef = () => interopDefault(import('..\\pages\\mangali.vue' /* webpackChunkName: "pages/mangali" */))
const _27298826 = () => interopDefault(import('..\\pages\\naborydlykamina.vue' /* webpackChunkName: "pages/naborydlykamina" */))
const _a1e722b0 = () => interopDefault(import('..\\pages\\nastenievechalki.vue' /* webpackChunkName: "pages/nastenievechalki" */))
const _9c9470ac = () => interopDefault(import('..\\pages\\navesi.vue' /* webpackChunkName: "pages/navesi" */))
const _f8d828fa = () => interopDefault(import('..\\pages\\navesykozyrki.vue' /* webpackChunkName: "pages/navesykozyrki" */))
const _0f654ccc = () => interopDefault(import('..\\pages\\ogragdeniyzabori.vue' /* webpackChunkName: "pages/ogragdeniyzabori" */))
const _ce2adb24 = () => interopDefault(import('..\\pages\\okonierechetki.vue' /* webpackChunkName: "pages/okonierechetki" */))
const _05214baa = () => interopDefault(import('..\\pages\\pergolyvinogradniki.vue' /* webpackChunkName: "pages/pergolyvinogradniki" */))
const _2cf5bf2c = () => interopDefault(import('..\\pages\\pochtoviychik.vue' /* webpackChunkName: "pages/pochtoviychik" */))
const _5d6978c6 = () => interopDefault(import('..\\pages\\podcvechniki.vue' /* webpackChunkName: "pages/podcvechniki" */))
const _08ea5354 = () => interopDefault(import('..\\pages\\podstavkipodvany.vue' /* webpackChunkName: "pages/podstavkipodvany" */))
const _a232e1d4 = () => interopDefault(import('..\\pages\\polkanastenay.vue' /* webpackChunkName: "pages/polkanastenay" */))
const _6edb27c8 = () => interopDefault(import('..\\pages\\pyfiki.vue' /* webpackChunkName: "pages/pyfiki" */))
const _1126d72a = () => interopDefault(import('..\\pages\\raznoe.vue' /* webpackChunkName: "pages/raznoe" */))
const _0f18ece0 = () => interopDefault(import('..\\pages\\readme.vue' /* webpackChunkName: "pages/readme" */))
const _bb5750ae = () => interopDefault(import('..\\pages\\rechetkidlykaminov.vue' /* webpackChunkName: "pages/rechetkidlykaminov" */))
const _740578be = () => interopDefault(import('..\\pages\\rityalnieogragdeniy.vue' /* webpackChunkName: "pages/rityalnieogragdeniy" */))
const _449b8c7c = () => interopDefault(import('..\\pages\\rychki.vue' /* webpackChunkName: "pages/rychki" */))
const _118896f2 = () => interopDefault(import('..\\pages\\stolby.vue' /* webpackChunkName: "pages/stolby" */))
const _528dda69 = () => interopDefault(import('..\\pages\\stoli.vue' /* webpackChunkName: "pages/stoli" */))
const _646da303 = () => interopDefault(import('..\\pages\\styly.vue' /* webpackChunkName: "pages/styly" */))
const _e8f6d00e = () => interopDefault(import('..\\pages\\tabyretki.vue' /* webpackChunkName: "pages/tabyretki" */))
const _18f61480 = () => interopDefault(import('..\\pages\\teplici.vue' /* webpackChunkName: "pages/teplici" */))
const _1278456c = () => interopDefault(import('..\\pages\\tyaletnistolik.vue' /* webpackChunkName: "pages/tyaletnistolik" */))
const _5d818e00 = () => interopDefault(import('..\\pages\\tymbapodobyv.vue' /* webpackChunkName: "pages/tymbapodobyv" */))
const _000b3d62 = () => interopDefault(import('..\\pages\\vechalki.vue' /* webpackChunkName: "pages/vechalki" */))
const _e86c4218 = () => interopDefault(import('..\\pages\\voliery.vue' /* webpackChunkName: "pages/voliery" */))
const _1d199f21 = () => interopDefault(import('..\\pages\\vorotaone.vue' /* webpackChunkName: "pages/vorotaone" */))
const _27da8b0f = () => interopDefault(import('..\\pages\\vorotatoo.vue' /* webpackChunkName: "pages/vorotatoo" */))
const _dae2ed74 = () => interopDefault(import('..\\pages\\yrni.vue' /* webpackChunkName: "pages/yrni" */))
const _829a04a0 = () => interopDefault(import('..\\pages\\zerkala.vue' /* webpackChunkName: "pages/zerkala" */))
const _68b33df6 = () => interopDefault(import('..\\pages\\zontovnicy.vue' /* webpackChunkName: "pages/zontovnicy" */))
const _c8dddd50 = () => interopDefault(import('..\\pages\\post\\_id.vue' /* webpackChunkName: "pages/post/_id" */))
const _70d140e0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/adresnietablichkione",
    component: _47cdd870,
    name: "adresnietablichkione"
  }, {
    path: "/adressnietablichki",
    component: _81005e9a,
    name: "adressnietablichki"
  }, {
    path: "/besedki",
    component: _e8a39aea,
    name: "besedki"
  }, {
    path: "/besedkiteplici",
    component: _71607cf2,
    name: "besedkiteplici"
  }, {
    path: "/bytilnici",
    component: _e7906702,
    name: "bytilnici"
  }, {
    path: "/carts",
    component: _0576f791,
    name: "carts"
  }, {
    path: "/cvetilniki",
    component: _496ff110,
    name: "cvetilniki"
  }, {
    path: "/cvetochnicy",
    component: _2dd15cbe,
    name: "cvetochnicy"
  }, {
    path: "/cyveniry",
    component: _28df2499,
    name: "cyveniry"
  }, {
    path: "/dekorativnaymebel",
    component: _b0805454,
    name: "dekorativnaymebel"
  }, {
    path: "/divanikresla",
    component: _1637d827,
    name: "divanikresla"
  }, {
    path: "/dlagivotnix",
    component: _f3ba694a,
    name: "dlagivotnix"
  }, {
    path: "/fryktovnicy",
    component: _43d6f8ec,
    name: "fryktovnicy"
  }, {
    path: "/itagerka",
    component: _960502f4,
    name: "itagerka"
  }, {
    path: "/kacheli",
    component: _208a6145,
    name: "kacheli"
  }, {
    path: "/kachelione",
    component: _2742f431,
    name: "kachelione"
  }, {
    path: "/kaminienabory",
    component: _0d8311c6,
    name: "kaminienabory"
  }, {
    path: "/klychnici",
    component: _687abc3c,
    name: "klychnici"
  }, {
    path: "/knignici",
    component: _b226d158,
    name: "knignici"
  }, {
    path: "/kontakts",
    component: _6cb2c0f6,
    name: "kontakts"
  }, {
    path: "/kovaniedveri",
    component: _da2589fe,
    name: "kovaniedveri"
  }, {
    path: "/kozyrky",
    component: _6386269b,
    name: "kozyrky"
  }, {
    path: "/kreslokachalka",
    component: _59feef74,
    name: "kreslokachalka"
  }, {
    path: "/krovati",
    component: _34fe6486,
    name: "krovati"
  }, {
    path: "/kyxonienabori",
    component: _45aa167a,
    name: "kyxonienabori"
  }, {
    path: "/lavki",
    component: _00e17a06,
    name: "lavki"
  }, {
    path: "/legaki",
    component: _22c34e63,
    name: "legaki"
  }, {
    path: "/lestnicaogragdeniy",
    component: _0e9d6222,
    name: "lestnicaogragdeniy"
  }, {
    path: "/lestnicaogragdeniydladoma",
    component: _453f4b86,
    name: "lestnicaogragdeniydladoma"
  }, {
    path: "/lestnicaogragdeniydlaylici",
    component: _f0d997f6,
    name: "lestnicaogragdeniydlaylici"
  }, {
    path: "/lystry",
    component: _ded841b2,
    name: "lystry"
  }, {
    path: "/mangali",
    component: _6dca71ef,
    name: "mangali"
  }, {
    path: "/naborydlykamina",
    component: _27298826,
    name: "naborydlykamina"
  }, {
    path: "/nastenievechalki",
    component: _a1e722b0,
    name: "nastenievechalki"
  }, {
    path: "/navesi",
    component: _9c9470ac,
    name: "navesi"
  }, {
    path: "/navesykozyrki",
    component: _f8d828fa,
    name: "navesykozyrki"
  }, {
    path: "/ogragdeniyzabori",
    component: _0f654ccc,
    name: "ogragdeniyzabori"
  }, {
    path: "/okonierechetki",
    component: _ce2adb24,
    name: "okonierechetki"
  }, {
    path: "/pergolyvinogradniki",
    component: _05214baa,
    name: "pergolyvinogradniki"
  }, {
    path: "/pochtoviychik",
    component: _2cf5bf2c,
    name: "pochtoviychik"
  }, {
    path: "/podcvechniki",
    component: _5d6978c6,
    name: "podcvechniki"
  }, {
    path: "/podstavkipodvany",
    component: _08ea5354,
    name: "podstavkipodvany"
  }, {
    path: "/polkanastenay",
    component: _a232e1d4,
    name: "polkanastenay"
  }, {
    path: "/pyfiki",
    component: _6edb27c8,
    name: "pyfiki"
  }, {
    path: "/raznoe",
    component: _1126d72a,
    name: "raznoe"
  }, {
    path: "/readme",
    component: _0f18ece0,
    name: "readme"
  }, {
    path: "/rechetkidlykaminov",
    component: _bb5750ae,
    name: "rechetkidlykaminov"
  }, {
    path: "/rityalnieogragdeniy",
    component: _740578be,
    name: "rityalnieogragdeniy"
  }, {
    path: "/rychki",
    component: _449b8c7c,
    name: "rychki"
  }, {
    path: "/stolby",
    component: _118896f2,
    name: "stolby"
  }, {
    path: "/stoli",
    component: _528dda69,
    name: "stoli"
  }, {
    path: "/styly",
    component: _646da303,
    name: "styly"
  }, {
    path: "/tabyretki",
    component: _e8f6d00e,
    name: "tabyretki"
  }, {
    path: "/teplici",
    component: _18f61480,
    name: "teplici"
  }, {
    path: "/tyaletnistolik",
    component: _1278456c,
    name: "tyaletnistolik"
  }, {
    path: "/tymbapodobyv",
    component: _5d818e00,
    name: "tymbapodobyv"
  }, {
    path: "/vechalki",
    component: _000b3d62,
    name: "vechalki"
  }, {
    path: "/voliery",
    component: _e86c4218,
    name: "voliery"
  }, {
    path: "/vorotaone",
    component: _1d199f21,
    name: "vorotaone"
  }, {
    path: "/vorotatoo",
    component: _27da8b0f,
    name: "vorotatoo"
  }, {
    path: "/yrni",
    component: _dae2ed74,
    name: "yrni"
  }, {
    path: "/zerkala",
    component: _829a04a0,
    name: "zerkala"
  }, {
    path: "/zontovnicy",
    component: _68b33df6,
    name: "zontovnicy"
  }, {
    path: "/post/:id?",
    component: _c8dddd50,
    name: "post-id"
  }, {
    path: "/",
    component: _70d140e0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
