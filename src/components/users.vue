<template>
<div>
  <el-card>
    <h3>当前用户数{{count}}</h3>
    <el-table :data="users">
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="realname" label="姓名"></el-table-column>
      <el-table-column prop="config.fieldSQxq_Name" label="校区"></el-table-column>
      <el-table-column prop="config.fieldSQgyl_Name" label="公寓"></el-table-column>
      <el-table-column prop="config.fieldSQqsh" label="寝室号"></el-table-column>
    </el-table>
  </el-card>
</div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      users: [],
      count: ''
    }
  },
  beforeCreate () {
    this.$axios.get('api/users')
      .then((data) => {
        this.users = data.data
        this.count = data.data.length
      })
  },
  methods: {
    getUsers () {
      this.$axios.get('api/users')
        .then((data) => {
          this.users = data.data
        })
    }
  }
}
</script>

<style scoped>

</style>
