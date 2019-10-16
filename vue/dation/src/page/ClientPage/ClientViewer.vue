<template>
  <div>
    <!-- 管理员操作栏 -->
    <div class="ctl">
      <el-button type="primary" size="mini" class="noround" @click="newClient">新客户</el-button>

      <div v-show="advanceMode" class="select-ctl">
        <el-button @click="transferClient" type="warning" size="mini" class="noround">转让</el-button>
      </div>
      <el-divider></el-divider>
    </div>

    <el-form inline class="noround" @submit.native.prevent>
      <el-form-item label="搜索：">
        <el-input
          @keyup.enter.native="search"
          clearable
          v-model="condition.keyword"
          size="mini"
          placeholder="搜索名称/ID/位置"
        ></el-input>
      </el-form-item>

      <el-form-item label="客户类型：">
        <el-select size="mini" v-model="condition.type" class="shot">
          <el-option value>请选择</el-option>
          <el-option v-for="it in clientType" :key="it" :value="it" :label="it"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="按联系方式查找：" v-show="advanceMode">
        <el-input
          @keyup.enter.native="search"
          clearable
          class="shot"
          v-model="condition.contact"
          size="mini"
          placeholder="手机/邮箱"
        ></el-input>
      </el-form-item>

      <el-form-item label="按说明查找：" v-show="advanceMode">
        <el-input
          @keyup.enter.native="search"
          clearable
          class="shot"
          v-model="condition.info"
          size="mini"
          placeholder="说明"
        ></el-input>
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
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="名称" prop="name"></el-table-column>
      <el-table-column label="位置" prop="location"></el-table-column>
      <el-table-column label="客户类型" prop="type"></el-table-column>
      <el-table-column label="操作" fixed="right" width="100">
        <template slot-scope="scope">
          <el-button @click="toClientProfile(scope.row.id)" type="text" size="small">详情</el-button>
          <el-button @click="toClientProject(scope.row.id)" type="text" size="small">项目</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 转让选择 -->
    <el-dialog title="转让客户" :visible.sync="dialogFormVisible">
      <el-form>
        <div>
          <div class="client-tag">
            <el-tag v-for="item in selectedClient" :key="item.id">{{item.name }}</el-tag>
          </div>
        </div>
        <SearchSelector part="user"/>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

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
import { mockClinet } from "@/utils/mockData";
import SearchSelector from "@/components/SearchSelector";
export default {
  data() {
    return {
      isCollapse: true,
      condition: {
        keyword: "",
        type: "",
        contact: "",
        info: ""
      },
      rawTableData: mockClinet(),
      filterData: [],
      displayData: [],
      advanceMode: false,
      currentPage: 1,
      pageSize: 10,
      selectedClient: [],
      dialogFormVisible: false,
      clientType: ["高级客户", "普通客户", "长期客户", "候选客户"]
    };
  },
  methods: {
    search() {
      let list = this.rawTableData;
      let condition = this.condition;
      if (condition.keyword) {
        list = list.filter(it =>
          "".concat(it.name, it.id, it.location).includes(condition.keyword)
        );
      }
      if (condition.type) {
        list = list.filter(it => it.type === condition.type);
      }

      if (this.advanceMode) {
        // 高级查询会继续过滤 联系方式和说明
        if (condition.contact) {
          list = list.filter(it => {
            var contactInfo = it.contact.map(i => i.value).join("");
            return contactInfo.includes(condition.contact);
          });
        }
        if (condition.info) {
          list = list.filter(it => it.info.includes(condition.info));
        }
      }
      this.filterData = list;
      this.currentPage = 1;
    },
    toClientProfile(id) {
      this.$router.replace(`/client/${id}`);
    },
    toClientProject(id) {
      this.$router.replace(`/client/${id}`);
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
    transferClient() {
      if (this.selectedClient.length) {
        this.dialogFormVisible = true;
      }
    },
    handleSelect(a) {
      this.selectedClient = a;
    },
    newClient() {
      this.$router.replace("/client/new");
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
  },
  components: {
    SearchSelector
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

.client-tag {
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #eee;
  border-radius: 0.5rem;
  background: #fafbfc;

  .el-tag {
    margin-right: 0.2rem;
  }
}
</style>
