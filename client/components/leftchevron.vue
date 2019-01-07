<template>
    <div class="flex min-h-screen w-1/8 bg-blue h-12 justify-center items-center">
        <nuxt-link :to="leftLink">
            <i class="md:w-12 fas fa-chevron-left fa-2x cursor-pointer"></i>
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
            this.$store.dispatch('getProject', $nuxt.$route.name)
        }
    },

};
</script>
