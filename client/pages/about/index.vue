<template>
    <div class="about flex h-screen">
        <div>
            <h1 class="">More about me</h1>
            <div class="flex pt-3">
                <p class="">I am a web developer based in Berlin which a special focus on Javascript. Currently love playing with Vue, Nuxt.js, React and React-Native</p>
                <!-- <div class="shadow h-36 w-36">
                    <img class="" src="https://s3.amazonaws.com/pwanderson/avatar.png" alt="">
                </div> -->
            </div>

        </div>

    </div>
</template>

<script>
import navbar from "~/components/navbar";

export default {
  components: { navbar },
  head() {
      return {
          title: "About Peter Anderson: I am a web developer based in Berlin which a special focus on Javascript. Currently love playing with Vue, Nuxt, React and React-Native",
          meta: [
              {
                  hid: "About Peter Anderson: I am a web developer based in Berlin which a special focus on Javascript. Currently love playing with Vue, Nuxt, React and React-Native",
                  name: "About Peter Anderson: I am a web developer based in Berlin which a special focus on Javascript. Currently love playing with Vue, Nuxt, React and React-Native",
                  content: `About Peter Anderson: I am a web developer based in Berlin which a special focus on Javascript. Currently love playing with Vue, Nuxt, React and React-Native.`
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
