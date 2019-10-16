<template>
  <div class="page">
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-container>
        <el-aside width="12rem">
          <el-menu default-active="user" router>
            <el-menu-item index="/user">
              <i class="el-icon-user"></i>
              <span slot="title">账户管理</span>
            </el-menu-item>
            <el-menu-item index="/module">
              <i class="el-icon-box"></i>
              <span slot="title">模块管理</span>
            </el-menu-item>
            <el-menu-item index="/licence">
              <i class="el-icon-s-check"></i>
              <span slot="title">许可管理</span>
            </el-menu-item>
            <el-menu-item index="/client">
              <i class="el-icon-s-custom"></i>
              <span slot="title">客户管理</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <keep-alive :include="/Viewer$/">
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="stylus" scoped>
.page {
  height: 100vh;
  overflow-y: hidden;
}

a {
  display: block;
  text-decoration: none;
  text-align: center;
  width: 100%;
}

.el-header {
  z-index: 20;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.el-aside {
  ul {
    height: 90vh;
  }
}

.el-main {
  height: 90vh;
}
</style>


<script>
import Header from "./Header";
export default {
  data() {
    return {
      isCollapse: true,
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: {
    Header
  }
};
</script>