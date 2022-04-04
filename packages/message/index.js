/*
 * @Author: 马美华
 * @Date: 2022-03-10 13:36:30
 * @LastEditTime: 2022-04-1 18:30:30
 * @LastEditors: 马美华
 * @Description:
 * @FilePath: Markm-Ui组件库开发
 * 代码版权方：'mmh'
 */
import { createVNode, render } from 'vue'
import mMessage from './src/message.vue'

export default ({ text, type,timeout,icon,textColor,bgColor,customClass}) => {
  // 动态创建一个DOM容器
  const div = typeof document !== 'undefined'?typeof document.createElement !== 'undefined'?document.createElement('div'):'':''
  div.setAttribute('class', 'mzlui-meassage-container')
  if(typeof document !== 'undefined'){
    document.body.appendChild(div)
  }
  let timer = null
  // 传递给组件的选项
  const vnode = createVNode(mMessage, { text, type,timeout,icon,textColor,bgColor,customClass})
  render(vnode, div)
  clearTimeout(timer)
  timer = setTimeout(() => {
    render(null, div)
    if(typeof document !== 'undefined'){
      document.body.removeChild(div)
    }
    clearTimeout(timer)
  }, timeout||2500)
}
