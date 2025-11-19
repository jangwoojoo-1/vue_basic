<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      errorMessage1: null,
      errorMessage2: null,
      errorMessage3: null,
      notMatchMsg: null,
    };
  },
  computed: {
    isValid() {
      const confirmInput =
        this.name && this.email && this.password && this.passwordConfirm;
      const confirmError =
        !this.errorMessage1 &&
        !this.errorMessage2 &&
        !this.errorMessage3 &&
        !this.notMatchMsg;
      return confirmError && confirmInput;
    },
  },
  watch: {
    passwordConfirm: {
      handler(newValue) {
        if (newValue.length === 0) {
          this.errorMessage2 = null;
        } else if (newValue !== this.password) {
          this.notMatchMsg = '비밀번호가 일치하지 않습니다.';
        } else {
          this.notMatchMsg = null;
        }
      },
      deep: true,
      immediate: true,
    },
    password: {
      handler(newValue) {
        if (newValue.length === 0) {
          this.errorMessage2 = null;
        } else if (newValue.length < 8) {
          this.errorMessage3 = '비밀번호는 8글자 이상이어야 합니다.';
        } else {
          this.errorMessage3 = null;
        }
      },
      deep: true,
    },

    name: {
      handler(newValue) {
        if (newValue.length === 0) {
          this.errorMessage2 = null;
        } else if (newValue.length < 2) {
          this.errorMessage1 = '이름은 두 글자 이상 입력해야 합니다.';
        } else {
          this.errorMessage1 = null;
        }
      },
      deep: true,
    },

    email: {
      handler(newValue) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (newValue.length === 0) {
          this.errorMessage2 = null;
        } else if (!emailRegex.test(newValue)) {
          this.errorMessage2 = '올바른 이메일 형식이 아닙니다.';
        } else {
          this.errorMessage2 = null;
        }
      },
      deep: true,
    },
  },
  methods: {
    submit() {
      alert(`
        회원가입 성공!
        name: ${this.name}
        email: ${this.email}
        password: ${this.password}
        `);
      this.clear();
    },
    // clear() {
    //   this.name = '';
    //   this.email = '';
    //   this.password = '';
    //   this.passwordConfirm = '';
    //   this.errorMessage1 = null;
    //   this.errorMessage2 = null;
    //   this.errorMessage3 = null;
    //   this.notMatchMsg = null;
    // },
  },
};
</script>

<template>
  <div>
    <form>
      <label>이름: <input v-model="name" type="text" /></label>
      <br />
      <p v-if="errorMessage1">{{ errorMessage1 }}</p>
      <br /><br /><label>이메일: <input v-model="email" type="text" /></label>
      <br />
      <p v-if="errorMessage2">{{ errorMessage2 }}</p>
      <br /><br /><label
        >비밀번호: <input v-model="password" type="password"
      /></label>
      <br />
      <p v-if="errorMessage3">{{ errorMessage3 }}</p>
      <br /><br /><label
        >비밀번호 확인: <input v-model="passwordConfirm" type="password"
      /></label>
      <br />
      <p v-if="notMatchMsg">{{ this.notMatchMsg }}</p>
      <br /><br /><button type="button" @click="submit" :disabled="!isValid">
        회원가입
      </button>
    </form>
  </div>
</template>

<style>
p {
  color: red;
}
</style>
