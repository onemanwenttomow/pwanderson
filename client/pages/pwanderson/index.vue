<template>
    <div class="about">
        <h1>PWAnderson.com</h1>

    </div>
</template>

<script>
import axios from "axios";
export default {
  head() {
    return {
      title: "Show all dogs!",
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Hello Dogs 👋`
        }
      ]
    };
  }
};
</script>
