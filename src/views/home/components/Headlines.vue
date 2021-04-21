<template>
  <div class="headLine">
    <span class="headerLine-label">头条</span>
    <h2>
      <a href="xwzh/2706e0ba60304a41859b2a083f13226c.htm">
            花儿为什么这样红——北京大学党史教育全景图
        </a>
    </h2>
  </div>
</template>

<script>
    export default {
    name: "Headlines",
    data() {
        return {};
    },
    };
</script>

<style lang="scss">
@import "~@/styles/variables.scss";

.headLine {
  background: #f2f1f1;
  // background: #e0dfdf;
  padding: 10px;
  text-align: center;
  margin-top: 20px;
  line-height: 1.2;
  position: relative;

  .headerLine-label {
    width: 28px;
    background: $topic-color;
    text-align: center;
    font-size: 16px;
    font-family: "华文宋体", "宋体", "微软雅黑";
    display: block;
    color: #fff;
    font-weight: bold;
    height: 50px;
    padding: 2px 0 0 0;
    position: absolute;
    left: 11px;
    top: -8px;
  }
  h2 {
    font-family: "黑体";
    font-size: 43px;
    letter-spacing: -1px;
    padding: 4px 0 0;
    line-height: 52px;
    max-height: 104px;
    overflow: hidden;
    margin: 0 25px 0 45px;
  }

  a {
    text-decoration: none;
    color: #505050;
    &:hover {
      color: $topic-color;
    }
  }
}
</style>