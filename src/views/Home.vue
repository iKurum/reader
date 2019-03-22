<template>
  <div class="home">
    <Nav/>
    <h1>{{ msg }} {{ search }}.</h1>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  data: function() {
    return {
      msg: "The search is ",
      search: null,
      iframeSrc: null
    };
  },
  components: {
    Nav
  },
  created() {
    this.search = this.$route.query.s;
  },
  mounted() {}
};
</script>

<style scoped>
iframe#wiki_iframe {
  width: 100vw;
  height: 90vh;
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