import { createApp } from 'vue'
import App from './App.vue'
import ydesign from '@ydesign/components'

const app = createApp(App)
app.use(ydesign)

app.mount('#app')
