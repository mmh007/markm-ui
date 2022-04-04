<template>
  <div class="one-form-item">
    <label :style="{width: labelStyle,textAlign:labelAlign}" class="one-form-item_label">{{label}}</label>
    <div class="one-form-item_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent,computed,reactive,toRefs,inject } from 'vue'

export default defineComponent({
  name: 'mFormItem',
  props: {
    label: String
  },
  setup() {
    const state = reactive({
      modelForm: inject('modelForm'),
      labelStyle: computed(()=> {
        return state.modelForm.labelWidth
      }),
      labelAlign: computed(()=> {
        return state.modelForm.labelAlign
      })
    })

    return {
      ...toRefs(state)
    }
  },
})
</script>

<style lang="scss" scoped>
  .one-form-item{
    // margin-bottom: 25px;
    .one-form-item_label{
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
    .one-form-item_content{
      line-height: 40px;
      position: relative;
      font-size: 14px;
      overflow: hidde;
    }
  }
</style>
