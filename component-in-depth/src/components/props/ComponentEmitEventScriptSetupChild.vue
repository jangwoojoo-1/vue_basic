<script setup>
import { ref, reactive } from 'vue';

const props = defineProps({
  color: String,
  isActive: Boolean,
  userInfo: Object,
  defaultMsg: String,
});

// 사용자 입력 저장
const greet = ref(props.defaultMsg);
const name = ref('');
const toggle = ref(true);

// 상위로 보낼 이벤트 정의
// payload 검증이 가능한 형태로 defineEmits 사용
const emit = defineEmits({
  greetingEvent: null, // 인자 없음
  // 인자를 전달할 때 payload 검증
  greetingArgEvent: (payload) => {
    if (payload.trim().length != 0) {
      return true;
    } else {
      console.warn('인사말 입력 !!!');
      return false;
    }
  },
  welcomeEvent: (payload) => {
    if (payload.trim().length != 0) {
      return true;
    } else {
      console.warn('이름 입력 !!!');
      return false;
    }
  },
  toggleEvent: null,
  multiEvent: null,
  errorEvent: null,
});

const toggleEvent = () => {
  if (toggle.value === true) {
    emit('toggle-event', '활성화 상태입니다.');
  } else {
    emit('toggle-event', '비활성화 상태입니다.');
  }
  toggle.value = !toggle.value;
};

const multiEvent = () => {
  emit('multi-event', {
    msg: greet.value,
    timestamp: Date.now(),
    length: greet.value.length,
  });
};

const greetingArgEvent = () => {
  if (greet.value.trim().length === 0) {
    emit('errorEvent', '입력값이 비어있습니다!');
  } else {
    emit('greetingArgEvent', greet.value);
  }
};

const welcomeEvent = () => {
  if (name.value.trim().length === 0) {
    emit('errorEvent', '입력값이 비어있습니다!');
  } else {
    emit('welcomeEvent', name.value);
  }
};
</script>

<template>
  <div class="child" :style="{ backgroundColor: props.color }">
    <h2>Child Component</h2>

    <!-- 인자 없는 emit -->
    <div class="div-btn">
      <button @click="emit('greetingEvent')" :disabled="props.isActive">
        인자 없는 인사하기
      </button>
    </div>

    <!-- 인자 있는 emit -->
    <div>
      <input v-model="greet" placeholder="인사말 입력" />

      <button @click="greetingArgEvent">인자 포함 인사하기</button>
    </div>
    <div>
      <input type="text" v-model="name" />
      <button @click="welcomeEvent">환영 메시지</button>
    </div>
    <div>
      <button @click="toggleEvent">토글하기</button>
    </div>
    <div>
      <h3>객체 출력</h3>
      <p>이름: {{ props.userInfo.name }}</p>
      <p>나이: {{ props.userInfo.age }}</p>
      <p>전공: {{ props.userInfo.major }}</p>
    </div>
    <div>
      <button @click="multiEvent">멀티이벤트</button>
    </div>
  </div>
</template>

<style scoped>
.child {
  background-color: rgb(244, 210, 236);
  padding: 20px;
}
.div-btn {
  margin: 10px;
}
</style>
