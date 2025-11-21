import { createApp } from 'vue';
import App from './App.vue';
//라우터 불러오기
import router from './router';

// 화면 꾸미기 위한 bootstrap 불러오기
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// Vue 애플리케이션 인스턴스 생성
const app = createApp(App);
//애플리케이션에서 라우터 사용
app.use(router);
// index.html의 div에 마운트하기
app.mount('#app');
