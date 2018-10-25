<template>
  <el-collapse v-model="activeName"
               accordion>
    <el-collapse-item v-for="endpoint in endpoints"
                      :key="endpoint.name"
                      :name="endpoint.name">
      <template slot="title">
        <template v-if="endpoint.active">
          <el-tag type="success"
                  size="mini">activating</el-tag>
        </template>
        <template v-else>
          <el-tag type="warning"
                  size="mini">resting</el-tag>
        </template>&nbsp;
        <span v-if="activeName === endpoint.name"
              style="color: #409EFF; font-weight: 600;">{{ endpoint.name }}</span>
        <span v-else>{{ endpoint.name }}</span>
      </template>
      <c-endpoint-detail--quick :endpoint-detail="endpoint" />
    </el-collapse-item>
  </el-collapse>
</template>

<script>
// helpers
import { mapGetters, mapActions } from 'vuex';

// 3rd
import { Collapse, CollapseItem, Button, Tag } from 'element-ui';

// deps
// import router from '../router';

// self
import EndpointDetailQuickView from './EndpointDetailQuickView';

export default {
  name: 'c-list-endpoints',
  components: {
    // 3rd
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [Button.name]: Button,
    [Tag.name]: Tag,
    // self
    [EndpointDetailQuickView.name]: EndpointDetailQuickView,
  },
  beforeMount() {
    this.getEndpoints();
  },
  computed: {
    ...mapGetters({
      endpoints: 'endpoints/endpoints',
    }),
  },
  data() {
    return {
      activeName: '',
    };
  },
  methods: {
    // helpers
    ...mapActions({
      getEndpoints: 'endpoints/getEndpoints',
    }),
    // self
    submitCreateAPIFormHanlder() {
      this.createAPIEndpoint({ ...this.$data });
    },
  },
};
</script>

<style lang="scss">
.el-collapse-item__header {
  padding: 0px 15px;
}

.el-collapse-item__content {
  padding: 15px;
}
</style>

