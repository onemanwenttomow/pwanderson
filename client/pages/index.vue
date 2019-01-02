<template>
    <div id="app" class="flex flex-wrap overflow-hidden">

        <div class="about w-full overflow-hidden sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
            <div class="flex flex-wrap overflow-hidden">

                <div class="w-full overflow-hidden">
                    <h1 id="name"><span>P</span><span>e</span><span>t</span><span>e</span><span>r</span> Anderson</h1>
                    <h3 id="title">Full Stack Developer</h3>
                    <a href="https://github.com/onemanwenttomow"><i class="fab fa-github fa-2x"></i></a>
                    <a href="https://www.linkedin.com/in/peter-w-anderson"><i class="fab fa-linkedin fa-2x"></i></a>
                    <a href="https://www.codewars.com/users/dobebrief/"><img src="https://www.codewars.com/users/dobebrief/badges/micro" alt="Codewars"></a>
                </div>

            </div>
        </div>

        <div class="projects w-full overflow-hidden sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
            <div class="flex flex-wrap overflow-hidden">

                <div class="w-full overflow-hidden">
                    <h1 id="stack">Stack:</h1>
                    <h3 >
                        <ul >
                            <li  v-for="stack in myStack" v-on:click="onStackClick(stack)" > {{ stack }}
                            </li>
                        </ul>
                    </h3>

        <div>
            <ul id="matching-projects">
                <li v-for="project in matchingProjects" class="matching-project">
                    {{ project.title }}
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

<style scoped>
#app {
  margin: 0;
  font-family: "Lucida Console", Monaco, monospace;
  background-color: #f85f73;
  display: flex;
  height: 100vh;
}
.about {
  background-color: #283c63;
  color: #fbe8d3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10vw;
  cursor: context-menu;
}
.projects {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10vw;
  color: #283c63;
}

.about-links {
    padding: 0;
    margin: 0;
    color: #fbe8d3;
}

#name {
  padding: 10px 0 5px 0;
}

#title {
  padding: 0 0 10px 0;
}

h1 {
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
}

a {
  color: inherit;
  text-decoration: inherit;
}

#stack {
  padding-bottom: 10px;
}

#marketing {
  padding-bottom: 5px;
}

h1 > span {
  color: #fbe8d3;
     -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.5s;
}

i {
   color: #fbe8d3;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
     -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.5s;
}

i:hover {
  color: #f85f73;
}

h1 > span:hover {
  color: #f85f73;
  cursor: context-menu;
}

li {
  color: #283c63;
   -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.5s;
}

li:hover {
  color: #fbe8d3;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
  cursor: pointer;
}

li {
  display: inline;
  padding: 5px 5px 0 0;
  -webkit-touch-callout:none;                /* prevent callout to copy image, etc when tap to hold */
  -webkit-text-size-adjust:none;             /* prevent webkit from resizing text to fit */
  -webkit-tap-highlight-color:rgba(0,0,0,0); /* prevent tap highlight color / shadow */
  -webkit-user-select:none;                  /* prevent copy paste, to allow, change 'none' to 'text' */
}

ul {
  padding: 0;
}

#matching-projects {
  background-color: #fbe8d3;
  border-radius: 2px;
}

.matching-project {
  padding: 5px;
}

* {
    -webkit-touch-callout:none;                /* prevent callout to copy image, etc when tap to hold */
    -webkit-text-size-adjust:none;             /* prevent webkit from resizing text to fit */
    -webkit-tap-highlight-color:rgba(0,0,0,0); /* prevent tap highlight color / shadow */
    -webkit-user-select:none;                  /* prevent copy paste, to allow, change 'none' to 'text' */
}
</style>

<script>
    import axios from "axios";
    export default {
        asyncData() {
            return new Promise((resolve, reject) => {
                resolve({
                    myStack: ["Javascript", "React", "Vue", "Node.js", "Express", "PostgreSQL", "MongoDB", "Redux", "Handlebars", "jQuery", "Socket.io", "Redis"],
                    clickedOnStack: "",
                    myProjects: [
                            {
                                title: "Authors In Town",
                                stack: ["Javascript", "React", "Redux", "PostgreSQL", "Redis"],
                                description: "Users sign up, link their goodreads account to find their favourite authors and then are shown author events near them."
                            },
                            {
                                title: "TartanBored",
                                stack: ["Javascript", "Vue", "PostgreSQL"],
                                description: "Blah blah!"
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
                    console.log("match!", this.matchingProjects.length);
                }
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
                title: "🤖 Peter Anderson - Full Stack Developer Berlin",
                meta: [
                      {
                        hid: "🤘",
                        name: "🤖 Peter Anderson - Full Stack Developer Berlin",
                        content: `🤖`
                      }
                ]
          };
        }
    };
</script>
