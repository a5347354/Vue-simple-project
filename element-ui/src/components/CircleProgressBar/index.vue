<template>
  <div class="circular">
    <div class="inner"></div>
    <div class="outer"></div>
    <div class="numb">0%</div>
    <div class="circle">
      <div class="dot">
        <span></span>
      </div>
      <div class="bar left">
        <div class="progress"></div>
      </div>
      <div class="bar right">
        <div class="progress"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percentage: 'hello!',
      val: 40,
      r: 90,
      c: 0,
      pct: 0,
    };
  },
  mounted() {
    this.c = Math.PI * (this.r * 2);
    this.pct = ((100 - this.val) / 100) * this.c;
  },
};
</script>
<style scoped lang="scss">
.container {
  width: 50px;
}
#svg circle {
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 1s linear;
  stroke: #666;
  stroke-width: 1em;
}
#svg #bar {
  stroke: #ff9f1e;
}
#cont {
  display: block;
  height: 200px;
  width: 200px;
  margin: 2em auto;
  box-shadow: 0 0 1em black;
  border-radius: 100%;
  position: relative;
}
#cont:after {
  position: absolute;
  display: block;
  height: 160px;
  width: 160px;
  left: 50%;
  top: 50%;
  box-shadow: inset 0 0 1em black;
  content: attr(data-pct) "%";
  margin-top: -80px;
  margin-left: -80px;
  border-radius: 100%;
  line-height: 160px;
  font-size: 2em;
  text-shadow: 0 0 0.5em black;
}

input {
  color: #000;
}
</style>
