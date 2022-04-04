<template>
  <button class="m-button"
    :style="{width: width,color:color,background:bgcolor,border: borderBg}"
    :class="[`m-button-${type}`,{
      'is-plain': plain,
      'is-round': round,
      'is-circle':circle,
      'is-disabled':disabled
    }]"
    :disabled="disabled"
    @click.prevent="handleClick"
  >
    <i v-if="icon" :class="icon"></i>
    <!-- 判断插槽是否有内容 -->
    <span v-if="slots"><slot></slot></span>
  </button>
</template>

<script>
import { defineComponent,reactive,toRefs } from 'vue'

export default defineComponent({
  name: 'mButton',
  // props: ['type'],
  props: {
    type: {
      // 封装一个通用组件，对props做约束，约束数据类型，字符串
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    },
    bgcolor: {
      type: String,
      default: ''
    },
    borderBg: {
      type: String,
      default: ''
    }
  },
  setup (props,{slots,emit}) {
    const data = reactive({
      type: '',
      plain: false,
      round: false,
      circle: false,
      icon: '',
      slots: '', // 判断是否有插槽
      disabled: false,
    })
    // 默认加载数据
    const onPropsType = () => {
      data.type = props.type
      data.plain = props.plain
      data.round = props.round
      data.circle = props.circle
      data.icon = props.icon
      data.slots = slots.default
      data.disabled = props.disabled
      data.width = props.width
    }
    /**
     * @method handleClick
     * @description button点击事件
     * - 更新button值
     * - 双向绑定更新value值
     * - 对外暴露ok、click事件
     * - 支持Form表单的验证
     */
    const handleClick = (e) => {
      /**
       * 通过定义ctx上下文调用emit事件
       * 向父组件抛出click 事件
       */
      emit('ok',e)
      // emit('click', e);

    }

    onPropsType()
    return {
      ...toRefs(data),
      handleClick
    }
  }
})
</script>

<style lang="scss" scoped>
  .m-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    //禁止元素的文字被选中
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:focus{
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
  }
  .m-button-primary{
  color:#fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus{
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
    }
  }
  .m-button-success{
  color:#fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus{
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
    }
  }
  .m-button-info{
  color:#fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus{
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
    }
  }
  .m-button-warning{
  color:#fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus{
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
    }
  }
  .m-button-danger{
  color:#fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus{
    background: #f78989;
    background-color: #f78989;
    color: #fff;
    }
  }


// 朴素按钮样式
.m-button.is-plain{
  &:hover,
  &:focus{
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.m-button-primary.is-plain{
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus{
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.m-button-success.is-plain{
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus{
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.m-button-info.is-plain{
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus{
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.m-button-warning.is-plain{
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus{
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.m-button-danger.is-plain{
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus{
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
// round属性
.m-button.is-round{
  border-radius: 20px;
  padding: 12px 23px;
}
// circle属性
.m-button.is-circle{
  border-radius: 50%;
  padding: 12px;
}
// icon配套样式
.m-button [class*=m-icon-]+span{
  margin-left: 5px;
}
// disabled属性
.m-button.is-disabled{
  & {
    cursor: not-allowed;
  }
}

</style>
