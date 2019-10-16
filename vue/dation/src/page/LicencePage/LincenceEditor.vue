<template>
  <div>
    <el-page-header @back="goBack" content="许可详情"></el-page-header>
    <el-divider>基本信息</el-divider>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>许可信息一览</span>
        <el-button style="float: right; padding: 3px 0" type="text">修改</el-button>
      </div>
      <table>
        <tbody>
          <tr>
            <td>许可ID</td>
            <td>{{ info.name }}</td>
          </tr>
          <tr>
            <td>签发人ID</td>
            <td>{{ info.id }}</td>
          </tr>
          <tr>
            <td>生效时间</td>
            <td>{{ info.createDate }}</td>
          </tr>
        </tbody>
      </table>
    </el-card>

    <el-divider>修改许可信息</el-divider>
    <el-form>
      <el-form-item label="许可类型" label-width="6rem">
        <el-select placeholder="请选择" v-model="form.licenceType">
          <el-option
            v-for="item in customerType"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="过期时间" label-width="6rem">
        <el-date-picker value-format="timestamp"
        v-model="form.expireTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
      </el-form-item>
    </el-form>
    <div class="right-btn">
      <el-button @click="submit" type="primary" icon="el-icon-edit" class="edit-btn">修改</el-button>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
table {
  width: 100%;
  margin-top: 1rem;
  font-size: 1rem;
  border-collapse: collapse;

  td {
    padding: 1rem 1rem;
  }
}

table tbody tr td:first-child {
  border-right: 1px solid #ccc;
  padding: 10px 15px;
  text-align: right;
}

.el-link {
  padding: 0.2rem 1rem;
}

.right-btn {
  margin: 1rem 1rem;
  display: flex;
  flex-direction: row-reverse;
}
</style>


<script>
import { mockOneModule } from "@/utils/mockData";
export default {
  name: "ModuleSetting",
  data() {
    return {
      customerType: [
        { value: "type1", lable: "type1" },
        { value: "type2", lable: "type2" },
        { value: "type3", lable: "type3" },
        { value: "type4", lable: "type4" }
      ],
      editing: false,
      submitting: false,
      info: mockOneModule(),
      selectedList: [],
      form: {
        licenceType: "",
        module: [],
        expireTime: 0
      }
    };
  },
  methods: {
    edit() {
      this.editing = true;
    },
    changeSelectDependency(prop) {
      this.selectedList = prop;
      console.log(prop);
    },
    goBack() {
      this.$router.replace("/licence");
    },
    submit() {
      this.submitting = true;
      setTimeout(() => {
        this.$notify.error({
          title: "Fail",
          message: "Server is not avilable,try it latter"
        });
        this.submitting = false;
        this.editing = false;
      }, 500);
    },
  }
};
</script>
