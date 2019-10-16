<template>
  <div
    class="login-card-container"
    element-loading-spinner="el-icon-loading"
    v-loading="loading"
    element-loading-background="rgba(33, 33, 33, 0.8)"
  >
    <img src="../../assets/logo.png" alt width="50" height="50" class="logo">
    <el-form
      ref="loginForm"
      :rules="loginRules"
      autocomplete="on"
      class="login-form"
      :model="loginForm"
    >
      <el-row>
        <el-col :span="16" :offset="4">
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              class="input-username"
              type="text"
              placeholder="UserName"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              @keyup.enter.native="handleLogin"
              v-model="loginForm.password"
              class="input-pwd"
              type="password"
              placeholder="PassWord"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item prop="loginbtn">
            <el-button
              @click.native.prevent="handleLogin"
              type="primary"
              style="width:100%"
              size="medium"
            >登陆</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>


<style lang="stylus">
.login-card-container {
  position: fixed;
  right: 50%;
  margin-right: -15rem;
  margin-top: 20vh;
  height: 20rem;
  width: 30rem;
  background: #1118;
  box-shadow: 0 0 8px 1px rgb(22, 33, 44);
  z-index: 20;

  .logo {
    display: block;
    margin: 1rem auto -2rem auto;
  }
}

.login-form {
  margin-top: 3rem;

  .input-username, .input-pwd {
    input {
      background: #1113;
      color: #fefefe;
    }
  }
}
</style>

<script>
export default {
  name: "login_card",
  components: {},
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value.length <= 0) {
        callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("密码不能为空"));
      } else {
        callback();
      }
    };
    return {
      loading: false,
      loginForm: {
        username: "admin",
        password: "123456"
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ]
      }
    };
  },
  methods: {
    async handleLogin() {
      //TODO DELETE when production
      this.$router.replace("user");
      this.$refs.loginForm.validate();
      let ret = await this.$store.dispatch("login", this.loginForm);
      this.showNotify(ret.code === 200, ret.msg);
    },
    showNotify(ok, message) {
      if (ok) {
        this.$notify.success({
          title: "通知",
          message
        });
      } else {
        this.$notify.error({
          title: "通知",
          message
        });
      }
    }
  }
};
</script>
