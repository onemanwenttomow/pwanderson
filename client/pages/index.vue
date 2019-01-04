<template>
    <div id="app" class="flex flex-wrap overflow-hidden">
        <div class="min-h-screen md:h-screen about w-full overflow-hidden sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
            <div class="flex flex-wrap overflow-hidden">

                <div class="w-full overflow-hidden">
                    <h1 id="name"><span>P</span><span>e</span><span>t</span><span>e</span><span>r</span> W Anderson</h1>
                    <h3 id="title">Full Stack Developer</h3>
                    <a href="https://github.com/onemanwenttomow"><i class="fab fa-github fa-2x"></i></a>
                    <a href="https://www.linkedin.com/in/peter-w-anderson"><i class="fab fa-linkedin fa-2x"></i></a>
                    <a href="https://www.codewars.com/users/dobebrief/"><img src="https://www.codewars.com/users/dobebrief/badges/micro" alt="Codewars"></a>
                </div>

            </div>
        </div>

        <div class="min-h-screen projects w-full overflow-hidden sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
            <div class="flex flex-wrap overflow-hidden">

                <div class="w-full overflow-hidden">
                    <h1 id="stack">Stack:</h1>
                    <h3 >
                        <ul >
                            <li  v-for="stack in myStack" v-on:click="onStackClick(stack)" @click="selected = myStack.indexOf(stack)" :class="{highlight:myStack.indexOf(stack) == selected}" > {{ stack }}
                            </li>
                        </ul>
                    </h3>
        <br>
        <div>
            <ul id="matching-projects">
                <li v-for="project in matchingProjects" class="matching-project">
                    <nuxt-link :to="project.link">
                    <h4>{{ project.title }}</h4>
                    <p class="text-sm">{{ project.description }}</p>
                    <button class="project-button">
                            Project Details
                    </button>
                    </nuxt-link>
                </li>
            </ul>
        </div>
        <br>
        <h3 id="marketing">Marketing:</h3>
        <h5>SEO | PPC (Adwords, Bing) | Facebook Ads | Email Marketing | Affiliate Marketing</h5>
                </div>
            </div>
        </div>

    </div>
</template>



<script>
    import axios from "axios";
    export default {
        asyncData() {
            return new Promise((resolve, reject) => {
                resolve({
                    myStack: [
                        "Javascript",
                        "React",
                        "Vue",
                        "Node.js",
                        "Express",
                        "PostgreSQL",
                        "MongoDB",
                        "Redux",
                        "Handlebars",
                        "jQuery",
                        "Socket.io",
                        "Redis",
                        "Nuxt.js",
                        "TailwindCSS",
                        "AWS",
                        "Bootstrap"
                    ],
                    clickedOnStack: "",
                    selected: undefined,
                    isActive: true,
                    myProjects: [
                            {
                                title: "Authors In Town",
                                link: "/authorsintown",
                                stack: ["Javascript", "React", "Redux", "PostgreSQL", "Redis", "Node.js", "Express", "AWS"],
                                description: "Users sign up, link their goodreads account to find their favourite authors and then are shown author events near them."
                            },
                            {
                                title: "TartanBored",
                                link: "/tartanbored",
                                stack: ["Javascript", "Vue", "PostgreSQL", "Node.js", "Express", "AWS"],
                                description: "A website where users can upload tartans, comment and search by tag. Built in Vue.js"
                            },
                            {
                                title: "DizzyFrinks Social Network",
                                link: "/dizzyfrinks",
                                stack: ["Javascript", "React", "Redux", "PostgreSQL","AWS", "Socket.io"],
                                description: "A social network for the website DizzyFrinks.com built with React, Redux and Socket.io"
                            },
                            {
                                title: "PWAnderson",
                                link: "/pwanderson",
                                stack: ["Javascript", "Vue", "TailwindCSS", "Nuxt.js","AWS"],
                                description: "My personal portfolio App is built with serverless-side rendering, Vue.js, Nuxt.js and AWS Lambda"
                            }
                        ],
                        matchingProjects: []
                })
            })
        },
        computed: {
            projectMatch: function() {
                this.matchingProjects = [];
                for (let i = 0; i < this.myProjects.length; i++) {
                    if (this.myProjects[i].stack.indexOf(this.clickedOnStack) > -1) {
                        this.matchingProjects.push(this.myProjects[i])
                    }
                }
                console.log(this.matchingProjects);
                console.log();
            }
        },
        methods: {
            onStackClick: function(e) {
                this.clickedOnStack = e;
                console.log(this.clickedOnStack);
                this.projectMatch;
            }
        },
        head() {
            return {
                title: "Peter Anderson - Full Stack Developer Berlin 🤖",
                meta: [
                      {
                        hid: "🤘",
                        name: "Peter Anderson - Full Stack Developer Berlin 🤖",
                        content: `🤖`
                      }
                ]
          };
        }
    };
</script>

<style>
   /* Transitions using the page hook */
   .page-enter-active {
   animation: acrossIn .40s ease-out both;
 }
 .page-leave-active {
   animation: acrossOut .60s ease-in both;
 }
 @keyframes acrossIn {
   0% {
     transform: translate3d(100%, 0, 0);
   }
   100% {
     transform: translate3d(0, 0, 0);
   }
 }
 @keyframes acrossOut {
   0% {
     transform: translate3d(0, 0, 0);
   }
   100% {
     transform: translate3d(-100%, 0, 0);
   }
 }
</style>
