<template>
  <div class="header">
    <!-- 左对齐 -->
    <div class="logo">
      <img src="../assets/logo.png" alt width="45" height="45">
    </div>
    <!-- 右对齐 -->
    <div class="right-item">
      <div class="avatar">
        <el-avatar src="http://avatar.chsword.net/avatar/1"></el-avatar>
        <div class="popover">
          <el-button-group class="btns">
            <el-button class="noround">个人</el-button>
            <el-button class="noround">消息</el-button>
            <el-button class="noround">帮助</el-button>
          </el-button-group>

          <div class="links-block">
            <el-button class="noround">授权中心</el-button>
          </div>

          <el-button type="danger" class="noround" @click="logout">退出登陆</el-button>
        </div>
      </div>
      <!-- 消息中心 -->
      <MessageCenter />
    </div>
  </div>
</template>

<script>
import MessageCenter from "./MessageCenter";
export default {
  name: "Header",
  methods: {
    logout() {
      this.$router.replace("/login");
    }
  },
  components:{
    MessageCenter
  }
};
</script>

<style lang="stylus" scoped>
.header {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .avatar {
    .popover {
      z-index: 10000;
      background: #fffe;
      overflow: hidden;
      position: absolute;
      margin-top: -5px;
      right: 0;
      width: 15rem;
      height: 0rem;
      opacity: 0;
      transition: opacity 0.2s;
      box-shadow: 0 0 5px 0 #cccc;
      display: flex;
      flex-direction: column;

      .links-block {
        height: 10rem;
        padding: 0.5rem 0rem;

        .el-button {
          width: 100%;
          border: none;
        }
      }

      .btns {
        width: 100%;
        display: flex;
        border-bottom: 1px solid #ccc;

        .el-button {
          flex: 1;
          border: none;
        }
      }
    }

    &:hover .popover {
      opacity: 1;
      height: auto;
    }
  }

  .right-item {
    align-items: center;
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>
