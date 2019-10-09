import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _990887ea = () => interopDefault(import('../client/pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _8f12d306 = () => interopDefault(import('../client/pages/authorsintown/index.vue' /* webpackChunkName: "pages/authorsintown/index" */))
const _fd163abc = () => interopDefault(import('../client/pages/connect4/index.vue' /* webpackChunkName: "pages/connect4/index" */))
const _630c45ea = () => interopDefault(import('../client/pages/cv/index.vue' /* webpackChunkName: "pages/cv/index" */))
const _3ea4cc2a = () => interopDefault(import('../client/pages/dizzyfrinks/index.vue' /* webpackChunkName: "pages/dizzyfrinks/index" */))
const _f4a24f1a = () => interopDefault(import('../client/pages/legalstuff/index.vue' /* webpackChunkName: "pages/legalstuff/index" */))
const _46c60e56 = () => interopDefault(import('../client/pages/petition/index.vue' /* webpackChunkName: "pages/petition/index" */))
const _6c7a126d = () => interopDefault(import('../client/pages/pwanderson/index.vue' /* webpackChunkName: "pages/pwanderson/index" */))
const _6c7518eb = () => interopDefault(import('../client/pages/tablepicking/index.vue' /* webpackChunkName: "pages/tablepicking/index" */))
const _6109d946 = () => interopDefault(import('../client/pages/tartanbored/index.vue' /* webpackChunkName: "pages/tartanbored/index" */))
const _2a3fd64d = () => interopDefault(import('../client/pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _990887ea,
      name: "about"
    }, {
      path: "/authorsintown",
      component: _8f12d306,
      name: "authorsintown"
    }, {
      path: "/connect4",
      component: _fd163abc,
      name: "connect4"
    }, {
      path: "/cv",
      component: _630c45ea,
      name: "cv"
    }, {
      path: "/dizzyfrinks",
      component: _3ea4cc2a,
      name: "dizzyfrinks"
    }, {
      path: "/legalstuff",
      component: _f4a24f1a,
      name: "legalstuff"
    }, {
      path: "/petition",
      component: _46c60e56,
      name: "petition"
    }, {
      path: "/pwanderson",
      component: _6c7a126d,
      name: "pwanderson"
    }, {
      path: "/tablepicking",
      component: _6c7518eb,
      name: "tablepicking"
    }, {
      path: "/tartanbored",
      component: _6109d946,
      name: "tartanbored"
    }, {
      path: "/",
      component: _2a3fd64d,
      name: "index"
    }],

    fallback: false
  })
}
