// client/layouts/default.vue
<template>
  <div >
    <navbar />
    <nuxt />
  </div>
</template>


<script>
import navbar from "~/components/navbar";

export default {
  components: { navbar }
};
</script>

<style >

body {
    background-color: #283c63;
    font-family: "Lucida Console", Monaco, monospace;
 }

#app {
    position: absolute;
    margin: 0;
    background-color: #f85f73;
    display: flex;
}

#nav {
    background-color: #928a97;
    color: #fbe8d3;
}

.nav-links:hover {
    color: #283c63;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition:.5s;
}

.home-nav {
    color: #fbe8d3;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition:.5s;
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

.individual-project {
    background-color: #283c63;
    color: #fbe8d3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 4vw;
    cursor: context-menu;
}

.image-container {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
}

.project-image {
    width: 100%;
    padding:1px;
    border:1px solid #928a97;
    background-color:#fbe8d3;
}

.project-description { padding: 20px; }

.projects {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10vw;
  color: #283c63;
}

li.highlight {
  background-color: #fbe8d3;
  border-radius: 4px;
  padding: 2px;
}

li.highlight:hover {
    color: #283c63;
    text-shadow: none;
    cursor: pointer;
}

.about-links {
    padding: 0;
    margin: 0;
    color: #fbe8d3;
}

#name { padding: 10px 0 5px 0; }

#title { padding: 0 0 10px 0; }

h1 { text-shadow: 2px 4px 3px rgba(0,0,0,0.3); }

a {
  color: inherit;
  text-decoration: inherit;
}

#stack { padding-bottom: 10px; }

#marketing { padding-bottom: 5px; }

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

i:hover { color: #f85f73; }

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
}

ul { padding: 0; }

#matching-projects {
  background-color: #fbe8d3;
  border-radius: 4px;
  transition:.5s;
  line-height: 1.1em;
}

.matching-project {
  padding: 5px;
  transition:.5s;
  display: block;
}

.matching-project:hover {
    color: #283c63;
    text-shadow: 0px 0px 0px rgba(0,0,0,0.3);
    cursor: pointer;
}

.project-button {
    background-color: #928a97;
    color: #fbe8d3;
    padding: 4px;
    border-radius: 4px;
}

.project-button:hover {
    background-color: #283c63;
    transition:.5s;
}



* {
    -webkit-touch-callout:none;                /* prevent callout to copy image, etc when tap to hold */
    -webkit-text-size-adjust:none;             /* prevent webkit from resizing text to fit */
    -webkit-tap-highlight-color:rgba(0,0,0,0); /* prevent tap highlight color / shadow */
    -webkit-user-select:none;                  /* prevent copy paste, to allow, change 'none' to 'text' */
}

</style>
