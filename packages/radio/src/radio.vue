<template>
  <label class="m-radio" :class="radioClasss" @click.prevent="handleClick">
    <span class="m-radio_input">
      <span class="m-radio_inner"></span>
      <input
        type="radio"
        class="m-radio_original"
        :value="label"
        :checked="checked"
        :disabled="disabled"
        @change="handleRadioChange"
        />
    </span>
    <span class="m-radio_label">
      <slot></slot>
      <!-- 如果没有传值，就把label作为文本显示 -->
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
import { defineComponent,computed,reactive,toRefs,inject } from 'vue'
export default defineComponent({
  name: 'mRadio',
  props: {
    modelValue: {
			type: [String,Number,Boolean],
			default: false
		},
    label: {
      type: [String,Number,Boolean],
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
        return props.modelValue == props.label
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
     * @description radio点击事件
     * - 更新radio值
     * - 双向绑定更新value值
     * - 对外暴露change事件
     * - 支持Form表单的验证
     */
    const handleClick = () => {
      if (props.disabled) return;
			emit('update:modelValue', props.label)
      emit('change',props.label)
      emit('click',props.label)
		}
    /**
     * @method handleRadioChange
     * @description radio点击事件
     * - 更新radio值
     * - 双向绑定更新value值
     * - 对外暴露change事件
     * - 支持Form表单的验证
     */
    const handleRadioChange = () => {
      if (props.disabled) return;
      emit('input',props.label)
      emit('change',props.label)
    }
    return {
      ...toRefs(state),
      handleClick,
      handleRadioChange
    }
  },
})
</script>

<style scoped lang="scss" >
  .m-radio{
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 10px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    .m-radio_input{
      white-space: nowrap;
      // cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .m-radio_inner{
        border: 1px solid #dcdfe6;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        background-color: #fff;
        position: relative;
        // cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        &:after{
          width: 4px;
          height: 4px;
          border-radius: 100%;
          background-color: #fff;
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%) scale(0);
          transition: transform .2s ease-in;
        }
      }
      .m-radio_original{
        opacity: 0;
        outline: none;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0px;
        right: 0;
        bottom: 0;
        margin: 0;
      }
    }
    .m-radio_label{
      font-size: 14px;
      padding-left: 10px;;
    }
  }
  // 禁用样式
  .m-radio.is-checked-disabled {
    color: #c5c8ce;
    cursor: not-allowed !important;
    .m-radio_input{
      .m-radio_inner{
        border-color: #c5c8ce !important;
        background-color: #c5c8ce !important;
        &:after{
          transform: translate(-50%,-50%) scale(1);
        }
      }
    }
    .m-radio_label{
      color:#c5c8ce !important;
    }
  }
    .m-radio.is-checked-disableds {
    color: #c5c8ce;
    cursor: not-allowed !important;
    .m-radio_input{
      .m-radio_inner{
        border-color: #c5c8ce !important;
        background-color: #f5f7fa !important;
        &:after{
          content: '';
          display: none;
        }
      }
    }
    .m-radio_label{
      color:#c5c8ce !important;
    }
  }
  // 选中的样式
  .m-radio.is-checked-actived{
    .m-radio_input{
      .m-radio_inner{
        border-color: #409eff;
        background-color: #409eff;
        &:after{
          transform: translate(-50%,-50%) scale(1);
        }
      }
    }
    .m-radio_label{
      color:#409eff;
    }
  }

</style>
