<template>
  <el-card shadow="hover">
    <el-table :data="data" stripe>
      <el-table-column label="项目ID" prop="id"></el-table-column>
      <el-table-column label="项目名称" prop="name"></el-table-column>
      <el-table-column label="项目状态">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>目前状态: {{ scope.row.state }}</p>
            <p>预计启动时间: {{ scope.row.estimatedStartTime }}</p>
            <p>实际启动实际: {{ scope.row.actualStartTime }}</p>
            <p>预计完成时间: {{ scope.row.estimatedFinishTime }}</p>
            <p>实际完成时间: {{ scope.row.actualFinishTime }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.state }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="keyword"
            size="mini"
            clearable
            placeholder="输入ID/名称搜索"
          />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>


<script>
import { mockProject } from "@/utils/mockData";
export default {
  name: "ProjectTable",
  data() {
    return {
      tableData: mockProject(),
      keyword: "",
    };
  },
  computed: {
    data() {
      return this.tableData.filter(it =>
        "".concat(it.name, it.id).includes(this.keyword)
      );
    }
  }
};
</script>

