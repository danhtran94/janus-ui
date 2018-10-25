<template>
  <el-container id="app">
    <el-header height="auto">
      <l-header />
      <l-nav v-if="isLogged" />
    </el-header>
    <el-main>
      <l-main />
    </el-main>
  </el-container>
</template>

<script>
// deps
import { mapGetters } from 'vuex';
// 3rd
import { Container, Header, Main } from 'element-ui';
// self
import LHeader from './layout/Header';
import LMain from './layout/Main';
import LNav from './layout/Nav';

export default {
  name: 'App',
  computed: {
    ...mapGetters({ isLogged: 'user/isLogged' }),
  },
  components: {
    // 3rd
    [Container.name]: Container,
    [Header.name]: Header,
    [Main.name]: Main,
    // self
    [LHeader.name]: LHeader,
    [LMain.name]: LMain,
    [LNav.name]: LNav,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,500");

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-stroke: 0.45px rgba(0, 0, 0, 0.1);
}
</style>
