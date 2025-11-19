<script>
export default {
  data() {
    return {
      // fruits: ['banana', 'orange', 'apple'],
      gender: 'male',
      selectItem: 'cafeLatte',
      uid:'',
      upw:'',
    };
  },
  methods: {
    login() {
      console.log(`id: ${this.uid}`);
      console.log(`pwd: ${this.upw}`);
    },
    printData() {
      console.log(`${this.uid}`);
      console.log(`${this.upw}`);
    },
  },
};
</script>

<template>
  <form id="loginForm">
    <label for="uid">아이디 : <input type="text" id="uid" v-model="uid"></input></label>
    {{ this.uid }}
    <label for="upw">비밀번호 : <input type="text" id="upw" v-model="upw"></input></label>
    <button type="button" @click="login">로그인</button>
    <!-- <textarea v-model="message"></textarea>
    <button type="button" @click="printData">데이터 출력</button> -->
    <!-- value랑 매칭해서 일치하면 체크박스된 상태로 렌더링됨 -->
    <!-- <label for="banana"
      ><input
        type="checkbox"
        id="banana"
        v-model="fruits"
        value="banana"
      />바나나</label
    >
    <label for="orange"
      ><input
        type="checkbox"
        id="orange"
        v-model="fruits"
        value="orange"
      />오렌지</label
    >
    <label for="apple"
      ><input
        type="checkbox"
        id="apple"
        v-model="fruits"
        value="apple"
      />사과</label
    >
    <label for="male"
      ><input
        type="radio"
        id="gender"
        v-model="gender"
        value="male"
      />남자</label
    >
    <label for="female"
      ><input
        type="radio"
        id="gender"
        v-model="gender"
        value="female"
      />여자</label
      <button type="button" @click="printData">클릭</button>
    > -->
  <!-- 콤보박스의 요소가 사용자가 선택한 option 태그의 value 속성의 값이 v-model 연결된 selectItem 데이터 -->
    <!-- <select v-model="selectItem">
      <option value="americano">아메리카노</option>
      <option value="cafeLatte">카페라떼</option>
      <option value="espresso">에스프레소</option>
    </select>

    <button type="button" @click="printData">클릭</button> -->
  </form>
</template>

<style></style>
