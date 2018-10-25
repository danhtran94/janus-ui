<template>
  <el-card shadow="hover">
    <div slot="header"
         class="clearfix">
      <span>Login</span>
    </div>
    <el-form label-position="top"
             class="login-form-wrapper">
      <el-form-item label="Username">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password"
                  v-model="password"></el-input>
      </el-form-item>
      <el-button style="float: right;"
                 type="primary"
                 plain
                 @click="submitLoginFormHanlder"
                 :disabled="!isValidLoginInputs">GO</el-button>
    </el-form>
  </el-card>
</template>

<script>
// helpers
import { mapActions } from 'vuex';

// 3rd
import { Card, Button, Form, FormItem, Input } from 'element-ui';

// deps
import router from '../router';

export default {
  name: 'c-login-form',
  components: {
    // 3rd
    [Card.name]: Card,
    [Button.name]: Button,
    [Form.name]: Form,
    [FormItem.name]: FormItem,
    [Input.name]: Input,
  },
  computed: {
    isValidLoginInputs() { return this.username !== '' && this.password !== ''; },
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    // helpers
    ...mapActions({
      userLogin: 'user/login',
    }),
    // self
    submitLoginFormHanlder() {
      this.userLogin({ username: this.username, password: this.password }).then(() => {
        router.push('/');
      }).catch(err => console.log('view error: ', err));
    },
  },
};
</script>

<style lang="scss">
.login-form-wrapper {
  width: 350px;
  overflow: hidden;
}
</style>

