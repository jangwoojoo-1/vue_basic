<script setup>
import { reactive, ref } from 'vue';
import AppPropsLiteral from './components/props/AppPropsLiteral.vue';
import AppPropsObject from './components/props/AppPropsObject.vue';
import ComponentEmitEventTemplate from './components/props/ComponentEmitEventTemplate.vue';
import ComponentEmitEventScriptSetup from './components/props/ComponentEmitEventScriptSetup.vue';
import MenuBar from './components/props/MenuBar.vue';

const view = ref('');
const menu = reactive([
  { key: 'literal', label: 'Props Literal Demo' },
  { key: 'obj', label: 'Props Object Demo' },
  { key: 'template', label: 'Event Template Demo' },
  { key: 'script', label: 'Event Script Setup Demo' },
]);

const selectMenu = (newView) => {
  view.value = newView;
};
</script>

<template>
  <div class="container">
    <TheHeading />
    <MenuBar :menu="menu" :view="view" @select-menu="selectMenu" />
    <!-- 변수일 때는 자식으로 보내는 데이터의 변수명 앞에 :를 붙이고 문자열 리터럴 그대로 보낼 때는 : 안 붙임 -->
    <AppPropsLiteral v-if="view === 'literal'" view-title="좋아하는 과일은?" />
    <AppPropsObject
      v-if="view === 'obj'"
      view-title="좋아하는 과일은? (Object data 전달)"
    />
    <ComponentEmitEventTemplate
      v-if="view === 'template'"
      view-title="인사 (template)"
    />
    <ComponentEmitEventScriptSetup
      v-if="view === 'script'"
      view-title="인사? (script)"
    />
  </div>
</template>

<style scoped>
.container {
  text-align: center;
}
.menu {
  margin: 0.3rem 0;
}
button {
  margin: 0.2rem;
  padding: 0.5rem;
}
.active {
  background-color: steelblue;
  color: aliceblue;
  border: 0;
  border-radius: 5px;
}
</style>
