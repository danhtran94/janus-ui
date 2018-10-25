<template>
  <div>
    <el-row class="header__logo-wrapper"
            type="flex"
            justify="center"
            align="middle">
      <img class="header__logo"
           src="@/assets/janus-logo.png"
           alt="">
      <span class="header__sitename">API Gateway Management</span>
    </el-row>
  </div>
</template>

<script>
import { Row } from 'element-ui';

export default {
  name: 'l-header',
  components: {
    [Row.name]: Row,
  },
};
</script>

<style lang="scss">
.header__logo-wrapper {
  padding: 20px 0px;
  vertical-align: middle;
}

.header__logo {
  height: 50px;
}

.header__sitename {
  margin-left: 1rem;
  font-size: 1.3rem;
  font-weight: 500;
}
</style>
