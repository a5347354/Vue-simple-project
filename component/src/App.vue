<template>
  <div id="app">
    <CheckBox />
    <ProgressBarCircle :options="options" :value="80"/>
  </div>
</template>

<script>
import CheckBox from './components/CheckBox.vue'
import ProgressBarCircle from './components/ProgressBarCircle.vue'

export default {
  name: 'App',
  components: {
    CheckBox,
    ProgressBarCircle
  },
  data() {
    return {
      options: {
        progress: {
          color: '#2dbd2d',
          backgroundColor: '#333333'
        },
        layout: {
          height: 140,
          width: 140,
          strokeWidth: 30,
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
