<template>
  <div id="progress-bar-circle">
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 120 120"
    >
      <circle
        cx="60"
        cy="60"
        :r="radiusCircle"
        fill="none"
        :stroke="backgroundColor"
        :stroke-width="defaultOptions.layout.strokeWidth"
      />
      <circle
        cx="60"
        cy="60"
        :r="radiusCircle"
        fill="none"
        :stroke="progressColor"
        :stroke-width="defaultOptions.layout.strokeWidth"
        :stroke-dasharray="strokeCircle"
        :stroke-dashoffset="strokeCircleOffset"
      />
    </svg>
  </div>
</template>

<script>
export default {
  created () {
    this.defaultOptions = {
      progress: {
        color: '#2dbd2d',
        backgroundColor: '#333333'
      },
      layout: {
        height: 200,
        width: 200,
        strokeWidth: 5, // 外圓長度-內圓長度
        type: 'circle'
      }
    }
  },
  watch: {
    value: function (val) {
      this.updateValue(val)
    },
  },
  props: {
    options: {
      type: Object,
      required: false,
      default: () => {}
    },
    value: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data () {
    return {
      defaultOptions: Object,
      radiusCircle: 40,
      strokeCircle: 0,
      strokeCircleOffset: 0
    }
  },
  computed: {
    width () {
      return this.defaultOptions.layout.width
    },
    height () {
      return this.defaultOptions.layout.height
    },
    backgroundColor () {
      return this.defaultOptions.progress.backgroundColor
    },
    progressColor () {
      return this.defaultOptions.progress.color
    },
  },
  methods: {
    updateValue (val) {
      this.strokeCircle = 2 * Math.PI * this.radiusCircle * (3/4)
      this.strokeCircleOffset = this.strokeCircle * ((100 - val) / 100) * (3/4)
    }
  }
}
</script>

<style scoped>
svg {
  transform: rotate(-90deg);
}
</style>