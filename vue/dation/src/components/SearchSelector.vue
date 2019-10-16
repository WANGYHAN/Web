/*
 * 用途: 负责快速在表单内选择用户, 根据搜索的内容确定ID, 方便创建选择
 * @update:selected 返回值 选择后的模块数组
 * :part = "搜索的模块"
 * 可选值 user/module/client/project
 *
 */
<template>
  <el-select
    v-model="value"
    filterable
    remote
    reserve-keyword
    :placeholder="setting.placeholder"
    :multiple="part == 'module'"
    :remote-method="remoteMethod"
    :loading="loading"
    :value-key="part"
  >
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
  </el-select>
</template>
<script>
export default {
  data() {
    return {
      name: "SearchSelector",
      options: [],
      value: "",
      list: [],
      loading: false,
      rawData: [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      ],
      setting: {
        placeholder: "搜索框未设置part 查看SearchSelector",
        remoteURL: "Unknow" //the url fetch the data
      }
    };
  },
  props: ["part"],
  mounted() {
    this.list = this.rawData.map(item => {
      return { value: item, label: item };
    });
    //以上改为初始化数据
    let config = {
      client: {
        placeholder: "搜索 客户名称",
        remoteURL: "Unknow" //the url fetch the data
      },
      project: {
        placeholder: "搜索 项目名称",
        remoteURL: "Unkonw"
      },
      module: {
        placeholder: "搜索 模块名称",
        remoteURL: "Unkonw"
      },
      user:{
        placeholder: "搜索 用户名称/ID",
        remoteURL: "Unkonw"
      }
    };
    if (this.part) {
      if (!config[this.part]) return;
      this.setting = config[this.part];
    }
  },
  methods: {
    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter(item => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    }
  }
};
</script>