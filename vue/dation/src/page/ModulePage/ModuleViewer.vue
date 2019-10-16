<template>
  <div>
    <!-- 管理员操作栏 -->
    <div class="ctl">
      <el-button type="primary" size="mini" class="noround" @click="newModule">新建模块</el-button>

      <div v-show="advanceMode" class="select-ctl">
        <el-button @click="deleteUser" type="danger" size="mini" class="noround">删除</el-button>
      </div>
      <el-divider></el-divider>
    </div>

    <el-form inline class="noround" @submit.native.prevent>
      <el-form-item label="搜索：">
        <el-input
          @keyup.enter.native="search"
          clearable
          v-model="condition.name"
          size="mini"
          placeholder="搜索模块名、ID、描述"
        ></el-input>
      </el-form-item>

      <!-- Advance Options -->
      <el-form-item>
        <el-button size="mini" type="primary" @click="search">搜索</el-button>
      </el-form-item>

      <el-form-item>
        <el-switch v-model="advanceMode" active-text="多选模式"></el-switch>
      </el-form-item>
    </el-form>

    <!-- Table -->
    <el-table :data="getData" @select="handleSelect" @select-all="handleSelect">
      <el-table-column v-if="advanceMode" type="selection"></el-table-column>
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="模块名称" prop="name"></el-table-column>
      <el-table-column label="描述" prop="description"></el-table-column>
      <el-table-column label="操作" fixed="right" width="100">
        <template slot-scope="scope">
          <el-button @click="toUserProfile(scope.row.id)" type="text" size="small">修改</el-button>
          <el-button type="text" size="small">删除</el-button>
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
import { getModuleTable } from '@/api/moduleAPI'
export default {
  data() {
    return {
      isCollapse: true,
      condition: {
        name: "",
        job: "",
        case: false
      },
      rawTableData: [],
      filterData: [],
      displayData: [],
      advanceMode: false,
      currentPage: 1,
      pageSize: 10,
      jobSelection: [
        { value: "RD", label: "RD" },
        { value: "PM", label: "PM" },
        { value: "OP", label: "OP" }
      ],
      selectedUser: []
    };
  },
  methods: {
    search() {
      let list = this.rawTableData;
      let condition = this.condition;
      if (condition.name) {
        list = list.filter(it =>
          "".concat(it.name, it.description, it.id).includes(condition.name)
        );
      }
      this.filterData = list;
      this.currentPage = 1;
    },
    toUserProfile(id) {
      this.$router.replace(`/module/${id}`);
    },
    handleCurrentChange(page) {
      this.currentPage = page;
    },
    handleSizeChange(size) {
      this.pageSize = size;
    },
    freezeUser() {
      this.$confirm("确定冻结用户", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "冻结成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作"
          });
        });
    },
    deleteUser() {
      this.$confirm("确定删除用户", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.rawTableData = this.rawTableData.filter(
            it => !this.selectedUser.includes(it.id)
          );
          this.search();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作"
          });
        });
    },
    handleSelect(a, b) {
      this.selectedUser = a.map(it => it.id);
    },
    newModule() {
      this.$router.replace("/module/new");
    }
  },
  created: async function() {
    let ret = await getModuleTable();
    this.rawTableData = ret;
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
