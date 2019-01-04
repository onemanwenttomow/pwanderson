<template>
    <div>
        <div class="flex justify-center">
            <div class="flex min-h-screen w-1/8 bg-blue h-12 justify-center items-center">
                <nuxt-link :to="leftLink">
                    <i class="fas fa-chevron-left fa-3x cursor-pointer"></i>
                </nuxt-link>
            </div>
            <div class="w-3/4 h-12">
                <div class="individual-project">
                    <h1>PWAnderson.com</h1>
                    <p class="project-description">A social network for the website DizzyFrinks.com built with React, Redux and Socket.io. Features include live chat, friend request and more. </p>
                    <a href="https://github.com/onemanwenttomow/dizzyfrinks-socialnetwork">
                        <button class="bg-pink hover:bg-grey text-white font-bold py-2 px-4 rounded">
                            View code on GitHub
                        </button>
                    </a>
                    <img class="project-image" src="https://s3.amazonaws.com/pwanderson/dizzyfinks-preview+(1).PNG" alt="">
                    <img class="project-image" src="https://s3.amazonaws.com/pwanderson/socialnetworkpreview-min.PNG" alt="">

                </div>
            </div>
            <div class="min-h-screen w-1/8 bg-blue h-12 flex justify-center items-center">
                <nuxt-link :to="rightLink">
                    <i class="fas fa-chevron-right fa-3x cursor-pointer"></i>
                </nuxt-link>
            </div>
        </div>


    </div>

</template>

<script>
import axios from "axios";
import { mapState } from 'vuex';
import { mapActions } from 'vuex'

export default {
    fetch({ store }) {

    },
    mounted() {
        console.log("mounted!!!!: ");
        console.log($nuxt.$route.name);
        this.getLeftAndRightLinks
    },
    computed: {
        ...mapState([
            'myProjects',
            'leftLink',
            'rightLink'
        ]),
        getLeftAndRightLinks: function() {
            console.log("getLeftAndRightLinks!!!!: ", $nuxt.$route.name);
            this.$store.dispatch('getProject', $nuxt.$route.name)
        }
    },
    head() {
        return {
            title: "Dizzyfrinks Social Network",
            meta: [
                {
                    hid: "Dizzyfrinks Social Network",
                    name: "Dizzyfrinks Social Network",
                    content: `A social network for the website DizzyFrinks.com built with React.`
                }
            ]
        };
    }
};
</script>

<style scoped>
.page-enter-active {
  animation: acrossIn .40s ease-out both;
}
.page-leave-active {
  animation: acrossOut .60s ease-in both;
}
@keyframes acrossIn {
  0% {
    transform: translate3d(-100%, 0, 0);
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
    transform: translate3d(100%, 0, 0);
  }
}
</style>
