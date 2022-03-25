<template>
  <div class="wrapper">
    <div class="position">
      <i class="iconfont icon-gouwuche"></i>
    </div>
    <div class="banner">
      <img v-show="'name'"
        src="https://img1.baidu.com/it/u=3042160575,2573878710&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
      />
    </div>
    <div :class="{ shake: noActivated }">
      <button @click="noActivated = true">Click me</button>
      <span v-if="noActivated">Oh no!</span>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return { 
      noActivated: false
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  left: 0;
  bottom: 0.49rem;
  right: 0;
  top: 0;
  width: 100vw;
  font-size: 0.3rem;
  color: #fa2855;
}

.banner {
  height: 0;
  padding-bottom: 56.24%;
  img {
    width: 100%;
  }
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
