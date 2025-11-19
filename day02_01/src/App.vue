<script>
import { ref, computed } from 'vue';

export default {
  data() {
    return {
      firstName: ref('Minsu'),
      lastName: 'Kim',
      numberArray: [1, 2, 3, 4, 5],
      inputStr: '',
      num: 0,
      arr: [0, 1, 2],
      obj: {
        name: 'younghe',
      },
    };
  },
  computed: {
    fullName() {
      console.log('computed fullName');
      return `${this.lastName} ${this.firstName}`;
    },
    evenSum() {
      return this.numberArray
        .filter((v) => v % 2 == 0)
        .reduce((acc, cur) => acc + cur, 0);
    },
  },
  watch: {
    num(newValue, oldValue) {
      console.log(`old value : ${oldValue}`);
      console.log(`new value : ${newValue}`);
    },
    arr: {
      handler(newValue, oldValue) {
        console.log(`old value : ${oldValue}`);
        console.log(`new value : ${newValue}`);
      },
      deep: true,
      immediate: true,
    },
    obj: {
      handler(newValue, oldValue) {
        console.log(`old value : ${JSON.stringify(oldValue)}`);
        console.log(`new value : ${JSON.stringify(newValue)}`);
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {},
};
</script>
<template>
  <h1>{{ lastName }}-{{ firstName }}</h1>
  <h1>{{ firstName }} - {{ lastName }}</h1>
  <h1>{{ fullName }}</h1>
  <h1>{{ fullName }}</h1>
  <h1>{{ evenSum }}</h1>
  <h1>{{ arr }}</h1>
  <h1>{{ obj }}</h1>
  <button type="button" @click="arr.push(3)">배열값 변경</button>
  <button type="button" @click="obj.age = 25">객체값 변경</button>

  <input type="text" v-model="inputStr" />
</template>
<style></style>
