<template>
	<label class="m-switch"
					:class="{'is-checked':modelValue}"  @click="handleClick">
    <span class="m-switch_core" :style="switchStyle" >
      <span v-if="modelValue" :class="{'is-span-before':modelValue}"><slot name="open"></slot></span>
      <span class="m-switch_button"></span>
      <span v-if="!modelValue" :class="{'is-span-after':!modelValue}"><slot name="close"></slot></span>
    </span>
  </label>
</template>

<script>
import { defineComponent,computed,reactive,toRefs } from 'vue'

export default defineComponent({
	name: 'mSwitch',
	props: {
		modelValue: {
			type: Boolean,
			default: false
		},
		activeColor: {
			type: String,
			default: ''
		},
		inacticeColor: {
			type: String,
			default: ''
		}
	},
	setup(props,{emit}) {
		const state = reactive({
			color: '',
      // 使用计算属性,动态更改传入的颜色值
      switchStyle: computed( () => {
        const obj = {};
        if (props.activeColor || props.inacticeColor) {
          let color = props.modelValue ? props.activeColor : props.inacticeColor;
          obj.borderColor = color
          obj.backgroundColor = color
          return obj;
        }
      })
		})
    /**
     * @method handleClick
     * @description switch点击事件
     * - 更新switch值
     * - 双向绑定更新value值
     * - 对外暴露change事件
     * - 支持Form表单的验证
     */
		const handleClick = () => {
			emit('update:modelValue', !props.modelValue)
      emit('change', props.modelValue);
      emit('click', props.modelValue);
		}
		return {
			...toRefs(state),
			handleClick
		}
	},
})
</script>

<style lang="scss" scoped>
.m-switch{
	display: inline-block;
	align-items: center;
	position: relative;
	font-size: 14px;
	line-height: 20px;
	vertical-align: middle;
	.m-switch_core{
		margin: 0;
		display: inline-block;
		position: relative;
		width: 40px;
		height: 20px;
		border: 1px solid #dcdfe6;
		outline: none;
		border-radius: 10px;
		box-sizing: border-box;
		background: #dcdfe6;
		cursor: pointer;
		transition: border-color .3s,background-color .3s;
		vertical-align: middle;
		.m-switch_button{
			position:absolute;
			top: 1px;
			left: 1px;
			border-radius: 100%;
			transition: all .3s;
			width: 16px;
			height: 16px;
			background-color: #fff;
			}
      .is-span-after {
        position: absolute;
        top: -1px;
        // left: 20px;
        color: #fff;
        font-size: 8px;
        outline: none;
        user-select: none;
        transform: translateX(22px);
        transition: all .3s linear;
      }
      .is-span-before {
        position: absolute;
        // left: 2px;
        color: #fff;
        top: -1px;
        font-size: 8px;
        outline: none;
        user-select: none;
        transition: all .3s linear;
        transform: translateX(4px);
      }
		}
	}
	// 选中样式
	.is-checked {
		.m-switch_core{
			border-color: #409eff;
			background-color: #409eff;
			.m-switch_button {
				transform: translateX(20px);
			}
		}
	}
  // 隐藏input标签
  .m-switch_input{
    position:absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
</style>
