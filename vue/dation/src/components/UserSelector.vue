/*
 * 用途: 负责快速在表单内选择用户,表现效果为好友层级展开
 * @update:selected 返回值 选择后的模块数组
 */

 <template>
  <div>
    <el-cascader v-model="value" :options="options" @change="handleChange" placeholder="选择接收用户"></el-cascader>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: [],
      options: [
        {
          value: 1,
          label: "组1",
          children: [
            {
              value: 2,
              label: "User1",
              children: [
                { value: 3, label: "普陀" },
                { value: 4, label: "黄埔" },
                { value: 5, label: "徐汇" }
              ]
            },
            {
              value: 7,
              label: "江苏",
              children: [
                { value: 8, label: "南京" },
                { value: 9, label: "苏州" },
                { value: 10, label: "无锡" }
              ]
            },
            {
              value: 12,
              label: "浙江",
              children: [
                { value: 13, label: "杭州" },
                { value: 14, label: "宁波" },
                { value: 15, label: "嘉兴" }
              ]
            }
          ]
        },
        {
          value: 17,
          label: "组2",
          children: [
            {
              value: 18,
              label: "陕西",
              children: [
                { value: 19, label: "西安" },
                { value: 20, label: "延安" }
              ]
            },
            {
              value: 21,
              label: "新疆维吾尔族自治区",
              children: [
                { value: 22, label: "乌鲁木齐" },
                { value: 23, label: "克拉玛依" }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

 