<template>
  <div id="app" class="scroll" ref="scroll">
    <router-view/>
    <Scroll :num="this.s"/>
  </div>
</template>

<script>
import Scroll from "@/components/Scroll.vue";

export default {
  data() {
    return {
      s: null
    };
  },
  components: {
    Scroll
  },
  mounted() {
    let $this = this;
    window.addEventListener(
      "scroll",
      () => {
        this.s = this.$refs.scroll.scrollTop;
      },
      true
    );
  },
  methods: {}
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

#app {
  font-size: 18px;
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.scroll::-webkit-scrollbar {
  width: 0.2rem;
  background-color: #f5f5f5;
}
/*定义滚动条的轨道，内阴影及圆角*/
.scroll::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 0.2rem;
  background-color: #f5f5f5;
}
/*定义滑块，内阴影及圆角*/
.scroll::-webkit-scrollbar-thumb {
  border-radius: 0.2rem;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #002448;
}
</style>
