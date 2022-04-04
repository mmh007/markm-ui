<template>
  <div style="border:1px solid red;" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent,provide } from 'vue'

export default defineComponent({
  name: 'mRadioGroup',
  props: {
    modelValue: {
			type: [String,Number,Boolean],
			default: false
		},
    label: {
      type: [String,Number,Boolean],
      default: ''
    },
  },
  setup(props) {
      provide('setValue111', props.modelValue)
    const handleClick = () => {
    }
    return {
      handleClick
    }
  },
})
</script>

<style scoped lang="scss">

</style>
