/*
 * @Author: 马美华
 * @Date: 2022-03-10 13:36:30
 * @LastEditTime: 2022-04-1 18:30:30
 * @LastEditors: 马美华
 * @Description:
 * @FilePath: Markm-Ui组件库开发
 * 代码版权方：'mmh'
 */
//导入组件
import mButton from './button/index.js';
import mDialog from './dialog/index.js';
import mInput from './input/index.js';
import mSwitch from './switch/index.js';
import mRadio from './radio/index.js';
import mRadioGroup from './radio-group/index.js';
import mCheckbox from './checkbox/index.js';
import mCheckboxGroup from './checkbox-group/index.js';
import mForm from './form/index.js';
import mFormItem from './form-item/index.js';
import Message  from './message/index.js'

const components = [
  mButton,
  mDialog,
  mInput,
  mSwitch,
  mRadio,
  mRadioGroup,
  mCheckbox,
  mCheckboxGroup,
  mForm,
  mFormItem
]

const install = function (app) {
  // 全局注册所有组件
  components.forEach((item) => {
    app.component(item.name, item)
  })
  app.config.globalProperties.$message = Message;
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


export default {install,Message}
