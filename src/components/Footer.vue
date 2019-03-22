<template>
  <footer>
    <div>{{ responseData }}</div>
  </footer>
</template>

<script>
import { getText } from "@/api/testApi";
export default {
  name: "Footer",
  data() {
    return {
      responseData: ""
    };
  },
  computed: {
    httpError() {
      return this.$store.state.httpError;
    }
  },
  mounted() {
    getText("/")
      .then(response => {
        this.responseData = response.data['hitokoto'];
      })
      .catch(error => {
        this.responseData = "时间是最温柔的事物。";
      });
  }
};
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 6vmin;
  margin-top: 2vmin;
}

footer > div {
  width: 100%;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%);
}
</style>
