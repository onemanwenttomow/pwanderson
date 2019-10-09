<template>
    <div id="app" class="flex flex-wrap overflow-hidden">
        <div class="min-h-screen md:h-screen about w-full overflow-hidden sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
            <div class="flex flex-wrap overflow-hidden">

                <div class="absolute down-chevron md:hidden">
                    <a href="#" v-scroll-to="'#stack'">
                        <i class="fas fa-chevron-down fa-2x"></i>
                    </a>
                </div>

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
    import { mapState, mapActions } from 'vuex';

    export default {
        fetch({ store }) {

        },
        computed: {
            ...mapState([
                'myProjects',
                'leftLink',
                'rightLink',
                'myStack'
            ]),
            projectMatch: function() {
                this.matchingProjects = [];
                for (let i = 0; i < this.myProjects.length; i++) {
                    if (this.myProjects[i].stack.indexOf(this.clickedOnStack) > -1) {
                        this.matchingProjects.push(this.myProjects[i])
                    }
                }
            }
        },
        asyncData() {
            return new Promise((resolve, reject) => {
                resolve({
                    clickedOnStack: "",
                    selected: undefined,
                    isActive: true,
                    matchingProjects: []
                })
            })
        },
        methods: {
            onStackClick: function(e) {
                this.clickedOnStack = e;
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

<style scoped>
.down-chevron {
    right: 15%;
    top: 40%;
}
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
