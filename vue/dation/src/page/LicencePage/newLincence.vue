<template>
  <div>
    <el-page-header @back="goBack" content="新增许可"></el-page-header>

    <el-row>
      <el-col :lg="lg" :sm="sm" class="profile-card">
        <el-form>
          <el-divider>基本信息</el-divider>
          <el-form-item label="申请人" label-width="6rem">{{ form.applicant.name }}</el-form-item>
          <el-form-item label="客户ID" label-width="6rem">
            <SearchSelector part="client"/>
          </el-form-item>
          <el-form-item label="项目ID" label-width="6rem">
            <SearchSelector part="project"/>
          </el-form-item>
          <el-form-item label="模块ID" label-width="6rem">
            <SearchSelector part="module"/>
          </el-form-item>
          <el-form-item label="联系方式" label-width="6rem">
            <el-input type="textarea"></el-input>
          </el-form-item>

          <el-form-item label="许可类型" label-width="6rem">
            <el-select placeholder="请选择" v-model="form.licenceType">
              <el-option
                v-for="item in licenceType"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item
            v-show="form.licenceType == 'duration' || form.licenceType == 'temporary'"
            label="起始时间"
            label-width="6rem"
          >
          <el-date-picker
              v-model="form.expireDate"
      type="datetimerange"
      range-separator="至"
       :picker-options="pickerOptions"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
            
          </el-form-item>

          <el-collapse>
            <el-collapse-item title="详细设置">
              <el-form-item label="许可所在地区" label-width="6rem">
                <el-input type="text" placeholder="许可所在地区"></el-input>
              </el-form-item>
              <el-form-item label="许可说明" label-width="6rem">
                <el-input type="text" placeholder="许可说明"></el-input>
              </el-form-item>
            </el-collapse-item>
          </el-collapse>

          <div class="submit">
            <el-button type="primary">创建新许可</el-button>
          </div>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="stylus" scoped>
.submit {
  margin: 1rem 1rem;
  display: flex;
  flex-direction: row-reverse;
}
</style>

<script>
import SearchSelector from "@/components/SearchSelector.vue";
export default {
  name: "NewLicence",
  methods: {
    goBack() {
      this.$router.replace("/licence");
    }
  },
  data() {
    return {
      form: {
        applicant: { id: "12345", name: "[当前用户]" }, //要求加载为当前账户
        licenceType: ""
      },
      lg: { span: 16, offset: 4 },
      sm: { span: 20, offset: 2 },
      licenceType: [
        { value: "temporary", label: "临时" },
        { value: "duration", label: "时段" },
        { value: "long-term", label: "长期" }
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近三天",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 3);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      }
    };
  },
  components: {
    SearchSelector
  }
};
</script>
