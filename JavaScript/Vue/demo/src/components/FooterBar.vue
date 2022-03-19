<template>
  <div class="footer">
    <div>
      <div class="iconfont icon-dizhi"></div>
      <nav class="footer__item" :class="{ 'footer__item--active': true }">
        index
      </nav>
    </div>
    <div>
      <div class="iconfont icon-shouye1"></div>
      <nav class="footer__item">car</nav>
    </div>
    <div>
      <div class="iconfont icon-shouye"></div>
      <nav class="footer__item">order</nav>
    </div>
    <div>
      <div class="iconfont icon-Bell"></div>
      <nav class="footer__item">owner</nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;

  position: absolute;
  left: 0;
  bottom: 0;

  box-sizing: border-box;
  width: 100%;
  height: 0.49rem;
  padding: 0 0.18rem 0;

  color: #fff;
  font-size: 0.2rem;
  border-top: 0.01rem solid #eee;
  background: #fa2855;
  > div {
    flex: 1;
    text-align: center;
    height: 100%;
    padding-top: 0.1rem;
    box-sizing: border-box;
  }

  &__item {
    transform: scale(0.5, 0.5);
    transform-origin: center top;
    &--active {
      color: black;
    }
  }
}
</style>
