<template>
  <div>
    <el-page-header @back="goBack" content="新增客户"></el-page-header>

    <el-row>
      <el-col :lg="lg" :sm="sm" class="profile-card">
        <el-form>
          <el-divider>基本信息</el-divider>
          <el-form-item label="姓名" label-width="6rem">
            <el-input type="text" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item label="用户类型" label-width="6rem">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in customerType"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="联系方式" label-width="6rem">
            <el-input type="textarea"></el-input>
          </el-form-item>

          <el-collapse>
            <el-collapse-item title="详细设置">
              <el-form-item label="客户所在地区" label-width="6rem">
                <el-input type="text" placeholder="客户所在地区"></el-input>
              </el-form-item>
              <el-form-item label="客户说明" label-width="6rem">
                <el-input type="text" placeholder="客户说明"></el-input>
              </el-form-item>
            </el-collapse-item>
          </el-collapse>

          <div class="submit">
            <el-button type="primary">创建新用户</el-button>
          </div>
        </el-form>
      </el-col>
    </el-row>
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
export default {
  name: "NewClient",
  methods: {
    goBack() {
      this.$router.replace("/user");
    }
  },
  data() {
    return {
      customerType: [
        { value: "type1", lable: "type1" },
        { value: "type2", lable: "type2" },
        { value: "type3", lable: "type3" },
        { value: "type4", lable: "type4" }
      ],
      lg: { span: 16, offset: 4 },
      sm: { span: 20, offset: 2 }
    };
  }
};
</script>
