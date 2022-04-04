<template>
  <label class="m-checkbox" :class="radioClasss" @click.prevent="handleClick">
    <span class="m-checkbox_input">
      <span class="m-checkbox_inner"></span>
      <input type="checkbox"
      class="m-checkbox_original"
      :value="label"
      :checked="checked"
      :disabled="disabled"
      >
    </span>
    <span class="m-checkbox_label">
      <slot></slot>
      <template v-if="!$slots.default">
        {{label}}
      </template>
    </span>
  </label>
</template>

<script>
import { defineComponent,computed,reactive,toRefs,inject,toRaw } from 'vue'

export default defineComponent({
  name: 'mCheckbox',
  props: {
    modelValue: {
			type: Boolean,
			default: false
		},
    label: {
      type: String,
      default: ''
    },
    // 是否禁用当前radio
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props,{emit}) {
    const state = reactive({
      // 判断是否选中
      checked: computed( () => {
        return state.isGroup ? state.CheckboxGroup.modelValue : props.modelValue
      }),
      isGroup: computed( ()=> {
        return !!state.CheckboxGroup
      }),
      radioClasss: computed( ()=> {
        return [{
          'is-checked-actived': state.checked,
          'is-checked-disabled': props.disabled && state.checked,
          'is-checked-disableds': props.disabled && !state.checked,
        }]
      }),
    })
    /**
     * @method handleClick
     * @description checkbox点击事件
     * - 更新checkbox值
     * - 双向绑定更新value值
     * - 对外暴露change事件
     * - 支持Form表单的验证
     */
    const handleClick = () => {
      if (props.disabled) return;
      emit('update:modelValue', !state.checked)
      emit('change', !state.checked);
    }
    return {
      ...toRefs(state),
      handleClick
    }
  },
})
</script>

<style scoped lang="scss">
.m-checkbox{
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .m-checkbox_input{
    white-space: nowrap;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .m-checkbox_inner{
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s,cubic-bezier(.71,-.46,.29,1.46);
      &:after{
        box-sizing: content-box;
        content: '';
        border: 1px solid #ffffff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(1);
        width: 3px;
        transition: transform .15s ease-in .05s;
        transform-origin: center;
      }
    }
    .m-checkbox_original{
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .m-checkbox_label{
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
// 禁用样式
.m-checkbox.is-checked-disabled {
  color: #c5c8ce;
  cursor: not-allowed !important;
  .m-checkbox_input{
    .m-checkbox_inner{
      border-color: #c5c8ce !important;
      background-color: #c5c8ce !important;
      &:after{
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .m-checkbox_label{
    color:#c5c8ce !important;
  }
}
.m-checkbox.is-checked-disableds {
  color: #c5c8ce;
  cursor: not-allowed !important;
  .m-checkbox_input{
    .m-checkbox_inner{
      border-color: #c5c8ce !important;
      background-color: #f5f7fa !important;
      &:after{
        content: '';
        display: none;
      }
    }
  }
  .m-checkbox_label{
    color:#c5c8ce !important;
  }
}
// 选中的样式
.m-checkbox.is-checked-actived {
  .m-checkbox_input{
    .m-checkbox_inner{
      background-color: #409eff;
      border-color: #409eff;
    }
    &:after{
      transform: rotate(45deg) scaleY(1);
    }
  }
  .m-checkbox_label{
    color: #409eff;
  }
}
</style>

