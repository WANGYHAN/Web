/*
 * @update:selected 返回值 选择后的模块数组
 * 
 * :dep = "数组" 包含已有模块信息 //TODO
 *
 *
 *
 */
<template>
  <div class="dependency-manager">
    <div class="module-adder">
      <div class="hint">搜索模块添加</div>
      <input placeholder="网络,安全,通讯" type="text" class="search-input" @keyup="handleFilter">
      <div class="result-list">
        <div v-for="it in filteredList" :key="it.id" @click="select(it)">
          <ModuleCard :name="it.name" :description="it.description" :id="it.id"/>
        </div>
        <div class="hint" v-show="filteredList.length">一共搜索到{{ filteredList.length }}条数据,最多显示5条</div>
      </div>
    </div>
    <div class="selected-list">
      <div class="hint">已添加的模块</div>
      <div class="dependency-list">
        <div v-for="it in selectedList" :key="it.id" @click="unselect(it)">
          <ModuleCard selected="true" :name="it.name" :description="it.description" :id="it.id"/>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import ModuleCard from "./ModuleCard";
import { mockModule } from "@/utils/mockData";

export default {
  name: "ModuleSelector",
  data() {
    return {
      rawModuleData: mockModule(),
      filteredList: [],
      selectedList: []
    };
  },
  components: {
    ModuleCard
  },
  methods: {
    handleFilter(v) {
      v = v.target.value;
      if (v.trim() === "") {
        this.filteredList = [];
        return;
      }
      this.filteredList = this.rawModuleData.filter(it => it.name.includes(v));
      if (this.filteredList.length > 5) {
        this.filteredList = this.filteredList.slice(0, 5);
      }
    },
    select(item) {
      this.filteredList = this.filteredList.filter(it => it.id !== item.id);
      this.selectedList.push(item);
      this.$emit("update:selected", this.selectedList);
    },
    unselect(item) {
      this.selectedList = this.selectedList.filter(it => it.id !== item.id);
      this.filteredList.push(item);
    }
  }
};
</script>


<style lang="stylus" scoped>
.dependency-manager {
  display: flex;
  flex-direction: row;

  .module-adder {
    min-height: 10rem;
    flex: 1 5rem;
    display: flex;
    flex-direction: column;
    padding-right: 2rem;
    box-sizing: border-box;

    .hint {
      font-size: 14px;
      color: #666;
    }

    .search-input {
      display: block;
      border: 0;
      outline: none;
      border-bottom: 3px solid #ebebeb;
      line-height: 16px;
      font-size: 15px;
      box-sizing: border-box;
      background-clip: padding-box;
      width: 100%;
      padding: 0.35rem 0 0.55rem;
      border-radius: 0;
      background: #fff;
      transition: border-color 0.15s;
    }
  }

  .selected-list {
    min-height: 10rem;
    flex: 1 5rem;
  }

  .hint {
    font-size: 14px;
    color: #666;
  }
}
</style>
