<template>
  <el-row type="flex"
          style="flex-wrap: wrap;"
          :gutter="20">
    <el-col :xs="24"
            :md="7">
      <c-create-api-form/>
    </el-col>
    <el-col :xs="24"
            :md="17">
      <c-list-endpoints></c-list-endpoints>
    </el-col>
  </el-row>
</template>

<script>
// 3rd
import { Row, Col } from 'element-ui';

// self
import CreateAPIForm from '@/components/CreateAPIForm';
import ListEndpoints from '@/components/ListEndpoints';

export default {
  name: 'p-home',
  components: {
    // 3rd
    [Row.name]: Row,
    [Col.name]: Col,
    // self
    [CreateAPIForm.name]: CreateAPIForm,
    [ListEndpoints.name]: ListEndpoints,
  },
};
</script>

<style lang="scss">
.el-col {
  margin-bottom: 20px;
}
</style>

