<template>
  <nav :class="navShow ? 'navShow' : 'navHide'">
    <div class="logo"></div>
    <div :class="navShow ? 'navControllerUnfolding' : 'navControllerFolding'">
      <div :class="navShow ? 'trapezoidUnfolding' : 'trapezoidFolding'"></div>
      <div class="trapezoing" @click="trNav">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-ai203"></use>
        </svg>
      </div>
    </div>

    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/search">搜索</router-link>
      </li>
      <li>
        <router-link to="/about">关于</router-link>
      </li>
    </ul>
    <p>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shangbiao"></use>
      </svg>
      <span>2019</span>
    </p>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      navShow: false
    };
  },
  methods: {
    trNav() {
      this.navShow = !this.navShow;
    }
  }
};
</script>

<style scoped>
nav {
  position: fixed;
  width: 16vw;
  height: 100vh;
  background-color: #f8fafa;
  top: 0;
  transition: all 0.6s linear;
}

nav.navShow {
  left: 0;
}

nav.navHide {
  left: -16vw;
}

div.logo {
  position: relative;
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  background: url(../assets/zafkiel.png) no-repeat center;
  background-size: 100%;
  margin-bottom: 30px;
  left: 3vw;
  top: 10px;
  animation: logoRotate 4s linear infinite;
}

li {
  list-style: none;
  display: block;
}

a {
  position: relative;
  display: block;
  padding: 20px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  cursor: pointer;
}

a::after {
  content: "";
  position: absolute;
  top: -10px;
  left: -100%;
  width: 0;
  height: 100%;
  border-bottom: 2px solid rgb(156, 116, 250);
  transition: all 0.4s linear;
}

a:hover::after {
  width: 100%;
  left: 0;
}

a:hover ~ li::after {
  left: 0;
}

p {
  width: 100%;
  position: absolute;
  bottom: 2px;
}

p .icon {
  font-size: 20px;
}

div.navControllerUnfolding {
  position: absolute;
  width: 30px;
  height: 100px;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
}

div.navControllerFolding {
  position: absolute;
  width: 30px;
  height: 100px;
  right: -30px;
  top: calc(50% - 50px);
  transform: translate(0, -50%);
  transform: rotateY(180deg);
}

div.trapezoidUnfolding {
  position: absolute;
  height: 100px;
  top: 50%;
  transform: translate(0, -50%);
  border-right: 30px solid white;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  z-index: 99;
}

div.trapezoidFolding {
  position: absolute;
  height: 100px;
  top: 50%;
  transform: translate(0, -50%);
  border-right: 30px solid #f8fafa;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  z-index: 99;
}

div.trapezoing {
  position: absolute;
  text-align: center;
  line-height: 100px;
  z-index: 999;
  cursor: pointer;
}

div.trapezoing .icon {
  font-size: 30px;
}

@keyframes logoRotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
