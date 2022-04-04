<template>
  <div class="m-form">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent,provide } from 'vue'

export default defineComponent({
  name: 'mForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    },
    labelAlign: {
      type: String,
      default: 'left'
    }
  },
  setup(props) {
    provide('modelForm',props)
  },
})
</script>

<style scoped>

</style>
