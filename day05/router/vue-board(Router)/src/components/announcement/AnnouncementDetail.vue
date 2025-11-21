<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const announcement = ref({
  announceNo: 100,
  subject: "중요 공지입니다.",
  content: "카페 점검으로 이틀 뒤 이틀 간 카페에 접속할 수 없습니다.",
  userId: "admin",
  userName: "운영자",
  hit: 123,
  registerDate: "31.01.01",
});

onMounted(() => {
  getAnnouncement();
});

const getAnnouncement = () => {
  console.log(route.params.articleno + "번글 얻으러가자!!!!");
};

const moveList = () => {
  router.push({ name: "announce-list" });
};

const moveModify = () => {
  router.push({ name: "announce-modify", params: { announceNo: route.params.announceNo } });
};

const onDeleteAnnouncement = () => {
  console.log(route.params.announceNo + "번글 삭제하러가자!!!");
  console.log("삭제 성공했으면 글목록으로 가자!!!");
  moveList();
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <h2 class="my-3 py-3 shadow-sm bg-light text-center">
          <mark class="sky">글보기</mark>
        </h2>
      </div>
      <div class="col-lg-10">
        <div class="row my-2">
          <h2 class="text-secondary px-5">
            {{ announcement.announceNo }}. {{ announcement.subject }}
          </h2>
        </div>
        <div class="row">
          <div class="col-md-8">
            <div class="clearfix align-content-center">
              <img
                class="avatar me-2 float-md-start bg-light p-2"
                src="https://raw.githubusercontent.com/twbs/icons/main/icons/person-fill.svg"
              />
              <p>
                <span class="fw-bold">{{ announcement.userName }}</span> <br />
                <span class="text-secondary fw-light">
                  {{ announcement.registerDate }}1 조회 : {{ announcement.hit }}
                </span>
              </p>
            </div>
          </div>
          <div class="col-md-4 align-self-center text-end">댓글 : 17</div>
          <div class="divider mb-3"></div>
          <div class="text-secondary" v-html="announcement.content"></div>
          <div class="divider mt-3 mb-3"></div>
          <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-outline-primary mb-3" @click="moveList">
              글목록
            </button>
            <button type="button" class="btn btn-outline-success mb-3 ms-1" @click="moveModify">
              글수정
            </button>
            <button
              type="button"
              class="btn btn-outline-danger mb-3 ms-1"
              @click="onDeleteAnnouncement"
            >
              글삭제
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
