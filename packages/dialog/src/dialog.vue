<template>
<!-- 对话框遮罩层 -->
  <div>
		<transition name="dialog-fade">
			<div class="m-dialog_layer" v-if="modelValue"></div>
			</transition>
			<!-- 设置局部width、top -->
			<!-- @click.self="close" 绑定self:指点击自己 -->
			<div class="m-dialog_wrapper" @click.self="close" :class="modelValue ? 'm-dialog_translateY' : 'm-dialog_translateX'">
				<div class="m-dialog" :style="{width, marginTop: top}">
					<div class="m-dialog_header">
						<!-- 左侧title -->
						<slot name="title">
							<span class="m-dialog_title">{{ title }}</span>
						</slot>
						<!-- 右侧iocn -->
						<button @click.prevent="close" class="m-dialog_headerbtn">
							<i class="m-icon-shanchu1"></i>
						</button>
					</div>
					<!-- 默认插槽，定义内容 -->
					<div class="m-dialog_body">
						<slot></slot>
					</div>
					<!-- 定义按钮 || $slots.footer -->
					<div class="m-dialog_footer" v-if="$slots.footer">
						<slot name="footer"></slot>
					</div>
				</div>
			</div>

	</div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'mDialog',
	props: {
		title: {
			type: String,
			default: '提示'
		},
		width: {
			type: String,
			default: '50%',
		},
		top: {
			type: String,
			default: '15vh'
		},
		// 控制整个弹框的参数
		modelValue: {
			type: Boolean,
			default: false,
		}
	},
	setup(props,{emit}) {
    /**
     * @method close
     * @description dialog点击事件
     * - 更新dialog值
     * - 双向绑定更新value值
     * - 对外暴露change事件
     * - 支持Form表单的验证
     */
		const close = () => {
			emit('update:modelValue',false)
      emit('close',false)
		}
		return {
			close
		}
	},
})
</script>

<style lang="scss" scoped>
.m-dialog_layer {
	position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2000;
  background-color: rgba(0,0,0,0.5);
}
.m-dialog_wrapper{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
	.m-dialog{
		position: relative;
		margin: 0 auto;
		background: #fff;
		border-radius: 2px;
		box-shadow: 0 1px 3px rgba(0,0,0,0.3);
		box-sizing: border-box;
		width: 30%;
		&_header{
			padding: 20px 20px 10px;
			.m-dialog_title{
				line-height: 24px;
				font-size: 18px;
				color: #303133;
			}
			.m-dialog_headerbtn{
				position: absolute;
				top: 20px;
				right: 20px;
				padding: 0;
				background: transparent;
				border: none;
				outline: none;
				cursor: pointer;
				font-size: 16px;
				.m-icon-shanchu1{
					color:909399
				}
			}
		}
		&_body{
			padding: 30px 20px;
			color: #606266;
			font-size: 14px;
			word-break: break-all;
		}
		&_footer{
			padding: 10px 20px 20px;
			text-align: right;
			box-sizing: border-box;
			// 深度选择器 scss ::v-deep less /deep/ css >>>
			::v-deep .m-button:first-child{
				margin-right: 20px;
			}
		}
	}
}
.dialog-fade-enter-active{
  animation: fade .3s;
}
.dialog-fade-leave-active{
  animation: fade .3s reverse;
}
@keyframes fade{
  0% {
    opacity: 0;
    // transform: translateY(-20px);
  }
  100%{
    opacity: 1;
    // transform: translateY(0);
  }
}
/* 弹窗动画设置 */
.m-dialog_translateX {
  -webkit-transform: translateZ(0) scale(0);
  transition: all .4s ease-in-out;
  opacity: 0;
  z-index: 2001;
}
.m-dialog_translateY {
  -webkit-transform: translateZ(0) scale(1.05);
  transition: all .6s ease-in-out;
  opacity: 1;
  z-index: 2002;
}
</style>
