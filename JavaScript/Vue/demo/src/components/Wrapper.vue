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
  </div>
</template>

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
</style>
