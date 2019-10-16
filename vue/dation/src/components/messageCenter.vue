<template>
  <div style="height:100%;width: 8rem;">
    <div class="btn-wrapper" :class="{active:showPanel}" @click="togglePanel">
      <el-badge is-dot class="btn" type="primary">
        <i class="el-icon-chat-line-square"></i>
        消息中心
      </el-badge>
    </div>
    <PosedMessageCenter :pose="showPanel? 'visible':'hidden'" class="message-center">
      <MessageCard v-for="item in message" :key="item.id" class="box-card">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>{{item.title}}</span>
            <el-button style="float: right; padding: 3px 0" type="text">详情</el-button>
          </div>
          <div>{{item.content}}</div>
        </el-card>
      </MessageCard>
      <!-- TODO 写不同Type的卡片 -->
    </PosedMessageCenter>
  </div>
</template>

<script>
import posed from "vue-pose";

export default {
  name: "MessageCenter",
  data() {
    return {
      showPanel: false,
      message: [
        {
          id: 521521,
          type: "request",
          title: "许可请求",
          content: "[用户名] 发来一个许可申请"
        },
        {
          id: 123124,
          type: "result",
          title: "反馈结果",
          content: "[用户名] 批准了您的请求 #15252"
        },
        {
          id: 32423,
          type: "request",
          title: "系统通知",
          content: "本周报表已更新"
        }
      ]
    };
  },
  methods: {
    togglePanel() {
      this.showPanel = !this.showPanel;
    }
  },
  components: {
    PosedMessageCenter: posed.div({
      visible: {
        y: 0,
        beforeChildren: true,
        staggerChildren: 30
      },
      hidden: {
        y: "-120%",
        afterChildren: true
      }
    }),
    MessageCard: posed.div({
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 20 }
    })
  }
};
</script>

<style lang="stylus" scoped>
.message-center {
  position: fixed;
  right: 0;
  box-shadow: 0 0 5px 0 #cccc;
  background: #fefefe;
  width: 30vw;
  min-width: 18rem;
  height: 90vh;
  padding: 0.5rem;

  .box-card {
    margin-bottom: 0.5rem;
  }
}

.btn-wrapper {
  margin-right: 1.5rem;
  padding: 0rem 0.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  user-select: none;
  cursor: default;

  .el-badge {
    flex: 1;
  }

  &.active {
    background: linear-gradient(to bottom, #ccc 30%, white);
  }
}
</style>
