<template>
    <div>
        <div class="flex justify-center">
            <leftchevron />
            <div class="w-3/4 h-12">
                <div class="individual-project">
                    <h1>Connect4 built with Javascript</h1>
                    <p class="project-description">Connect 4 built with jQuery. </p>
                    <div>
                        <a class="inline" href="https://github.com/onemanwenttomow/connect4">
                            <button class="inline bg-grey hover:bg-pink text-white font-bold py-2 px-4 rounded">
                                View code on GitHub
                            </button>
                        </a>
                    </div>
                    <div class="image-container">
                        <img class="project-image" src="https://s3.amazonaws.com/pwanderson/connect4-min.PNG" alt="">
                    </div>

                </div>
            </div>
            <rightchevron />
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import leftchevron from "~/components/leftchevron";
import rightchevron from "~/components/rightchevron";


export default {
    components: { leftchevron, rightchevron },
    fetch({ store }) {

    },
    computed: {
        ...mapState([
            'myProjects',
            'leftLink',
            'rightLink'
        ])
    },
    head() {
        return {
            title: "Connect4 built with Javascript",
            meta: [
                {
                    hid: "Connect4 built with Javascript",
                    name: "Connect4 built with Javascript",
                    content: `Connect 4 built with jQuery.`
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
