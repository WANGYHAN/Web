<template>
  <div>
    <el-page-header @back="goBack" content="账户信息"></el-page-header>

    <el-row>
      <el-col :lg="lg" :sm="sm" class="profile-card">
        <el-form label-width="3rem">
          <el-card shadow="hover">
            <div class="head-card">
              <el-avatar src="http://avatar.chsword.net/avatar/1" :size="100" class="avatar"></el-avatar>
              <div class="info">
                <h3>{{ form.name }}</h3>
                <el-button
                  v-if="!editing"
                  @click="edit"
                  type="primary"
                  icon="el-icon-edit"
                  circle
                  class="edit-btn"
                ></el-button>
              </div>
            </div>
          </el-card>
          <el-divider>个人信息</el-divider>
          <el-form-item label="姓名" label-width="6rem">
            <el-input type="text" placeholder="姓名" :disabled="!editing" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="用户名" label-width="6rem">
            <el-input type="text" placeholder="用户名" :disabled="!editing" v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" label-width="6rem">
            <el-input type="text" placeholder="邮箱" :disabled="!editing" v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="电话" label-width="6rem">
            <el-input type="text" placeholder="电话" :disabled="!editing" v-model="form.tel"></el-input>
          </el-form-item>
        </el-form>

        <el-button v-if="editing" @click="submit" type="success" round>提交</el-button>
      </el-col>

      <el-col :lg="lg" :sm="sm">
        <el-divider>修改密码</el-divider>

        <el-form label-width="5rem" :rules="passRules" :model="changePass">
          <el-form-item label="当前密码">
            <el-input type="password" v-model="changePass.old"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="new">
            <el-input autocomplete="off" type="password" v-model="changePass.new"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="comfirm">
            <el-input autocomplete="off" type="password" v-model="changePass.comfirm"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="danger" @click="submitNewPass">修改密码</el-button>
            <span class="tip">请确保密码强度在6位以上</span>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import { getUser } from "@/api/userAPI";
export default {
  name: "user_profile",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      callback();
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.changePass.new) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      editing: false,
      submitting: false,
      lg: { span: 16, offset: 4 },
      sm: { span: 20, offset: 2 },
      form: {
        name: "",
        tel: "",
        email: ""
      },
      changePass: {
        old: "",
        new: "",
        comfirm: ""
      },
      passRules: {
        new: [{ validator: validatePass, trigger: "blur" }],
        comfirm: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    edit() {
      this.editing = true;
    },
    goBack() {
      this.$router.replace("/user");
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
  },
  mounted: async function() {
    let it = await getUser(this.$route.params.id);
    if (!it) {
      this.$message("用户不存在");
      return this.goBack();
    }
    this.form = it;
  }
};
</script>
<style lang="stylus" scoped>
.line {
  border-bottom: 1px solid #ccc;
  margin: 0.5rem 0;
}

.profile-card {
  padding-top: 2rem;

  .display {
    margin: 0 15px;
  }

  .head-card {
    display: flex;
    margin-bottom: 2rem;
    position: relative;

    .avatar {
      margin-right: 2rem;
      display: inline-block;
    }

    .edit-btn {
      position: absolute;
      right: 1rem;
      top: 1rem;
    }
  }
}

.tip {
  padding-left: 1rem;
  color: #666;
  font-size: 14px;
}
</style>
