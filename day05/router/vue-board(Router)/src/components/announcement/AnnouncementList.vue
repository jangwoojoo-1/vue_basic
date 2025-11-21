<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import ThePageNavigation from "../common/ThePageNavigation.vue";
import VSelect from "../common/VSelect.vue";

const router = useRouter();

const selectOption = ref([
  { text: "검색조건", value: "" },
  { text: "글번호", value: "article_no" },
  { text: "제목", value: "subject" },
  { text: "작성자아이디", value: "user_id" },
]);

const announcementList = [
  {
    announceNo: 100,
    subject: "중요 공지입니다.",
    userId: "admin",
    userName: "운영자",
    hit: 7770,
    registerDate: "30.12.25",
  },
  {
    announceNo: 99,
    subject: "오늘 일어난 사건 관련 공지입니다.",
    userId: "admin",
    userName: "운영자",
    hit: 800,
    registerDate: "30.12.24",
  },
  {
    announceNo: 98,
    subject: "앞으로 주의 부탁드립니다.",
    userId: "admin",
    userName: "운영자",
    hit: 787,
    registerDate: "30.12.21",
  },
  {
    announceNo: 97,
    subject: "추후 일정입니다.",
    userId: "admin",
    userName: "운영자",
    hit: 3377,
    registerDate: "30.12.20",
  },
  {
    announceNo: 96,
    subject: "한 번씩 읽어주시기 바랍니다.",
    userId: "admin",
    userName: "운영자",
    hit: 10047,
    registerDate: "30.12.20",
  },
];
const announcements = reactive(announcementList);
const currentPage = ref(7);
const totalPage = ref(35);
const param = ref({
  pgno: currentPage.value,
  spp: import.meta.env.VITE_ANNOUNCEMENT_LIST_SIZE,
  key: "",
  word: "",
});

onMounted(() => {
  // param.value.pgno = 1;
  getAnnouncementList();
});

const changeKey = (val) => {
  console.log("BoarList에서 선택한 조건 : " + val);
  param.value.key = val;
};

const getAnnouncementList = () => {
  if (param.value.word && !param.value.key) console.log("검색 조건을 선택하세요.");
  console.log("서버에서 글목록 얻어오자!!!", param.value);
};

const onPageChange = (val) => {
  console.log(val + "번 페이지로 이동 준비 끝!!!");
  param.value.pgno = val;
  getAnnouncementList();
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <h2 class="my-3 py-3 shadow-sm bg-light text-center">
          <mark class="sky">공지사항목록</mark>
        </h2>
      </div>
      <div class="col-lg-10">
        <div class="row align-self-center mb-2">
          <div class="col-md-2 text-start">
            <button type="button" class="btn btn-outline-primary btn-sm">
              <router-link :to="`/announcement/write/`">글쓰기</router-link>
            </button>
          </div>
          <div class="col-md-5 offset-5">
            <form class="d-flex">
              <VSelect :selectOption="selectOption" @onKeySelect="changeKey" />
              <div class="input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  v-model="param.word"
                  placeholder="검색어..."
                />
                <button class="btn btn-dark" type="button" @click="getAnnouncementList">
                  검색
                </button>
              </div>
            </form>
          </div>
        </div>
        <table class="table table-hover">
          <thead>
            <tr class="text-center">
              <th scope="col">글번호</th>
              <th scope="col">제목</th>
              <th scope="col">작성자</th>
              <th scope="col">조회수</th>
              <th scope="col">작성일</th>
            </tr>
          </thead>
          <tbody>
            <router-view :announcements="announcements"></router-view>
          </tbody>
        </table>
      </div>
      <ThePageNavigation
        :current-page="currentPage"
        :total-page="totalPage"
        @pageChange="onPageChange"
      />
    </div>
  </div>
</template>

<style scoped></style>
