<template>
  <div>
    <!-- 管理员操作栏 -->
    <div class="ctl">
      <el-button type="primary" size="mini" class="noround" @click="newApplication">新建许可/申请</el-button>

      <div v-show="advanceMode" class="select-ctl">
        <el-button @click="freezeUser" size="mini" class="noround">导出</el-button>
      </div>
      <el-divider></el-divider>
    </div>

    <el-form inline class="noround" @submit.native.prevent>
      <el-form-item label="许可名称：">
        <el-input
          @keyup.enter.native="search"
          v-model="condition.licenceKeyword"
          size="mini"
          placeholder="搜索许可名、ID"
          class="shot"
        ></el-input>
      </el-form-item>
      <el-form-item label="按项目查找：" v-show="advanceMode">
        <el-input
          @keyup.enter.native="search"
          v-model="condition.projectKeyword"
          size="mini"
          placeholder="搜索项目名称、ID"
          class="shot"
        ></el-input>
      </el-form-item>
      <el-form-item label="按客户查找：" v-show="advanceMode">
        <el-input
          @keyup.enter.native="search"
          v-model="condition.clientKeyword"
          size="mini"
          placeholder="搜索姓名、ID"
          class="shot"
        ></el-input>
      </el-form-item>
      <el-form-item label="许可类型：">
        <el-select size="mini" v-model="condition.job" class="shot">
          <el-option value>请选择</el-option>
          <el-option v-for="it in licenceType" :key="it.value" :value="it.value" :label="it.label"></el-option>
        </el-select>
      </el-form-item>

      <!-- Advance Options -->
      <el-form-item>
        <el-button size="mini" type="primary" @click="search">搜索</el-button>
      </el-form-item>
      <el-form-item>
        <el-switch v-model="advanceMode" active-text="高级模式"></el-switch>
      </el-form-item>
    </el-form>

    <!-- Table -->
    <el-table :data="getData" @select="handleSelect" @select-all="handleSelect">
      <el-table-column v-if="advanceMode" type="selection"></el-table-column>
      <el-table-column label="许可ID" prop="licence.id"></el-table-column>
      <el-table-column label="客户名称" prop="client.name"></el-table-column>
      <el-table-column label="项目名称" prop="project.name"></el-table-column>
      <el-table-column label="类型" prop="type"></el-table-column>
      <el-table-column label="操作" fixed="right" width="100">
        <template slot-scope="scope">
          <el-button @click="toLicenceEditor(scope.row.id)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      :page-sizes="[10, 20, 50, 100]"
      layout="sizes, prev, pager, next"
      :current-page="currentPage"
      :page-size="pageSize"
      :total="this.filterData.length"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>


<script>
import { mockLicence } from "@/utils/mockData";
export default {
  data() {
    return {
      isCollapse: true,
      condition: {
        licenceKeyword: "",
        projectKeyword: "",
        clientKeyword: "",
        type: ""
      },
      rawTableData: mockLicence(),
      filterData: [],
      displayData: [],
      advanceMode: false,
      currentPage: 1,
      pageSize: 10,
      licenceType: [
        { value: "长期", label: "长期" },
        { value: "临时", label: "临时" },
        { value: "时段", label: "时段" }
      ],
      selectedLicence: []
    };
  },
  methods: {
    search() {
      let list = this.rawTableData;
      let condition = this.condition;
      if (condition.licenceKeyword) {
        list = list.filter(it =>
          ""
            .concat(it.licence.id, it.licence.name)
            .includes(condition.licenceKeyword)
        );
      }
      if (this.advanceMode) {
        if (condition.projectKeyword) {
          list = list.filter(it =>
          ""
            .concat(it.project.id, it.project.name)
            .includes(condition.projectKeyword)
          );
        }
        if (condition.clientKeyword) {
          list = list.filter(it =>
          ""
            .concat(it.client.id, it.client.name)
            .includes(condition.clientKeyword)
          );
        }
      }
      this.filterData = list;
      this.currentPage = 1;
    },
    toLicenceEditor(id) {
      this.$router.replace(`/licence/${id}`);
    },
    handleCurrentChange(page) {
      this.currentPage = page;
    },
    handleSizeChange(size) {
      this.pageSize = size;
    },
    freezeUser() {
      this.$confirm("导出", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "导出成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作"
          });
        });
    },
    handleSelect(a, b) {
      this.selectedLicence = a.map(it => it.id);
    },
    newUser() {
      this.$router.replace("/licence/new");
    },
    newApplication() {
      this.$router.replace("/licence/new");
    }
  },
  mounted: function() {
    this.filterData = this.rawTableData;
  },
  watch: {},
  computed: {
    getData() {
      let to = this.currentPage * this.pageSize;
      let from = to - this.pageSize; //防止越界导致无数据
      to = to < this.filterData.length ? to : this.filterData.length;
      return this.filterData.slice(from, to);
    }
  }
};
</script>

<style lang="stylus" scoped>
.ctl {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.el-divider {
  margin: 0.5rem 0rem;
}
</style>
