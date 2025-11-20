<script setup>
import { ref, reactive } from 'vue';
import ComponentEmitEventScriptSetupChild from './ComponentEmitEventScriptSetupChild.vue';

// 상위가 받는 props (App.vue에서 내려줌)
defineProps({
  viewTitle: String,
});

// 하위에서 emit을 받으면 message 내용이 갱신됨
const message = ref('');
const messages = reactive([]);
const buttonActive = ref(true);
const isError = ref(false);
const userInfo = reactive({
  name: '신세계',
  age: 20,
  major: 'Computer Science',
});
const multiObject = reactive({
  msg: '',
  timestamp: null,
  length: 0,
});

// (이벤트 1) 인자 없는 greeting 이벤트
// Child에서 greeting-event 버튼을 클릭하면 실행됨
const greet = () => {
  message.value = '지금 이 순간도 너의 성공 이야기의 한 페이지야~';
  isError.value = false;
};

// (이벤트 2) Child가 인자를 전달할 때
const greetArg = (greet) => {
  message.value = greet; // payload 반영
  messages.push(greet);
  isError.value = false;
};
const welcome = (name) => {
  alert(`${name}님 환영합니다!`);
};
const toggle = (msg) => {
  message.value = msg;
  isError.value = false;
};

const multi = (object) => {
  multiObject.msg = object.msg;
  multiObject.timestamp = new Date(object.timestamp).toLocaleString();
  multiObject.length = object.length;
};

const error = (msg) => {
  message.value = msg;
  isError.value = true;
};
</script>

<template>
  <div>
    <!-- 상위에게 내려온 props 표시 -->
    <h1>{{ viewTitle }}</h1>
    <button type="text" @click="buttonActive = !buttonActive">
      인사하기 상태 버튼
    </button>

    <!-- 하위 컴포넌트에서 두 종류의 이벤트를 emit -->
    <ComponentEmitEventScriptSetupChild
      v-on:greeting-event="greet"
      @greeting-arg-event="greetArg"
      @welcome-event="welcome"
      color="aqua"
      :isActive="buttonActive"
      @toggle-event="toggle"
      :userInfo="userInfo"
      @multi-event="multi"
      defaultMsg="안녕하세요!!"
      @error-event="error"
    />

    <!-- 하위 emit 처리 결과 표시 -->
    <h3 :class="{ error: isError }">{{ message }}</h3>
    <div>
      <h3>메시지 리스트</h3>
      <ul>
        <li v-for="(value, index) in messages" :key="index">{{ value }}</li>
      </ul>
    </div>
    <div>
      <p>메시지: {{ multiObject.msg }}</p>
      <p>길이: {{ multiObject.length }}</p>
      <p>전송시간: {{ multiObject.timestamp }}</p>
    </div>
  </div>
</template>

<style scoped>
/* 현재는 스타일 없음 */
.error {
  color: red;
}
</style>
