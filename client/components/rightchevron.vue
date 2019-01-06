<template>
    <div class="min-h-screen w-1/8 bg-blue h-12 flex justify-center items-center">
        <nuxt-link :to="rightLink">
            <i class="md:w-12 fas fa-chevron-right fa-2x cursor-pointer"></i>
        </nuxt-link>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    fetch({ store }) {

    },
    mounted() {
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

};
</script>
