<template>
  <el-card class="module-card" :shadow="selected?'hover':'never'">
    <div class="header">{{this.name}}</div>
    <div>{{this.description}}</div>
    <div class="opration">
      <i v-if="selected" class="el-icon-delete"></i>
      <i v-if="!selected" class="el-icon-plus"></i>
    </div>
  </el-card>
</template>


<style lang="stylus" scoped>
.module-card {
  height: 6rem;
  background: #f7f7f7;
  margin-top: 0.3rem;
  position: relative;

  .header {
    margin-top: -1rem;
    border-bottom: 1px solid #ccc;
  }

  &:hover {
    background: #e7f1f4;
  }

  .opration {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;

    i {
      font-size: 1.2rem;
      transition: all 0.2s;
      opacity: 0;
    }
  }

  &:hover {
    .opration {
      i {
        opacity: 1;
      }
    }
  }
}

.selected {
  background: #fff;
  box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.1);
}
</style>

<script>
export default {
  name: "ModuleCard",
  props: {
    name: {
      require: true
    },
    id: {
      require: true
    },
    description: {
      default: "请完善这个模块的描述信息"
    },
    selected: {
      default: false
    }
  },
  data() {
    return {};
  }
};
</script>
