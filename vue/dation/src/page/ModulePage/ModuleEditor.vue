<template>
  <div>
    <el-page-header @back="goBack" content="模块详情"></el-page-header>

    <div v-show="!editing">
      <el-card shadow="hover" style="margin-top: 1rem;">
        <table>
          <tbody>
            <tr>
              <td>模块名称</td>
              <td>{{ info.name }}</td>
            </tr>
            <tr>
              <td>模块ID</td>
              <td>{{ info.id }}</td>
            </tr>
            <tr>
              <td>创建时间</td>
              <td>{{ info.createDate }}</td>
            </tr>
          </tbody>
        </table>
      </el-card>

      <el-collapse>
        <el-collapse-item title="模块依赖">
          <el-link
            v-for="it in info.depandency"
            :key="it.id"
            :href="`#/module/${it.id}`"
            target="_blank"
          >{{ it.name}}</el-link>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div v-show="editing">
      <el-form>
        <el-divider>修改模块信息</el-divider>
        <el-form-item label="模块名称" label-width="6rem">
          <el-input type="text" placeholder="模块名称" v-model="info.name"></el-input>
        </el-form-item>

        <el-form-item label="模块ID" label-width="6rem">
          <el-input placeholder="模块ID" v-model="info.id"></el-input>
        </el-form-item>

        <el-form-item label="模块描述" label-width="6rem">
          <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="info.description"></el-input>
        </el-form-item>

        <el-divider>模块依赖</el-divider>
        <DependencySelector @update:selected="changeSelectDependency"/>

        <div class="right-btn">
          <el-button type="primary">完成修改</el-button>
        </div>
      </el-form>
    </div>

    <div class="right-btn">
      <el-button
        v-if="!editing"
        @click="edit"
        type="primary"
        icon="el-icon-edit"
        class="edit-btn"
      >修改</el-button>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
table {
  width: 100%;
  font-size: 1rem;
  border-collapse: collapse;

  td {
    padding: 1rem 1rem;
  }
}

table tbody tr td:first-child {
  border-right: 1px solid #ccc;
  padding: 10px 15px;
  text-align: right;
}

.el-link {
  padding: 0.2rem 1rem;
}

.right-btn {
  margin: 1rem 1rem;
  display: flex;
  flex-direction: row-reverse;
}
</style>


<script>
import { mockOneModule } from "@/utils/mockData";
import DependencySelector from "./DependencySelector";
export default {
  name: "ModuleSetting",
  components: {
    DependencySelector
  },
  data() {
    return {
      editing: false,
      submitting: false,
      info: mockOneModule(),
      selectedList: []
    };
  },
  methods: {
    edit() {
      this.editing = true;
    },
    changeSelectDependency(prop) {
      this.selectedList = prop;
      console.log(prop);
    },
    goBack() {
      this.$router.replace("/module");
    },
    submit() {
      this.submitting = true;
      setTimeout(() => {
        this.$notify.error({
          title: "Fail",
          message: "Server is not avilable,try it latter"
        });
        this.submitting = false;
        this.editing = false;
      }, 500);
    },
    submitNewPass() {}
  }
};
</script>
