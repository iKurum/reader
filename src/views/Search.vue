<template>
  <div class="search">
    <input
      type="search"
      name="search"
      id="search"
      v-model="search"
      autocomplete="off"
      @keyup.enter="submit"
    >
    <router-link
      :class="isValue ? 'cansearch' : 'nosearch'"
      tag="a"
      :to="{path: '/home', query: {s: search}}"
    >
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-search"></use>
      </svg>
    </router-link>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer
  },
  data() {
    return {
      search: null,
      isValue: false
    };
  },
  methods: {
    submit() {
      if (this.isValue == true) {
        this.$router.push({ path: "/home", query: { s: this.search } });
      }
    }
  },
  watch: {
    search() {
      if (this.search == null || this.search.length == 0) {
        this.isValue = false;
      } else {
        this.isValue = true;
      }
    }
  }
};
</script>

<style scoped>
div.search {
  height: 90vh;
  position: relative;
  background: url(../assets/zafkiel.png) no-repeat center top;
  z-index: -2;
}

div.search::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: inherit;
  filter: blur(4px);
  z-index: 2;
}

input#search {
  padding-left: 10px;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  width: 60vw;
  height: 6vh;
  min-height: 50px;
  border: 2px solid #9c9c9c;
  border-radius: 10px;
  font-size: 20px;
  z-index: 999;
}

input#search:hover {
  box-shadow: 0 0 8px rgba(156, 156, 156, 0.7);
}

input#search:focus {
  outline: none;
  border-color: #9c74fa;
  box-shadow: 0 0 8px rgba(156, 116, 250, 0.7);
}

svg.icon {
  color: #9c9c9c;
  font-size: 46px;
  position: absolute;
  left: calc(50% + 30vw - 26px);
  top: 40%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 999;
}

a.nosearch {
  pointer-events: none;
}

a.cansearch:hover .icon {
  border-radius: 20px 24px 6px;
  animation: forcolor 3s infinite linear;
}

@keyframes forcolor {
  0% {
    color: #9c9c9c;
    box-shadow: 0 0 0 rgba(156, 116, 250, 0.7);
  }
  50% {
    color: rgb(156, 116, 250);
    box-shadow: 0 0 8px rgba(156, 116, 250, 0.7);
  }
  100% {
    color: #9c9c9c;
    box-shadow: 0 0 0 rgba(156, 116, 250, 0.7);
  }
}
</style>
