<template>
  <div style="overflow: hidden;">
    <div style="padding-bottom: 10px;">
      <el-form size="mini"
               label-position="right"
               label-width="20%"
               class="update-api-form-wrapper">
        <el-form-item>
          <el-checkbox v-model="detail.active">Active</el-checkbox>
        </el-form-item>
        <el-form-item label="Match Hostname">
          <template v-for="(host, index) in detail.proxy.hosts">
            <el-input :key="index"
                      v-model="detail.proxy.hosts[index]"
                      placeholder="*"></el-input>
            <el-button :key="index"
                       size="mini"
                       type="info"
                       @click="delHost(index)">del</el-button>
            <br :key="index" />
          </template>
          <el-button size="mini"
                     type="info"
                     style="margin-top: 3px;"
                     @click="addHost">more</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="detail.proxy.preserve_host">Preserve Host</el-checkbox>
        </el-form-item>
        <el-form-item label="Match Listen Path">
          <el-input v-model="detail.proxy.listen_path"
                    placeholder="/example/*"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="detail.proxy.strip_path">Strip Path</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="detail.proxy.append_path">Append Path</el-checkbox>
        </el-form-item>
        <el-form-item label="Upstream Target">
          <el-input v-model="detail.proxy.upstreams.targets[0].target"
                    type="textarea"
                    placeholder="http://www.mocky.io/v2/595625d22900008702cd71e8"></el-input>
        </el-form-item>
        <el-form-item label="Methods">
          <el-checkbox-group v-model="detail.proxy.methods">
            <el-checkbox-button label="GET"
                                name="method"></el-checkbox-button>
            <el-checkbox-button label="DELETE"
                                name="method"></el-checkbox-button>
          </el-checkbox-group>
          <el-checkbox-group v-model="detail.proxy.methods">
            <el-checkbox-button label="POST"
                                name="method"></el-checkbox-button>
            <el-checkbox-button label="PUT"
                                name="method"></el-checkbox-button>
            <el-checkbox-button label="PATCH"
                                name="method"></el-checkbox-button>
          </el-checkbox-group>
          <el-checkbox-group v-model="detail.proxy.methods">
            <el-checkbox-button label="HEAD"
                                name="method"></el-checkbox-button>
            <el-checkbox-button label="OPTIONS"
                                name="method"></el-checkbox-button>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
    </div>
    <el-button size="small"
               style="float: right; margin-left: 5px;"
               icon="el-icon-delete"
               circle
               type="danger"
               round
               @click="deleteEndpointHandler"></el-button>
    <el-button size="small"
               style="float: left; margin: 0;"
               type="primary"
               round
               @click="updateEndpointHandler">Update</el-button>

  </div>

</template>

<script>
// helpers
import { mapActions } from 'vuex';

// 3rd
import { Card, Button, Form, FormItem, Input, CheckboxGroup, CheckboxButton, Checkbox } from 'element-ui';

// deps
// import router from '../router';

export default {
  name: 'c-endpoint-detail--quick',
  components: {
    // 3rd
    [Card.name]: Card,
    [Button.name]: Button,
    [Form.name]: Form,
    [FormItem.name]: FormItem,
    [Input.name]: Input,
    [CheckboxGroup.name]: CheckboxGroup,
    [CheckboxButton.name]: CheckboxButton,
    [Checkbox.name]: Checkbox,
  },
  props: {
    endpointDetail: Object,
  },
  data() {
    return {
      detail: { ...this.endpointDetail },
    };
  },
  computed: {

  },
  methods: {
    // helpers
    ...mapActions({
      createAPIEndpoint: 'endpoints/createAPIEndpoint',
      removeEndpoint: 'endpoints/removeEndpoint',
      updateEndpoint: 'endpoints/updateEndpoint',
    }),
    // self
    addHost() {
      this.detail.proxy.hosts.push('');
    },
    delHost(index) {
      this.detail.proxy.hosts.splice(index, 1);
    },
    updateEndpointHandler() {
      this.updateEndpoint({
        currentEndpointName: this.endpointDetail.name,
        modifiedEndpoint: { ...this.$data.detail } });
    },
    deleteEndpointHandler() {
      this.removeEndpoint(this.detail.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.update-api-form-wrapper {
  // width: 350px;
  overflow: hidden;
}
.el-input,
.el-textarea {
  width: 70%;
}
</style>

