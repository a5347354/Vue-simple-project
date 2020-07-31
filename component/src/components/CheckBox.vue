<template>
  <div class="content">
    <div class="round">
      <input
        id="top_ss"
        v-model="checkboxs"
        value="agree"
        type="checkbox"
      >
      <label for="top_ss" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckBox'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}

.round {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
}
.round label {
  background-color: #DBDBDB;
  border: 1px solid #DBDBDB;
  border-radius: 50%;
  cursor: pointer;
  height: 17.5px;
  width: 17.5px;
  left: 0;
  position: absolute;
  top: 0;
}

.round label:after {
  border: 1px solid #fff;
  border-top: none;
  border-right: none;
  content: '';
  height: 3.75px;
  width: 7.5px;
  left: 4.375px;
  position: absolute;
  top: 5px;
  transform: rotate(-45deg);
}

.round input[type='checkbox'] {
  visibility: hidden;
}

.round input[type='checkbox']:checked + label {
  background-color: #00CC9C;
  border-color: #00CC9C;
}

.round input[type='checkbox']:checked + label:after {
  opacity: 1;
}
</style>
