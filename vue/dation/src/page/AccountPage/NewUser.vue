<template>
  <div>
    <el-page-header @back="goBack" content="新增用户"></el-page-header>

    <el-row>
      <el-col :lg="lg" :sm="sm" class="profile-card">
        <el-form>
          <el-divider>基本信息</el-divider>
          <el-form-item label="登陆名称" label-width="6rem">
            <el-input type="text" placeholder="登录名" v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="姓名" label-width="6rem">
            <el-input type="text" placeholder="姓名" v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item label="密码" label-width="6rem">
            <el-input show-password placeholder="密码" v-model="form.password"></el-input>
          </el-form-item>

          <el-collapse>
            <el-collapse-item title="详细设置">
              <el-form-item label="职位：" label-width="6rem">
                <el-select v-model="form.position">
                  <el-option value>请选择</el-option>
                  <el-option
                    v-for="it in jobSelection"
                    :key="it.value"
                    :value="it.value"
                    :label="it.label"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="邮箱" label-width="6rem">
                <el-input type="text" placeholder="邮箱" v-model="form.email"></el-input>
              </el-form-item>
              <el-form-item label="电话" label-width="6rem">
                <el-input type="text" placeholder="电话" v-model="form.tel"></el-input>
              </el-form-item>
            </el-collapse-item>
          </el-collapse>

          <div class="submit">
            <el-button type="primary" @click="create">创建新用户</el-button>
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
import { mapState } from "vuex";
import { newUser } from "../../api/userAPI";

export default {
  name: "NewUser",
  computed: mapState({
    info: s => s.user.userInfo
  }),
  methods: {
    goBack() {
      this.$router.replace("/user?refresh");
    },
    async create() {
      let res = await newUser({
        ...this.form,
        creator: this.info.id
      });
      if (res.code === "200") {
        this.$message.success("创建成功!");
        this.$router.replace("/user?refresh");
      } else {
        this.$message.error(`创建失败:${res.msg}`);
      }
    }
  },
  data() {
    return {
      lg: { span: 16, offset: 4 },
      sm: { span: 20, offset: 2 },
      jobSelection: [
        { value: "VP", label: "VP" },
        { value: "RD", label: "RD" },
        { value: "CM", label: "CM" },
        { value: "PM", label: "PM" }
      ],
      form: {
        name: "",
        username: "",
        password: "",
        email: "",
        tel: "",
        position: ""
        //invisbale field please fetch form store
      }
    };
  }
};
</script>
