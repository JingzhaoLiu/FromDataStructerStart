<template>
  <!-- <div> -->
  <div class="wrapper">
    <div class="position">
     <i class="iconfont icon-gouwuche"></i>
    </div>
  </div>

  <div class="footer">
    <nav class="footer__item footer__item--active">
      
      index</nav>
    <nav class="footer__item">car</nav>
    <nav class="footer__item">order</nav>
    <nav class="footer__item">owner</nav>
  </div>
  <!-- </div> -->
</template>

<style lang="scss">
// .docker {
// position: relative;



.wrapper {
  // background: green;
  position: absolute;
  left: 0;
  bottom: 0.5rem;
  right: 0;
  top: 0;
  width: 100vw;
  font-size: 0.3rem;
  color: #fa2855;
}
.footer {
  display: flex;
  align-items: center;

  position: absolute;
  left: 0;
  bottom: 0;

  box-sizing: border-box;
  width: 100%;
  height: 0.49rem;
  padding: 0.3rem 0.18rem 0;

  color: #fff;
  font-size: 0.2rem;
  border-top: 0.01rem solid #eee;
  background: #fa2855;
  &__item {
    flex: 1;
    text-align: center;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
    &--active {
      color: black;
    }
  }
}
// }
</style>
