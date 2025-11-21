import { createRouter, createWebHistory } from 'vue-router';

// 홈 뷰 등록
import HomeView from '@/views/HomeView.vue';

// router1 뷰 등록
import BoardList1 from '@/components/router01/BoardList.vue';
import FileList1 from '@/components/router01/FileList.vue';
import PictureList1 from '@/components/router01/PictureList.vue';

// router02
import BoardList2 from '@/components/router02/BoardList.vue';
import BoardDetail2 from '@/components/router02/BoardDetail.vue';

// router03
import BoardList3 from '@/components/router03/BoardList.vue';
import BoardDetail3 from '@/components/router03/BoardDetail.vue';

// router04
import BoardList4 from '@/components/router04/BoardList.vue';
import BoardDetail4 from '@/components/router04/BoardDetail.vue';

// router05
import TheBoardView from '@/views/TheBoardView.vue';
import BoardList5 from '@/components/router05/BoardList.vue';
import BoardDetail5 from '@/components/router05/BoardDetail.vue';
import BoardWrite5 from '@/components/router05/BoardWrite.vue';
import BoardModify5 from '@/components/router05/BoardModify.vue';

// router06
import TheBoardView6 from '@/views/TheBoardView6.vue';
import BoardList6 from '@/components/router06/BoardList.vue';
import BoardDetail6 from '@/components/router06/BoardDetail.vue';

// 라우터 객체 생성
const router = createRouter({
  //라우터가 사용할 히스토리 모드 설정
  history: createWebHistory(import.meta.env.BASE_URL), //브라우저의 히스토리를 관리, 로컬 서버 기본 경로 설정
  //라우터의 라우팅 설정 정의
  routes: [
    //홈 뷰
    {
      path: '/',
      name: 'main',
      component: HomeView,
    },
    // 글쓰기 게시판 뷰
    {
      path: '/r01/board',
      name: 'BoardList',
      component: BoardList1,
    },
    // 파일 게시판 뷰
    {
      path: '/r01/file',
      name: 'FileList',
      component: FileList1,
    },
    // 이미지 게시판 뷰
    {
      path: '/r01/picture',
      name: 'PictureList',
      component: PictureList1,
    },
    // router02
    // 게시글 목록 뷰
    {
      path: '/r02/board',
      component: BoardList2,
    },
    // 게시글 상세 뷰, 동적 매핑을 위한 :no
    {
      path: '/r02/board/:no',
      component: BoardDetail2,
    },
    // router03
    // name 속성 포함한 게시글 목록 뷰
    {
      path: '/r03/board',
      name: 'board3',
      component: BoardList3,
    },
    // name 속성 포함한 게시글 상세 뷰
    {
      path: '/r03/board/:no',
      name: 'boardview3',
      component: BoardDetail3,
    },
    // router04
    // 게시글 목록 뷰, 프로그래밍- click, function(push로 뷰 교체) 형태로 전환되는 뷰
    {
      path: '/r04/board',
      name: 'board4',
      component: BoardList4,
    },
    // 게시글 상세 뷰, 프로그래밍- click, function(push로 뷰 교체) 형태로 전환되는 뷰
    {
      path: '/r04/board/:no',
      name: 'boardview4',
      component: BoardDetail4,
    },
    //router05
    // 중첩된 라우트 /r05/board 를 base로
    //- 상위 라우트: 기본 틀을 담당하는 컴포넌트
    //  하위 라우트(children): 상위 라우트 내부에서 렌더링되는 컴포넌트들
    // TheBoardView 띄우고 ridirect로 일단 거기 RouterView에 목록 띄움

    {
      path: '/r05/board',
      name: 'board5',
      component: TheBoardView,
      // redirect: "/r05/board/list",
      redirect: { name: 'boardlist5' },
      children: [
        {
          path: 'list',
          name: 'boardlist5',
          component: BoardList5,
        },
        {
          path: 'view/:no',
          name: 'boardview5',
          component: BoardDetail5,
        },
        {
          path: 'write',
          name: 'boardwrite5',
          component: BoardWrite5,
        },
        {
          path: 'modify/:no',
          name: 'boardmodify5',
          component: BoardModify5,
        },
      ],
    },
    //router06
    // TheBoardView 띄우고 ridirect로 일단 거기 RouterView에 목록 띄움
    {
      path: '/r06/board',
      name: 'board6',
      component: TheBoardView6,
      // redirect: "/r06/board/list",
      redirect: { name: 'boardlist6' },
      children: [
        {
          path: 'list',
          name: 'boardlist6',
          component: BoardList6,
        },
        {
          path: 'view/:no',
          name: 'boardview6',
          component: BoardDetail6,
          props: true,
        },
      ],
    },
  ],
});

// 라우터 설정이 담긴 컴포넌트 객체를 다른 파일에서 기본적인 내보내기 대상으로 지정
export default router;
