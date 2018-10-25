<template>
  <div>
    <el-row type="flex"
            justify="center"
            align="middle">
      <el-menu style="width: 100%;"
               default-active="1"
               mode="horizontal"
               @select="() => {}">
        <el-menu-item index="1">{{ server }}</el-menu-item>
      </el-menu>
    </el-row>
  </div>
</template>

<script>
import { Row, Menu, MenuItem, Submenu } from 'element-ui';

export default {
  name: 'l-nav',
  components: {
    [Row.name]: Row,
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem,
    [Submenu.name]: Submenu,
  },
  data() {
    return {
      server: process.env.__JANUS_ADMIN__,
    };
  },
};
</script>

<style lang="scss">
.el-menu {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-stroke: 0.45px rgba(0, 0, 0, 0.1);
}
</style>
