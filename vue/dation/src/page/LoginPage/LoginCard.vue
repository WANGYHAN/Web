<template>
  <div class="login">
    <LogoBar/>
    <LoginCard/>

    <div class="bg"></div>
  </div>
</template>


<style lang="stylus" scoped>
.login {
  width: 100vw;
}

.bg {
  width: 100 vw;
  height: 100 vh;
  position: fixed;
  top: 0;
  left: 0;
  background-size: cover;
  background: #666 url('https://api.neweb.top/bing.php?type=rand') no-repeat; // api.neweb.top/bing.php?type=rand) no-repeat;
  // background: #666 url('https://cn.bing.com/th?id=OHR.IndiaLitSpace_ZH-CN5941074986_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp') no-repeat;
}
</style>

<script>
import LogoBar from "./LogoBar";
import LoginCard from "./LoginCard";
export default {
  name: "login_page",
  components: {
    LogoBar,
    LoginCard
  }
};
</script>
