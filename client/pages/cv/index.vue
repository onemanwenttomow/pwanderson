<template>
    <div class="cv">

        <h1>Download my CV</h1>
        <a class="block cvlink" href="https://drive.google.com/file/d/1jCI0h9Lc1Xspjr7bfBO7GSzdqhJr4cos/view?usp=sharing">
            Link to download ->
        </a>
    </div>

</template>

<style scoped>

.cv {
  background-color: #283c63;
  color: #fbe8d3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10vw;
}

.cvlink {
    padding: 20px;
}
</style>

<script>
import axios from "axios";
export default {
  head() {
    return {
      title: "Link to download my latest CV",
      meta: [
        {
          hid: "Link to download my latest CV",
          name: "Link to download my latest CV",
          content: `Link to download my latest CV`
        }
      ]
    };
  }
};
</script>
