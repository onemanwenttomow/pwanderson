(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{138:function(t,n,a){var e=a(163);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,a(41).default)("4d5db11e",e,!0,{})},162:function(t,n,a){"use strict";var e=a(138);a.n(e).a},163:function(t,n,a){(t.exports=a(40)(!1)).push([t.i,'body[data-v-6a5d09be] {\n}\n#app[data-v-6a5d09be] {\n  margin: 0;\n  font-family: "Lucida Console", Monaco, monospace;\n  background-color: #f85f73;\n  display: flex;\n  height: 100vh;\n}\n.about[data-v-6a5d09be] {\n  background-color: #283c63;\n  color: #fbe8d3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10vw;\n  cursor: context-menu;\n}\n.projects[data-v-6a5d09be] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10vw;\n  color: #283c63;\n}\n#name[data-v-6a5d09be] {\n  padding: 10px 0 5px 0;\n}\n#title[data-v-6a5d09be] {\n  padding: 0 0 10px 0;\n}\nh1[data-v-6a5d09be] {\n  text-shadow: 2px 4px 3px rgba(0, 0, 0, .3);\n}\na[data-v-6a5d09be] {\n  color: inherit;\n  text-decoration: inherit;\n}\n#stack[data-v-6a5d09be] {\n  padding-bottom: 10px;\n}\n#marketing[data-v-6a5d09be] {\n  padding-bottom: 5px;\n}\nh1 > span[data-v-6a5d09be] {\n  color: #fbe8d3;\n  transition: .5s;\n}\ni[data-v-6a5d09be] {\n  color: #fbe8d3;\n  text-shadow: 2px 4px 3px rgba(0, 0, 0, .3);\n  transition: .5s;\n}\ni[data-v-6a5d09be]:hover {\n  color: #f85f73;\n}\nh1 > span[data-v-6a5d09be]:hover {\n  color: #f85f73;\n  cursor: context-menu;\n}\nli[data-v-6a5d09be] {\n  color: #283c63;\n  transition: .5s;\n}\nli[data-v-6a5d09be]:hover {\n  color: #fbe8d3;\n  text-shadow: 2px 4px 3px rgba(0, 0, 0, .3);\n  cursor: pointer;\n}\nli[data-v-6a5d09be] {\n  display: inline;\n  padding: 5px 5px 0 0;\n}\nul[data-v-6a5d09be] {\n  padding: 0;\n}\n#matching-projects[data-v-6a5d09be] {\n  background-color: #fbe8d3;\n  border-radius: 2px;\n}\n.matching-project[data-v-6a5d09be] {\n  padding: 5px;\n}\n',""])},164:function(t,n,a){"use strict";a.r(n);a(136);var e={asyncData:function(){return new Promise(function(t,n){t({myStack:["Javascript","React","Vue","Node.js","Express","PostgreSQL","MongoDB","Redux","Handlebars","jQuery","Socket.io","Redis"],clickedOnStack:"",myProjects:[{title:"Authors In Town",stack:["Javascript","React","Redux","PostgreSQL","Redis"],description:"Users sign up, link their goodreads account to find their favourite authors and then are shown author events near them."},{title:"TartanBored",stack:["Javascript","Vue","PostgreSQL"],description:"Blah blah!"}],matchingProjects:[]})})},computed:{projectMatch:function(){this.matchingProjects=[];for(var t=0;t<this.myProjects.length;t++)this.myProjects[t].stack.indexOf(this.clickedOnStack)>-1&&this.matchingProjects.push(this.myProjects[t]),console.log("match!",this.matchingProjects.length)}},methods:{onStackClick:function(t){this.clickedOnStack=t,console.log(this.clickedOnStack),this.projectMatch}},head:function(){return{title:"🤖 Peter Anderson - Full Stack Developer Berlin",meta:[{hid:"🤘",name:"🤖 Peter Anderson - Full Stack Developer Berlin",content:"🤖"}]}}},i=(a(162),a(13)),o=Object(i.a)(e,function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"flex flex-wrap overflow-hidden",attrs:{id:"app"}},[t._m(0),t._v(" "),a("div",{staticClass:"projects w-full overflow-hidden sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2"},[a("div",{staticClass:"flex flex-wrap overflow-hidden"},[a("div",{staticClass:"w-full overflow-hidden"},[a("h1",{attrs:{id:"stack"}},[t._v("Stack:")]),t._v(" "),a("h3",[a("ul",t._l(t.myStack,function(n){return a("li",{on:{click:function(a){t.onStackClick(n)}}},[t._v(" "+t._s(n)+"\n                        ")])}),0)]),t._v(" "),a("div",[a("ul",{attrs:{id:"matching-projects"}},t._l(t.matchingProjects,function(n){return a("li",{staticClass:"matching-project"},[t._v("\n                "+t._s(n.title)+"\n            ")])}),0)]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"marketing"}},[t._v("Marketing:")]),t._v(" "),a("h5",[t._v("SEO | PPC (Adwords, Bing) | Facebook Ads | Email Marketing | Affiliate Marketing")])])])])])},[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"about w-full overflow-hidden sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2"},[a("div",{staticClass:"flex flex-wrap overflow-hidden"},[a("div",{staticClass:"w-full overflow-hidden"},[a("h1",{attrs:{id:"name"}},[a("span",[t._v("P")]),a("span",[t._v("e")]),a("span",[t._v("t")]),a("span",[t._v("e")]),a("span",[t._v("r")]),t._v(" Anderson")]),t._v(" "),a("h3",{attrs:{id:"title"}},[t._v("Full Stack Developer")]),t._v(" "),a("a",{attrs:{href:"https://github.com/onemanwenttomow"}},[a("i",{staticClass:"fab fa-github fa-2x"})]),t._v(" "),a("a",{attrs:{href:"https://www.linkedin.com/in/peter-w-anderson"}},[a("i",{staticClass:"fab fa-linkedin fa-2x"})]),t._v(" "),a("a",{attrs:{href:"https://www.codewars.com/users/dobebrief/"}},[a("img",{attrs:{src:"https://www.codewars.com/users/dobebrief/badges/micro",alt:"Codewars"}})])])])])}],!1,null,"6a5d09be",null);o.options.__file="index.vue";n.default=o.exports}}]);