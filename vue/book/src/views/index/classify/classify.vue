<template>
  <div>
    <ul class="titleClass">
      <li
        v-for="(item, index) in titleArr"
        :class="{ current: ind === index }"
        @click="changeInd(index)"
        :key="index"
      >{{ item }}</li>
    </ul>
    <div>
      <Item v-for="(item, index) in newlist" :key="index" :item="item">
        <template v-slot:des></template>
        <template v-slot:button="{flag}">
          <button>查看详情</button>
        </template>
      </Item>
    </div>
  </div>
</template>

<script>
import "@/mock/index";
import Item from "@/components/item.vue";
export default {
  data() {
    return {
      titleArr: ["热门", "新书", "免费", "完本"],
      ind: 0,
      list: {},
      newlist: []
    };
  },
  components: {
    Item
  },
  created() {
    console.log(1312321);
    this.$http.get("/api/list").then(res => {
      console.log(res);
      this.list = res.data;
      this.newlist = res.data["ranklist" + this.ind];
    });
  },
  methods: {
    changeInd(ind) {
      //点击类型
      this.ind = ind;
      this.newlist = this.list["ranklist" + ind];
    }
  }
};
</script>

<style scoped>
.titleClass {
  height: 44px;
  width: 100%;
  display: flex;
}
.titleClass li {
  flex: 1;
  margin: 0 3px;
  background: #f2f2f2;
  color: #4c4c4c;
  line-height: 44px;
  height: 44px;
  text-align: center;
}
.titleClass li.current {
  background: #ff4544;
  color: #fff;
}
button {
  line-height: 3vh;
  width: 60vw;
  margin-top: 6px;
}
</style>

