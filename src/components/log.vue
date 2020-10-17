<template>
  <div>
    <el-card>
      <el-table :data="logTable" :row-class-name="tableRowClassName">
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="time" label="时间"></el-table-column>
        <el-table-column prop="realname" label="姓名"></el-table-column>
        <el-table-column prop="status" label="状态"></el-table-column>
        <el-table-column prop="url" label="具体信息">
          <template slot-scope="scope">
            <el-link v-bind:href=scope.row.url>{{scope.row.url}}</el-link>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'log',
  data () {
    return {
      logTable: [
      ]
    }
  },
  beforeCreate () {
    this.$axios.get('api/log')
      .then((data) => {
        this.logTable = data.data
      })
  },
  methods: {
    tableRowClassName ({ row, rowIndex }) {
      if (row.status === '失败') {
        return 'warning-row'
      }
      return ''
    }

  }
}
</script>

<style type="less" scoped>
</style>
