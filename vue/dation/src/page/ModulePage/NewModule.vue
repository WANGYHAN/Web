<template>
  <div>
    <el-container>
      <el-header>
        <el-page-header @back="goBack" content="新增模块"></el-page-header>
      </el-header>
      <el-main>
        <el-form>
          <el-divider>基本信息</el-divider>
          <el-form-item label="模块名称" label-width="6rem">
            <el-input type="text" placeholder="模块名称"></el-input>
          </el-form-item>

          <el-collapse>
            <el-collapse-item title="详细设置">
              <el-form-item label="模块描述" label-width="6rem">
                <el-input type="textarea" :rows="2" placeholder="请输入内容"></el-input>
              </el-form-item>
            </el-collapse-item>
          </el-collapse>

          <el-divider>模块依赖</el-divider>
          <DependencySelector/>
          <div class="submit">
            <el-button type="primary">创建新模块</el-button>
          </div>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>
 
<style lang="stylus" scoped>
.submit {
  margin: 1rem 1rem;
  display: flex;
  flex-direction: row-reverse;
}

.setting-aside {
  width: 10rempx;
  background: #ccc;
}
</style>

<script>
import DependencySelector from "./DependencySelector";
export default {
  name: "NewUser",
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.replace("/module");
    }
  },

  components: {
    DependencySelector
  }
};
</script>
