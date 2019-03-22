<template>
  <div class="index" @click="goHome"></div>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {
    goHome() {
      if (event.currentTarget.offsetWidth == 240) {
        event.currentTarget.className = "go";
        setTimeout(() => {
          this.$router.push({ path: "/home" });
        }, 3000);
      }
    }
  }
};
</script>

<style scoped>
div.index {
  width: calc(100vw - 4px);
  height: calc(100vh - 4px);
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: all 3s linear;
}

div.index:hover {
  border: none;
  width: 240px;
  height: 100px;
  border-radius: 50%;
  transform: rotate(720deg);
  animation: i 2s linear infinite;
}

div.index::after {
  content: "";
  position: absolute;
  display: block;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  color: rgb(156, 116, 250);
  animation: after 6s linear infinite;
}

div.go {
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  animation: g 3s linear 1;
}

@keyframes i {
  0% {
    box-shadow: 0 0 0 rgba(156, 116, 250, 0.7);
  }
  50% {
    color: rgb(156, 116, 250);
    box-shadow: 0 0 8px rgba(156, 116, 250, 0.7);
  }
  100% {
    box-shadow: 0 0 0 rgba(156, 116, 250, 0.7);
  }
}

@keyframes after {
  0% {
    content: "CLICK HERE";
    opacity: 0;
  }
  60% {
    opacity: 0.7;
  }
  100% {
    opacity: 0;
  }
}

@keyframes g {
  0% {
    width: 0;
    height: 0;
    transform: rotate(0deg);
    box-shadow: 0 2px 1px rgba(156, 116, 250, 0.7) inset;
  }
  30% {
    width: 100vw;
    height: 1px;
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(90deg);
  }
  80% {
    width: 100vw;
    height: 1px;
    transform: rotate(180deg);
  }
  90% {
    width: 0;
    height: 1px;
    transform: rotate(180deg);
    box-shadow: 0 2px 1px rgba(156, 116, 250, 0.7) inset;
  }
  100% {
    width: 0;
    height: 0;
    border: none;
  }
}
</style>
