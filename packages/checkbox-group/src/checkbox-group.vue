<template>
  <div @mCheckboxGroup="mCheckboxGroup">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent,provide } from 'vue'

export default defineComponent({
  name: 'mCheckboxGroup',
  props: {
    modelValue: {
			type: Boolean,
			default: false
		},
  },
  setup(props) {
    provide('CheckboxGroup', props)
    const mCheckboxGroup =(e) => {
    }
    return {
      mCheckboxGroup
    }
  },
})
</script>
