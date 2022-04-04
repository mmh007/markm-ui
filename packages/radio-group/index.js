/*
 * @Author: 马美华
 * @Date: 2022-03-10 13:36:30
 * @LastEditTime: 2022-04-1 18:30:30
 * @LastEditors: 马美华
 * @Description:
 * @FilePath: Markm-Ui组件库开发
 * 代码版权方：'mmh'
 */
import mRadioGroup from './src/radio-group.vue'
mRadioGroup.install = app => {
  app.component(mRadioGroup.name, mRadioGroup)
}
export default mRadioGroup
