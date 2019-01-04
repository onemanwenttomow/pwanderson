import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _4c24f6ba = () => interopDefault(import('../client/pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _740db22c = () => interopDefault(import('../client/pages/authorsintown/index.vue' /* webpackChunkName: "pages/authorsintown/index" */))
const _395f38bc = () => interopDefault(import('../client/pages/cv/index.vue' /* webpackChunkName: "pages/cv/index" */))
const _2d34554c = () => interopDefault(import('../client/pages/dizzyfrinks/index.vue' /* webpackChunkName: "pages/dizzyfrinks/index" */))
const _1259f324 = () => interopDefault(import('../client/pages/legalstuff/index.vue' /* webpackChunkName: "pages/legalstuff/index" */))
const _0db5a5c4 = () => interopDefault(import('../client/pages/pwanderson/index.vue' /* webpackChunkName: "pages/pwanderson/index" */))
const _69c214b5 = () => interopDefault(import('../client/pages/tartanbored/index.vue' /* webpackChunkName: "pages/tartanbored/index" */))
const _5e5a803c = () => interopDefault(import('../client/pages/index.vue' /* webpackChunkName: "pages/index" */))

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
      component: _4c24f6ba,
      name: "about"
    }, {
      path: "/authorsintown",
      component: _740db22c,
      name: "authorsintown"
    }, {
      path: "/cv",
      component: _395f38bc,
      name: "cv"
    }, {
      path: "/dizzyfrinks",
      component: _2d34554c,
      name: "dizzyfrinks"
    }, {
      path: "/legalstuff",
      component: _1259f324,
      name: "legalstuff"
    }, {
      path: "/pwanderson",
      component: _0db5a5c4,
      name: "pwanderson"
    }, {
      path: "/tartanbored",
      component: _69c214b5,
      name: "tartanbored"
    }, {
      path: "/",
      component: _5e5a803c,
      name: "index"
    }],

    fallback: false
  })
}
