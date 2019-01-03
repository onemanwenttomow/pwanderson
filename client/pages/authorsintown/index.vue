<template>
    <div class="about">
        <h1>All about authors in town</h1>

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
