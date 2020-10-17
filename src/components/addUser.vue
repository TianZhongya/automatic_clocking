<template>
  <el-card>
    <el-form :inline="true" :model="userForm" class="demo-form-inline">
      <el-form-item label="学号">
        <el-input v-model="userForm.username" placeholder=学号></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="userForm.password" placeholder=密码></el-input>
      </el-form-item>
      <el-form-item label="真实姓名">
        <el-input v-model="userForm.realname" placeholder=可以随便填写></el-input>
      </el-form-item>
      <el-form-item label="校区名称">
        <el-select v-model="userForm.config.fieldSQxq" placeholder=校区 @change="xqSelect">
          <el-option
            v-for="item in XQoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="公寓楼名称">
        <el-select v-model="userForm.config.fieldSQgyl" placeholder=公寓楼 @change="gylSelect">
          <el-option
            v-for="item in GYoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="寝室号">
        <el-input v-model="userForm.config.fieldSQqsh" placeholder=寝室号></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="userForm.email" placeholder=用于接收通知></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: 'addUser',
  data () {
    return {
      userForm: {
        username: '',
        password: '',
        realname: '',
        config: {
          fieldSQgyl: '',
          fieldSQgyl_Name: '',
          fieldSQqsh: '',
          fieldSQxq: '',
          fieldSQxq_Name: ''
        },
        email: ''
      },
      GYoptions: [
        { value: '1', label: '北苑1公寓' },
        { value: '2', label: '北苑2公寓' },
        { value: '3', label: '南苑1公寓' },
        { value: '4', label: '南苑2公寓' },
        { value: '5', label: '南苑3公寓' },
        { value: '6', label: '南苑4公寓' },
        { value: '7', label: '南苑5公寓A区' },
        { value: '8', label: '南苑5公寓B区' },
        { value: '9', label: '南苑5公寓C区' },
        { value: '10', label: '南苑6公寓' },
        { value: '11', label: '南苑7公寓' },
        { value: '12', label: '南苑8公寓' },
        { value: '13', label: '南苑9公寓' },
        { value: '14', label: '大学城1公寓' },
        { value: '15', label: '大学城2公寓' },
        { value: '16', label: '大学城3公寓' },
        { value: '17', label: '文苑1公寓' },
        { value: '18', label: '文苑2公寓' },
        { value: '19', label: '文苑3公寓' },
        { value: '20', label: '文苑4公寓' },
        { value: '21', label: '文苑5公寓' },
        { value: '22', label: '文苑6公寓' },
        { value: '23', label: '文苑7公寓' },
        { value: '24', label: '文苑8公寓' },
        { value: '25', label: '文苑9公寓' },
        { value: '82', label: '校外居住' }
      ],
      XQoptions: [
        { value: '1', label: '中心校区' },
        { value: '2', label: '南岭校区' },
        { value: '3', label: '新民校区' },
        { value: '4', label: '南湖校区' },
        { value: '5', label: '和平校区' },
        { value: '6', label: '朝阳校区' },
        { value: '7', label: '前卫北区' }
      ]
    }
  },
  methods: {
    gylSelect (val) {
      let obj = {}
      obj = this.GYoptions.find((item) => {
        return item.value === val
      })
      this.userForm.config.fieldSQgyl_Name = obj.label
    },
    xqSelect (val) {
      let obj = {}
      obj = this.XQoptions.find((item) => {
        return item.value === val
      })
      this.userForm.config.fieldSQxq_Name = obj.label
    },
    onSubmit () {
      this.$axios.post('api/users', this.userForm)
        .then(
          this.$message.success('添加成功')
        )
    }
  }
}
</script>

<style scoped>

</style>
