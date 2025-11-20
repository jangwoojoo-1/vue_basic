<script setup>
// 입력값을 반응형으로 관리하기 위해 ref 사용
import { ref, defineProps } from 'vue';

const props = defineProps({
  color: String,
  isActive: Boolean,
  userInfo: Object,
  defaultMsg: String,
});

// greet: input과 v-model로 양방향 바인딩되는 문자열 상태
const greet = ref(props.defaultMsg);
const name = ref('');
const toggle = ref(true);

const emit = defineEmits([
  'toggle-event',
  'multi-event',
  'error-event',
  'greeting-arg-event',
  'welcome-event',
]);

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
    emit('error-event', '입력값이 비어있습니다!');
  } else {
    emit('greeting-arg-event', greet.value);
  }
};

const welcomeEvent = () => {
  if (name.value.trim().length === 0) {
    emit('error-event', '입력값이 비어있습니다!');
  } else {
    emit('welcome-event', name.value);
  }
};
</script>

<template>
  <div class="child" :style="{ backgroundColor: props.color }">
    <h3>Child 영역입니다</h3>

    <!-- 1) 인자 없이 이벤트만 올리는 버튼 -->
    <div class="div-btn">
      <!--
              @click="$emit('greetingEvent')"
              - 부모에게 'greetingEvent'라는 이름의 커스텀 이벤트를 보낸다.
              - payload(데이터)는 없음.
            -->
      <button @click="$emit('greetingEvent')" :disabled="props.isActive">
        인사해요
      </button>
    </div>

    <!-- 2) 인자를 함께 보내는 버튼 -->
    <div class="div-btn">
      <!--
              v-model="greet"
              - input의 value와 greet(ref)을 양방향 바인딩
              - 사용자가 입력할 때마다 greet.value가 자동으로 갱신됨
            -->
      <input type="text" v-model="greet" />

      <!--
              @click="$emit('greetingArgEvent', greet)"
              - 'greetingArgEvent'라는 이름으로 이벤트를 발생시키면서
                두 번째 인자로 greet 값을 payload로 함께 보냄.
              - 템플릿 안이라서 ref 자동 언래핑 → greet는 greet.value로 전달된다고 보면 됨.
            -->
      <button @click="greetingArgEvent">인사해요(인자전달)</button>
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
/* 자식 영역 배경 스타일 */
.child {
  background-color: rgb(210, 236, 244);
  padding: 20px;
  color: white;
}

/* 버튼들과 input 주변 여백 */
.div-btn {
  margin: 10px;
}
</style>
