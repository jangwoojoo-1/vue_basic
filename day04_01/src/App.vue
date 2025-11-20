<script setup>
import DefineEmits from './components/DefineEmits.vue';
import DefineProps from './components/DefineProps.vue';
import WatchEeffectEx1 from './components/WatchEeffectEx1.vue';
import WatchEx1 from './components/WatchEx1.vue';
import WatchEx2 from './components/WatchEx2.vue';
import WatchEx3 from './components/WatchEx3.vue';
import WatchEx4 from './components/WatchEx4.vue';
import WatchEx5 from './components/WatchEx5.vue';
import WatchPostEffectEx1 from './components/WatchPostEffectEx1.vue';
import { reactive, ref } from 'vue';
const count = ref(0);
const state = reactive({ count: 0 });

const countIncrement = (num1, num2, num3) => {
  count.value = count.value + num1 + num2 + num3;
};
const stateCountIncrement = (arr) => {
  state.count = arr[0];
};
</script>

<template>
  <!-- <WatchEx1 />
  <WatchEx2 />
  <WatchEx3 />
  <WatchEx4 />
  <WatchEx5 /> -->
  <WatchEeffectEx1 />
  <WatchPostEffectEx1 />
  <DefineProps :count="count" :state="state" />
  <h1>{{ count }}</h1>
  <h1>{{ state.count }}</h1>
  <DefineEmits
    @count-increment="countIncrement"
    @state-count-increment="
      (arr) => {
        stateCountIncrement(arr);
      }
    "
  />
</template>
