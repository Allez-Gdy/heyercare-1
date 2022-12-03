<template>
<div class="steps box flex">
    <div class="step-item">
      <div class="step1 flex">
        <div class="cs">
          <svg-icon icon-class="xinjianhuanzhe"></svg-icon>
          <p>新建患者11111</p>
        </div>
        <div class="cs">
          <svg-icon icon-class="dakaihuanzhe"></svg-icon>
          <p>打开患者</p>
        </div>
      </div>
      <p>第一步</p>
    </div>
    <div class="arrow flex-ai-center">-----></div>
    <div class="step-item step2">
      <div class="cs">
        <svg-icon icon-class="shujuxiazai"></svg-icon>
        <p>数据下载</p>
      </div>
      <p>第二步</p>
    </div>
    <div class="arrow flex-ai-center">-----></div>
    <div class="step-item step3">
      <div class="cs">
        <svg-icon icon-class="chakanshuju"></svg-icon>
        <p>查看数据</p>
      </div>
      <p>第三步</p>
    </div>
    <div class="arrow flex-ai-center">-----></div>
    <div class="step-item step4">
      <div class="cs">
        <svg-icon icon-class="chakanbaogao"></svg-icon>
        <p>查看报告</p>
      </div>
      <p>第四步</p>
    </div>
  </div>
</template>
<style lang="scss">
.steps {
  padding: 30px 10%;
  box-sizing: border-box;
  margin: 25px auto;
  justify-content: space-evenly;
  .arrow {
    padding-bottom: 50px;
  }
  .step-item {
    text-align: center;
    font-size: 70px;
    >div p {
      color: #000;
      margin-top: 5px;
    }
    p {
      margin-top: 17px;
      font-size: 16px;
      color: #3FA66F;
    }
  }
  .step1 {
    >div {
        width: 100px;
        border-left: 2px solid #000;
        &:first-child {
        border-left: none;
      }
    }
  }
}
</style>