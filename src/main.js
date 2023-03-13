import { createApp } from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import {
  Form, Field, ErrorMessage, defineRule, configure
} from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import './style.css'
import App from './App.vue'
import router from './router'

import './assets/all.scss'

// 載入規則
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})
defineRule('phone', (value) => {
  const pattern = /^09\d{8}$/ // 以 09 開頭，後面接 8 位數字
  return pattern.test(value) || '請輸入有效的手機號碼，需為 09 開頭，且長度為十碼'
})
configure({
  // 載入繁體中文語系
  generateMessage: localize({ zh_TW: zhTW }),
  // 當輸入任何內容直接進行驗證
  validateOnInput: true
})
// 設定預設語系
setLocale('zh_TW')

const app = createApp(App)

app.use(VueAxios, axios)
app.use(router)

app.component('VField', Field)
app.component('VForm', Form)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app')
