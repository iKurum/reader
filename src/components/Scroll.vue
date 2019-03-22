<template>
  <i class="iconfont icon-huidingbu" @click="toTop($event)" v-show="isScrollTop"></i>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: null,
      isScrollTop: false
    };
  },
  props: {
    num: Number
  },
  mounted() {
    // 监听滚动事件
    window.addEventListener(
      "scroll",
      () => {
        this.scrollTop = this.num;
        // 控制滚动按钮的隐藏或显示
        if (this.scrollTop > 150) {
          this.isScrollTop = true;
        } else {
          this.isScrollTop = false;
        }
      },
      true
    );
  },
  methods: {
    toTop() {
      let $this = this,
        t;

      if ($this.$parent.$refs.scroll.scrollTop > 0) {
        clearTimeout(t);
        t = setTimeout(function() {
          $this.$parent.$refs.scroll.scrollTop -= 1;
          $this.toTop();
        }, 1);
      }
    }
  }
};
</script>

<style scoped>
i {
  padding-left: 2vmin;
  font-size: 5vmin;
  opacity: 0.6;
  position: fixed;
  right: -2vmin;
  bottom: 6vmin;
  cursor: pointer;
  transition: all 0.5s linear;
}

i:hover {
  right: 1vmin;
}
</style>
