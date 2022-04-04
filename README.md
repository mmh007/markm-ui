## Markm-Ui


### Document

- [中文文档](http://test.mameihua.top/)
- [更新日志](./FAQ.md)
- [vue3项目搭建](https://mp.weixin.qq.com/s/MIR_bVtiL2JuvdV_ij89UA)

  <img width="100%" src="https://7863-xcx-invitation-card-2c6j77719d27-1258798776.tcb.qcloud.la/ling_shi/2.png?sign=ff871f8106f71bcec74cfff9c18aea1e&t=1649055998" alt="首页模块">
  <img width="100%" src="https://7863-xcx-invitation-card-2c6j77719d27-1258798776.tcb.qcloud.la/ling_shi/1.png?sign=c8b4f510423849ac3c4a54bb109ffcaf&t=1649056011" alt="组件模块">

### Install

```bash
npm i markm-ui -S
```

### Quick Start

- Global

```javascript
import { createApp } from "vue";
import MarkmUi from 'markm-ui';
import "markm-ui/dist/markm-ui.css";

const app = createApp(App)
app.use(MarkmUi);
app.mount('#app')
```

- On demand

```javascript
import { createApp } from "vue";
import { Button, Switch } from 'markm-ui';

const app = createApp(App);
app.use(Button).use(Switch);
app.mount('#app');
```

### Organization

Welcome to discuss with the author face to face, experience the infrastructure and development of the component library, put forward requirements and joint maintenance!  Looking forward to your joining us

<div style="display: inline-block;">
  <span>QQ</span>
  <br>
  <img width="210" src="https://7863-xcx-invitation-card-2c6j77719d27-1258798776.tcb.qcloud.la/ling_shi/20220331190026.jpg?sign=27e02ad512c61ee7f7e1764a14a07d3c&t=1649055946" alt="qq群二维码">
</div>

<div style="display: inline-block;">
  <span>Wechat</span>
  <br>
  <img width="210" src="https://7863-xcx-invitation-card-2c6j77719d27-1258798776.tcb.qcloud.la/ling_shi/weixin.png?sign=e5a252434c5d48e2046cb10d06cf5c81&t=1649055923" alt="微信群二维码">
</div>


### Star 

If you like the market UI component library, thank you very much for giving a star or participating in project maintenance ~



npm install --save-dev markdown-it-chain