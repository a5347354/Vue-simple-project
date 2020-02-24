<template>
<div>
    <div class="el-table-block">
      <el-table empty-text ="No Data"
        :data="data" border highlight-current-row
        :max-height="tableHeight">
        <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
      </el-table>
    </div>
    <div  class="el-pagination">
     <el-pagination
      background
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="pagesize"
      layout="total,jumper,prev, pager, next"
      :total="totalDataCount"
      :page-count="totalPage"
    ></el-pagination>
    </div>
  </div>

</template>
<script>
export default {
  props: {
    tableData: {
      type: Array,
      required: true,
    },
    tableHeader: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      totalDataCount: 0,
      totalPage: 0,
      currentPage: 1,
      pagesize: 30,
      tableHeight: 700,
      pointData: 10,
      data: [],
    };
  },
  mounted() {
    this.handleCurrentChange(1);
  },
  watch: {
    tableData() {
      this.data = this.tableData.slice(0, 30);
      this.totalDataCount = this.tableData.length;
      this.totalPage = Math.ceil(this.tableData.length / this.pagesize);
    },
  },
  methods: {
    handleCurrentChange(currentPage) {
      const start = (currentPage - 1) * 30;
      const end = currentPage * 30;
      this.data = this.tableData.slice(start, end);
      this.currentPage = currentPage;
    },
  },
};
</script>

<style scoped>
.el-table-block{
    height: calc(100% - 500px);
    width: 100%;
    margin-top: 20px;
}
.el-pagination{
    margin-top: 10px;
}
</style>
