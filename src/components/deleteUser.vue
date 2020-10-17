<template>
  <el-form :inline="true" :model="deleteForm">
    <el-form-item label="学号">
      <el-input v-model="deleteForm.username" placeholder=学号></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="deleteForm.password" placeholder=密码></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="deleteUser"></el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'deleteUser',
  data () {
    return {
      deleteForm: {}
    }
  },
  methods: {
    deleteUser () {
      this.$axios.delete('api')
        .then()
    }
  }
}
</script>

<style scoped>

</style>
