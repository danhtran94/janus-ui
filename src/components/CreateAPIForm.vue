<template>
  <el-card shadow="hover">
    <div slot="header"
         class="clearfix">
      <span>Add API Endpoint</span>
    </div>
    <el-form size="mini"
             label-position="top"
             class="create-api-form-wrapper">
      <el-form-item label="Endpoint Name">
        <el-input v-model="name"
                  placeholder="my-example-endpoint"></el-input>
      </el-form-item>
      <el-form-item label="Match Hostname">
        <el-input v-model="hostName"
                  placeholder="*.example.com"></el-input>
      </el-form-item>
      <el-form-item label="Match Listen Path">
        <el-input v-model="listenPath"
                  placeholder="/example/*"></el-input>
      </el-form-item>
      <el-form-item label="Upstream Target">
        <el-input v-model="upstreamTarget"
                  placeholder="http://www.mocky.io/v2/595625d22900008702cd71e8"></el-input>
      </el-form-item>
      <el-form-item label="Methods">
        <el-checkbox-group v-model="methods">
          <el-checkbox-button label="GET"
                              name="method"></el-checkbox-button>
          <el-checkbox-button label="DELETE"
                              name="method"></el-checkbox-button>
        </el-checkbox-group>
        <el-checkbox-group v-model="methods">
          <el-checkbox-button label="POST"
                              name="method"></el-checkbox-button>
          <el-checkbox-button label="PUT"
                              name="method"></el-checkbox-button>
          <el-checkbox-button label="PATCH"
                              name="method"></el-checkbox-button>
        </el-checkbox-group>
        <el-checkbox-group v-model="methods">
          <el-checkbox-button label="HEAD"
                              name="method"></el-checkbox-button>
          <el-checkbox-button label="OPTIONS"
                              name="method"></el-checkbox-button>
        </el-checkbox-group>
      </el-form-item>
      <el-button size="small"
                 style="float: right;"
                 type="primary"
                 plain
                 @click="submitCreateAPIFormHanlder">Create</el-button>
    </el-form>
  </el-card>
</template>

<script>
// helpers
import { mapActions } from 'vuex';

// 3rd
import { Card, Button, Form, FormItem, Input, CheckboxGroup, CheckboxButton } from 'element-ui';

// deps
// import router from '../router';

export default {
  name: 'c-create-api-form',
  components: {
    // 3rd
    [Card.name]: Card,
    [Button.name]: Button,
    [Form.name]: Form,
    [FormItem.name]: FormItem,
    [Input.name]: Input,
    [CheckboxGroup.name]: CheckboxGroup,
    [CheckboxButton.name]: CheckboxButton,
  },
  computed: {

  },
  data() {
    return {
      methods: [],
      hostName: '',
      name: '',
      listenPath: '',
      upstreamTarget: '',
    };
  },
  methods: {
    // helpers
    ...mapActions({
      createAPIEndpoint: 'endpoints/createAPIEndpoint',
    }),
    // self
    submitCreateAPIFormHanlder() {
      const updatedDetail = { ...this.$data };
      if (this.listenPath === '') {
        delete updatedDetail.listenPath;
      }

      this.createAPIEndpoint(updatedDetail).then(this.resetForm);
    },
    resetForm() {
      this.methods = [];
      this.hostName = '';
      this.name = '';
      this.listenPath = '';
      this.upstreamTarget = '';
    },
  },
};
</script>

<style lang="scss">
.el-checkbox-group {
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0;
  }
}
.create-api-form-wrapper {
  // width: 350px;
  overflow: hidden;
}
</style>

