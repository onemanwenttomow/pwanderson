<template>
    <div>
        <div class="flex justify-center">
            <leftchevron />
            <div class="w-3/4 h-12">
                <div class="individual-project">
                    <h1>Table Picking React App</h1>
                    <p class="project-description">
                        A simple React App that allows users to pick where they want to go for lunch. The app hits the foursquare API and gets 3 options for where to go and then users can vote on which one they want.
                    </p>
                    <div>
                        <a class="inline" href="https://github.com/onemanwenttomow/table-picking">
                            <button class="inline bg-grey hover:bg-pink text-white font-bold py-2 px-4 rounded">
                                View code on GitHub
                            </button>
                        </a>
                    </div>
                    <div class="image-container">
                        <img class="project-image" src="https://s3.amazonaws.com/pwanderson/table-picker-min.PNG" alt="">
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
            title: "Table Picking React App",
            meta: [
                {
                    hid: "Table Picking React App",
                    name: "Table Picking React App",
                    content: `A simple React App that allows users to pick where they want to go for lunch. The app hits the foursquare API and gets 3 options for where to go and then users can vote on which one they want.`
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
