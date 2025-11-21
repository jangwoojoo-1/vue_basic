<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const props = defineProps({ type: String });

const isUseId = ref(false);

const announcement = ref({
  announceNo: 0,
  subject: "",
  content: "",
  userId: "",
  userName: "",
  hit: 0,
  registerDate: "",
});

if (props.type === "modify") {
  console.log(route.params.articleno + "번글 수정하기위해 얻어오자!!");
  announcement.value = {
    announceNo: 100,
    subject: "중요 공지입니다.",
    content: "카페 점검으로 이틀 뒤 이틀 간 카페에 접속할 수 없습니다.",
    userId: "admin",
    userName: "운영자",
    hit: 123,
    registerDate: "31.01.01",
  };
  isUseId.value = true;
}

const subjectErrMsg = ref("");
const contentErrMsg = ref("");
watch(
  () => announcement.value.subject,
  (value) => {
    let len = value.length;
    if (len == 0 || len > 30) {
      subjectErrMsg.value = "제목을 확인해 주세요!!!";
    } else subjectErrMsg.value = "";
  },
  { immediate: true }
);
watch(
  () => announcement.value.content,
  (value) => {
    let len = value.length;
    if (len == 0 || len > 500) {
      contentErrMsg.value = "내용을 확인해 주세요!!!";
    } else contentErrMsg.value = "";
  },
  { immediate: true }
);

// watchEffect(() => {
//   console.log("watchEffect call article >>> ", article.value);
//   let len1 = article.value.subject.length;
//   console.log("제목 len :: " + len1);
//   if (len1 == 0 || len1 > 30) {
//     subjectErrMsg.value = "제목을 확인해 주세요!!!";
//   }
//   let len2 = article.value.subject.length;
//   console.log("내용 len :: " + len2);
//   if (len2 == 0 || len2 > 500) {
//     contentErrMsg.value = "제목을 확인해 주세요!!!";
//   }
//   console.log(subjectErrMsg.value + "    " + contentErrMsg.value);
// });

function onSubmit() {
  // event.preventDefault();

  if (subjectErrMsg.value) {
    alert(subjectErrMsg.value);
  } else if (contentErrMsg.value) {
    alert(contentErrMsg.value);
  } else {
    props.type === "regist" ? writeAnnouncement() : updateAnnouncement();
  }
}

function writeAnnouncement() {
  console.log("글등록하자!!", announcement.value);
}

function updateAnnouncement() {
  console.log("글수정하자!!", announcement.value);
}

const moveList = () => {
  router.push({ name: "announce-list" });
};
</script>

<template>
  <form @submit.prevent="onSubmit" method="POST">
    <div class="mb-3">
      <label for="userid" class="form-label">작성자 ID : </label>
      <input
        type="text"
        class="form-control"
        v-model="announcement.userId"
        :disabled="isUseId"
        placeholder="작성자ID..."
      />
    </div>
    <div class="mb-3">
      <label for="subject" class="form-label">제목 : </label>
      <input
        type="text"
        class="form-control"
        v-model="announcement.subject"
        placeholder="제목..."
      />
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">내용 : </label>
      <textarea class="form-control" v-model="announcement.content" rows="10"></textarea>
    </div>
    <div class="col-auto text-center">
      <button type="submit" class="btn btn-outline-primary mb-3" v-if="type === 'regist'">
        글작성
      </button>
      <button type="submit" class="btn btn-outline-success mb-3" v-else>글수정</button>
      <button type="button" class="btn btn-outline-danger mb-3 ms-1" @click="moveList">
        목록으로이동...
      </button>
    </div>
  </form>
</template>

<style scoped></style>
