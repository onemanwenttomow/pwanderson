<template>
    <div>
        <div class="flex justify-center">
            <leftchevron />
            <div class="w-3/4 h-12">
                <div class="individual-project">
                    <h1>Petition Site</h1>
                    <p class="project-description">
                        A petition site built with NodeJS and Handlebars.
                    </p>
                    <div>
                        <a class="inline" href="https://github.com/onemanwenttomow/petition">
                            <button class="inline bg-grey hover:bg-pink text-white font-bold py-2 px-4 rounded">
                                View code on GitHub
                            </button>
                        </a>
                        <a class="inline" href="https://peterspetition.herokuapp.com/register">
                            <button class="inline bg-grey hover:bg-pink text-white font-bold py-2 px-4 rounded">
                                Visit Site
                            </button>
                        </a>
                    </div>
                    <div class="image-container">
                        <img class="project-image" src="https://s3.amazonaws.com/pwanderson/petition-preview-min.PNG" alt="">
                    </div>
                    <div class="image-container">
                        <img class="project-image" src="https://s3.amazonaws.com/pwanderson/sigpage-min.PNG" alt="">
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
            title: "Petition Site",
            meta: [
                {
                    hid: "Petition Site",
                    name: "Petition Site",
                    content: `A petition site built with NodeJS and Handlebars.`
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
