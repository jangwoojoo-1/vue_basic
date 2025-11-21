import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

//createRouter router 객체를 만들 때 사용하는 함수
// createWebHistory  슬래시(/)를 사용해 URL을 관리

const router = createRouter({
  // 라우트 구성 객체
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '', name: 'home', component: HomeView }, //static import - 화면에 렌더링해야 하는 경로가 아니어도 app 시작시점에서 컴포넌트를 메모리에 로드한다.
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'), //dynamic import - 필요한 순간에 로드한다.
    },
    {
      path: '/user/info',
      name: 'userInfo',
      component: () => import('../views/UserInfo.vue'),
    },
    {
      path: '/user/:id',
      name: 'userView',
      component: () => import('../views/UserViewComposition.vue'),
    },
  ],
});

export default router;
