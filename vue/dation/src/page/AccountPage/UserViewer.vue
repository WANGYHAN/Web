<template>
  <div>
    <!-- 管理员操作栏 -->
    <div class="ctl">
      <el-button type="primary" size="mini" class="noround" @click="newUser">新建账户</el-button>

      <div v-show="advanceMode" class="select-ctl">
        <el-button @click="freezeUser" type="info" size="mini" class="noround">冻结</el-button>
        <el-button @click="deleteUser" type="danger" size="mini" class="noround">删除</el-button>
      </div>
      <el-divider></el-divider>
    </div>

    <el-form inline class="noround" @submit.native.prevent>
      <el-form-item label="名称：">
        <el-input
          @keyup.enter.native="search"
          v-model="condition.name"
          size="mini"
          placeholder="搜索姓名、ID"
          class="shot"
        ></el-input>
      </el-form-item>
      <el-form-item label="职位：">
        <el-select size="mini" v-model="condition.position" class="shot">
          <el-option value>请选择</el-option>
          <el-option v-for="it in jobSelection" :key="it.value" :value="it.value" :label="it.label"></el-option>
        </el-select>
      </el-form-item>

      <!-- Advance Options -->
      <el-form-item v-if="advanceMode">
        <el-checkbox label="区分大小写" v-model="condition.case"></el-checkbox>
      </el-form-item>

      <el-form-item>
        <el-button size="mini" type="primary" @click="search">搜索</el-button>
      </el-form-item>
      <el-form-item>
        <el-switch v-model="advanceMode" active-text="高级模式"></el-switch>
      </el-form-item>
    </el-form>

    <!-- Table -->
    <el-table
      :data="getData"
      @select="handleSelect"
      @select-all="handleSelect"
      :default-sort="{prop: 'id'}"
    >
      <el-table-column v-if="advanceMode" type="selection"></el-table-column>
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="名称" prop="name"></el-table-column>
      <el-table-column label="职务" prop="position"></el-table-column>
      <el-table-column label="操作" fixed="right" width="100">
        <template slot-scope="scope">
          <el-button @click="toUserProfile(scope.row.id)" type="text" size="small">查看</el-button>
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
import { getUserTable, deleteUser } from "@/api/userAPI";
export default {
  name: "UserViewer",
  data() {
    return {
      isCollapse: true,
      condition: {
        name: "",
        position: "",
        case: false
      },
      rawTableData: [],
      filterData: [],
      displayData: [],
      advanceMode: false,
      currentPage: 1,
      pageSize: 10,
      jobSelection: [
        { value: "VP", label: "VP" },
        { value: "RD", label: "RD" },
        { value: "CM", label: "CM" },
        { value: "PM", label: "PM" }
      ],
      selectedUser: []
    };
  },
  methods: {
    search() {
      let list = this.rawTableData;
      let condition = this.condition;
      if (condition.name) {
        if (condition.case) {
          //区分大小写
          list = list.filter(it =>
            "".concat(it.name, it.id).includes(condition.name)
          );
        } else {
          list = list.filter(it =>
            ""
              .concat(it.name, it.id)
              .toUpperCase()
              .includes(condition.name.toUpperCase())
          );
        }
      }
      if (condition.position) {
        list = list.filter(it => it.position === condition.position);
      }
      this.filterData = list;
      this.currentPage = 1;
    },
    async refresh() {
      this.rawTableData = await getUserTable();
    },
    toUserProfile(id) {
      this.$router.replace(`/user/${id}`);
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
      }).then(async () => {
        let res = await deleteUser(this.selectedUser);
        if (res.code === 200) {
          this.$message.success(res.msg);
          this.rawTableData = this.rawTableData.filter(
            it => !this.selectedUser.includes(it.id)
          );
        } else {
          this.$message.error(res.msg);
        }
        this.search();
      });
    },
    handleSelect(a, b) {
      this.selectedUser = a.map(it => it.id);
    },
    newUser() {
      this.$router.replace("/user/new");
    }
  },
  created: async function() {
    // let ret = await getUserTable();
    // this.rawTableData = ret;
    // this.filterData = this.rawTableData;
  },
  computed: {
    getData() {
      let to = this.currentPage * this.pageSize;
      let from = to - this.pageSize; //防止越界导致无数据
      to = to < this.filterData.length ? to : this.filterData.length;
      return this.filterData.slice(from, to);
    }
  },
  activated: function() {
    console.log(this.$route)
    if (this.$route.fullPath.includes("refresh")) {
      this.refresh();
      this.$route.replace("user");
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
