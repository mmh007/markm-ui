<template>
  <form class="m-form">
    <div class="m-input"
        :class="{'m-input_suffix': showSuffix}"
        :style="{width,marginTop: top}" >
      <input
        :style="{height:height,lineHeight:height,fontSize:size}"
        :name="name"
        :value="modelValue"
        :disabled="disabled"
        :placeholder="placeholder"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :class="{'is-disabled' : disabled}"
        class="m-input_inner"
        @input="handleInput"
        autocomplete
        />
        <span class="m-input_suffix" v-if="showSuffix">
          <i class="m-icon-shanchu2" v-if="clearable && modelValue" @click="clear"></i>
          <i :class="passwordVisible ? 'm-icon-view-atice m-icon-xianshi' : 'm-icon-guanbixianshi'"	v-if="showPassword && modelValue" @click="handlepassword"></i>
        </span>
    </div>
  </form>
</template>

<script>
import { defineComponent,computed,reactive,toRefs } from 'vue'

export default defineComponent({
	name: 'mInput',
	props: {
		width: {
			type: String,
			default: '100%',
		},
    height: {
      type: String,
			default: ''
    },
    size: {
      type: String,
			default: '12px'
    },
		top: {
			type: String,
			default: '0'
		},
		type: {
			type: String,
			default: 'text'
		},
		name: {
			type: String,
			default: ''
		},
		placeholder: {
			type: String,
			default: ''
		},
		disabled: {
			type: Boolean,
			default: false
		},
		// 等于v-model绑定传参
		modelValue: {
			type: String,
			default: ''
		},
		clearable: {
			type: Boolean,
			default: false
		},
		showPassword: {
			type: Boolean,
			default: false
		}
	},
	setup(props,{emit}) {
		const data = reactive({
			passwordVisible: false,
      currentValue: ''
		})
    /**
   * @method handleInput
   * @description input点击事件
   * - 更新input值
   * - 双向绑定更新value值
   * - 对外暴露change事件
   * - 支持Form表单的验证
   */
		const handleInput = (e) => {
      data.currentValue = e.target.value;
			emit('update:modelValue',e.target.value)
      emit('input', e.target.value);
      emit('change', e.target.value);
		}
		// computed监听方法
		const showSuffix = computed(() => {
			return props.clearable || props.showPassword
		})
		// clear
		const clear = () => {
			emit('update:modelValue','')
		}
		const handlepassword = () => {
			data.passwordVisible = !data.passwordVisible
		}
		return {
			...toRefs(data),
			handleInput,
			showSuffix,
			clear,
			handlepassword,
		}
	},
})
</script>

<style lang="scss" scoped>
.m-form {
  display: inline;
}
.m-input{
	width: 100%;
	position: relative;
	font-size: 14px;
	display: inline-block;
	.m-input_inner{
		-webkit-appearance: none;
		background-color: #fff;
		background-image: none;
		border: 1px solid #dcdfe6;
		border-radius: 4px;
		box-sizing: border-box;
		color: #606266;
		display: inline-block;
		font-size: inherit;
		height: 40px;
		line-height: 40px;
		outline: none;
		padding: 0 15px;
		transition: border-color .2s cubic-bezier(.645,045,.355,1);
		width: 100%;
		&:focus{
			outline: none;
			border-color: #409eff;
		}
		// input禁用样式
		&.is-disabled{
			background-color: #f5f7fa;
			border-color: #e4e7ed;
			color: #c0c4cc;
			cursor:not-allowed;
		}
	}
// 后面加suffix的意思是后面如果有后缀的话，触发该样式
.m-input_suffix{
	.m-input_inner{
		padding-right: 30px;
	}
}
.m-input_suffix {
	position: absolute;
	right: 10px;
	height: 100%;
	top: 0;
	line-height: 40px;
	text-align: center;
	color: #c0c4cc;
	transition: all .3s;
	z-index: 900;
	:last-child {
		padding-left: 8px;
	}
	i {
		color: #c0c4cc;
		font-size: 14px;
		cursor: pointer;
		transition: color .2s cubic-bezier(.645,.045,.355,1);
	}
	.m-icon-view-atice {
		color: #409eff;
	}
}
}
</style>
