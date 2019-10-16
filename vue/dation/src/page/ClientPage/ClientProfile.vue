<template>
  <div>
    <el-page-header @back="goBack" content="客户资料"></el-page-header>

    
    <el-row>
      <el-col :lg="lg" :sm="sm" class="profile-card">
        <el-form>
          <el-divider>基本信息</el-divider>
          <el-form-item label="姓名" label-width="6rem">
            <el-input type="text" placeholder="姓名" :disabled="!editting" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="用户类型" label-width="6rem">
            <el-select v-model="form.type" placeholder="请选择" :disabled="!editting">
              <el-option v-for="it in clientType" :key="it" :label="it" :value="it"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="联系方式"
            label-width="6rem"
            :disabled="!editting"
            v-model="form.contract"
          >
            <el-input type="textarea" :disabled="!editting"></el-input>
          </el-form-item>

          <el-collapse>
            <el-collapse-item title="详细设置">
              <el-form-item label="客户所在地区" label-width="6rem">
                <el-input :disabled="!editting" type="text" placeholder="客户所在地区"></el-input>
              </el-form-item>
              <el-form-item label="客户说明" label-width="6rem">
                <el-input :disabled="!editting" type="text" placeholder="客户说明"></el-input>
              </el-form-item>
            </el-collapse-item>
          </el-collapse>

          <div class="submit">
            <el-button type="primary" @click="editting = !editting">修改</el-button>
          </div>
        </el-form>
      </el-col>
    </el-row>

    <el-divider>项目状况</el-divider>
    <ProjectTable/>

  </div>
</template>

<style lang="stylus" scoped>
.submit {
  margin: 1rem 1rem;
  display: flex;
  flex-direction: row-reverse;
}
</style>

<script>
import ProjectTable from "./ProjectPage/ProjectTable";
export default {
  name: "ClientProfile",
  methods: {
    goBack() {
      this.$router.replace("/client");
    }
  },
  data() {
    return {
      clientType: ["高级客户", "普通客户", "长期客户", "候选客户"],
      lg: { span: 16, offset: 4 },
      sm: { span: 20, offset: 2 },
      form: {
        name: "",
        type: "",
        contract: ""
      },
      editting: false
    };
  },
  components: {
    ProjectTable
  }
};
</script>
