<template>
  <el-row type="flex"
          justify="center">
    <c-login-form></c-login-form>
  </el-row>
</template>

<script>
// 3rd
import { Row } from 'element-ui';

// self
import CLoginForm from '@/components/LoginForm';

export default {
  name: 'p-login',
  components: {
    // 3rd
    [Row.name]: Row,
    // self
    [CLoginForm.name]: CLoginForm,
  },
};
</script>
