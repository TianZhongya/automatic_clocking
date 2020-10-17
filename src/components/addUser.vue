<template>
  <el-card>
    <el-form :inline="true" :model="userForm" class="demo-form-inline">
      <el-form-item label="账号">
        <el-input v-model="userForm.username" placeholder=账号></el-input>
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
            v-for="item in codes.XSFX_XQ.items"
            :key="item.codeId"
            :label="item.codeName"
            :value="item.codeId">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="公寓楼名称">
        <el-select v-model="userForm.config.fieldSQgyl" placeholder=公寓楼 @change="gylSelect">
          <el-option
            v-for="item in codes.BKSFXRB_GYLMC.items"
            v-show="item.parentId === userForm.config.fieldSQxq"
            :key="item.codeId"
            :label="item.codeName"
            :value="item.codeId">
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
      codes: {
        XSFX_XQ: {
          name: 'XSFX_XQ',
          description: '学生返校_校区',
          codeType: 'Internal',
          tipFormat: '',
          total: 0,
          items: [
            {
              codeId: '1',
              codeName: '中心校区',
              description: '',
              parentId: '',
              enabled: true,
              itemIndex: 1
            },
            {
              codeId: '2',
              codeName: '南岭校区',
              description: '',
              parentId: '',
              enabled: true,
              itemIndex: 2
            },
            {
              codeId: '3',
              codeName: '新民校区',
              description: '',
              parentId: '',
              enabled: true,
              itemIndex: 3
            },
            {
              codeId: '4',
              codeName: '南湖校区',
              description: '',
              parentId: '',
              enabled: true,
              itemIndex: 4
            },
            {
              codeId: '5',
              codeName: '和平校区',
              description: '',
              parentId: '',
              enabled: true,
              itemIndex: 5
            },
            {
              codeId: '6',
              codeName: '朝阳校区',
              description: '',
              parentId: '',
              enabled: true,
              itemIndex: 6
            },
            {
              codeId: '7',
              codeName: '前卫北区',
              description: '',
              parentId: '',
              enabled: true,
              itemIndex: 7
            }
          ]
        },
        BKSFXRB_GYLMC: {
          name: 'BKSFXRB_GYLMC',
          description: '公寓楼名称',
          codeType: 'Internal',
          tipFormat: '',
          total: 0,
          items: [
            {
              codeId: '1',
              codeName: '北苑1公寓',
              description: '',
              parentId: '1',
              enabled: true,
              itemIndex: 1
            },
            {
              codeId: '2',
              codeName: '北苑2公寓',
              description: '',
              parentId: '1',
              enabled: true,
              itemIndex: 2
            },
            {
              codeId: '3',
              codeName: '南苑1公寓',
              description: '',
              parentId: '1',
              enabled: true,
              itemIndex: 3
            },
            {
              codeId: '4',
              codeName: '南苑2公寓',
              description: '',
              parentId: '1',
              enabled: true,
              itemIndex: 4
            },
            {
              codeId: '5',
              codeName: '南苑3公寓',
              description: '',
              parentId: '1',
              enabled: true,
              itemIndex: 4
            },
            {
              codeId: '6',
              codeName: '南苑4公寓',
              description: '',
              parentId: '1',
              enabled: true,
              itemIndex: 6
            },
            {
              codeId: '7',
              codeName: '南苑5公寓A区',
              description: '',
              parentId: '1',
              enabled: true,
              itemIndex: 7
            },
            {
              codeId: '8',
              codeName: '南苑5公寓B区',
              description: '',
              parentId: '1',
              enabled: true,
              itemIndex: 8
            },
            {
              codeId: '9',
              codeName: '南苑5公寓C区',
              description: '',
              parentId: '1',
              enabled: true,
              itemIndex: 9
            },
            {
              codeId: '10',
              codeName: '南苑6公寓',
              description: '',
              parentId: '1',
              enabled: true,
              itemIndex: 10
            },
            {
              codeId: '11',
              codeName: '南苑7公寓',
              description: '',
              parentId: '1',
              enabled: true,
              itemIndex: 11
            },
            {
              codeId: '12',
              codeName: '南苑8公寓',
              description: '',
              parentId: '1',
              enabled: true,
              itemIndex: 12
            },
            {
              codeId: '13',
              codeName: '南苑9公寓',
              description: '',
              parentId: '1',
              enabled: true,
              itemIndex: 13
            },
            {
              codeId: '14',
              codeName: '大学城1公寓',
              description: '',
              parentId: '1',
              enabled: true,
              itemIndex: 14
            },
            {
              codeId: '15',
              codeName: '大学城2公寓',
              description: '',
              parentId: '1',
              enabled: true,
              itemIndex: 15
            },
            {
              codeId: '16',
              codeName: '大学城3公寓',
              description: '',
              parentId: '1',
              enabled: true,
              itemIndex: 16
            },
            {
              codeId: '17',
              codeName: '文苑1公寓',
              description: '',
              parentId: '1',
              enabled: true,
              itemIndex: 17
            },
            {
              codeId: '18',
              codeName: '文苑2公寓',
              description: '',
              parentId: '1',
              enabled: true,
              itemIndex: 18
            },
            {
              codeId: '19',
              codeName: '文苑3公寓',
              description: '',
              parentId: '1',
              enabled: true,
              itemIndex: 19
            },
            {
              codeId: '20',
              codeName: '文苑4公寓',
              description: '',
              parentId: '1',
              enabled: true,
              itemIndex: 20
            },
            {
              codeId: '21',
              codeName: '文苑5公寓',
              description: '',
              parentId: '1',
              enabled: true,
              itemIndex: 21
            },
            {
              codeId: '22',
              codeName: '文苑6公寓',
              description: '',
              parentId: '1',
              enabled: true,
              itemIndex: 22
            },
            {
              codeId: '23',
              codeName: '文苑7公寓',
              description: '',
              parentId: '1',
              enabled: true,
              itemIndex: 23
            },
            {
              codeId: '24',
              codeName: '文苑8公寓',
              description: '',
              parentId: '1',
              enabled: true,
              itemIndex: 24
            },
            {
              codeId: '25',
              codeName: '文苑9公寓',
              description: '',
              parentId: '1',
              enabled: true,
              itemIndex: 25
            },
            {
              codeId: '26',
              codeName: '南岭1公寓',
              description: '',
              parentId: '2',
              enabled: true,
              itemIndex: 26
            },
            {
              codeId: '27',
              codeName: '南岭2公寓',
              description: '',
              parentId: '2',
              enabled: true,
              itemIndex: 27
            },
            {
              codeId: '28',
              codeName: '南岭3公寓',
              description: '',
              parentId: '2',
              enabled: true,
              itemIndex: 28
            },
            {
              codeId: '29',
              codeName: '南岭4公寓',
              description: '',
              parentId: '2',
              enabled: true,
              itemIndex: 29
            },
            {
              codeId: '30',
              codeName: '南岭5公寓',
              description: '',
              parentId: '2',
              enabled: true,
              itemIndex: 30
            },
            {
              codeId: '31',
              codeName: '南岭6公寓',
              description: '',
              parentId: '2',
              enabled: true,
              itemIndex: 31
            },
            {
              codeId: '32',
              codeName: '南岭7公寓',
              description: '',
              parentId: '2',
              enabled: true,
              itemIndex: 32
            },
            {
              codeId: '33',
              codeName: '南岭8公寓',
              description: '',
              parentId: '2',
              enabled: true,
              itemIndex: 33
            },
            {
              codeId: '34',
              codeName: '南岭9公寓',
              description: '',
              parentId: '2',
              enabled: true,
              itemIndex: 34
            },
            {
              codeId: '35',
              codeName: '南岭10公寓',
              description: '',
              parentId: '2',
              enabled: true,
              itemIndex: 35
            },
            {
              codeId: '36',
              codeName: '南岭11公寓',
              description: '',
              parentId: '2',
              enabled: true,
              itemIndex: 36
            },
            {
              codeId: '37',
              codeName: '南岭12公寓A区',
              description: '',
              parentId: '2',
              enabled: true,
              itemIndex: 37
            },
            {
              codeId: '38',
              codeName: '南岭12公寓B区',
              description: '',
              parentId: '2',
              enabled: true,
              itemIndex: 38
            },
            {
              codeId: '39',
              codeName: '南岭12公寓C区',
              description: '',
              parentId: '2',
              enabled: true,
              itemIndex: 39
            },
            {
              codeId: '40',
              codeName: '南岭13公寓',
              description: '',
              parentId: '2',
              enabled: true,
              itemIndex: 40
            },
            {
              codeId: '41',
              codeName: '南岭14公寓',
              description: '',
              parentId: '2',
              enabled: true,
              itemIndex: 41
            },
            {
              codeId: '42',
              codeName: '新民1公寓',
              description: '',
              parentId: '3',
              enabled: true,
              itemIndex: 42
            },
            {
              codeId: '43',
              codeName: '新民2公寓',
              description: '',
              parentId: '3',
              enabled: true,
              itemIndex: 43
            },
            {
              codeId: '44',
              codeName: '新民3公寓',
              description: '',
              parentId: '3',
              enabled: true,
              itemIndex: 44
            },
            {
              codeId: '45',
              codeName: '新民4公寓',
              description: '',
              parentId: '3',
              enabled: true,
              itemIndex: 45
            },
            {
              codeId: '46',
              codeName: '新民5公寓',
              description: '',
              parentId: '3',
              enabled: true,
              itemIndex: 46
            },
            {
              codeId: '47',
              codeName: '新民6公寓',
              description: '',
              parentId: '3',
              enabled: true,
              itemIndex: 47
            },
            {
              codeId: '48',
              codeName: '新民7公寓',
              description: '',
              parentId: '3',
              enabled: true,
              itemIndex: 48
            },
            {
              codeId: '49',
              codeName: '新民8公寓',
              description: '',
              parentId: '3',
              enabled: true,
              itemIndex: 49
            },
            {
              codeId: '50',
              codeName: '新民9公寓',
              description: '',
              parentId: '3',
              enabled: true,
              itemIndex: 50
            },
            {
              codeId: '51',
              codeName: '新民10公寓',
              description: '',
              parentId: '3',
              enabled: true,
              itemIndex: 51
            },
            {
              codeId: '52',
              codeName: '新民11公寓',
              description: '',
              parentId: '3',
              enabled: true,
              itemIndex: 52
            },
            {
              codeId: '53',
              codeName: '南湖1公寓',
              description: '',
              parentId: '4',
              enabled: true,
              itemIndex: 53
            },
            {
              codeId: '54',
              codeName: '南湖2公寓',
              description: '',
              parentId: '4',
              enabled: true,
              itemIndex: 54
            },
            {
              codeId: '55',
              codeName: '南湖3公寓',
              description: '',
              parentId: '4',
              enabled: true,
              itemIndex: 55
            },
            {
              codeId: '56',
              codeName: '南湖4公寓',
              description: '',
              parentId: '4',
              enabled: true,
              itemIndex: 56
            },
            {
              codeId: '57',
              codeName: '南湖5公寓',
              description: '',
              parentId: '4',
              enabled: true,
              itemIndex: 57
            },
            {
              codeId: '58',
              codeName: '南湖6公寓',
              description: '',
              parentId: '4',
              enabled: true,
              itemIndex: 58
            },
            {
              codeId: '59',
              codeName: '朝阳1公寓',
              description: '',
              parentId: '6',
              enabled: true,
              itemIndex: 59
            },
            {
              codeId: '60',
              codeName: '朝阳2公寓',
              description: '',
              parentId: '6',
              enabled: true,
              itemIndex: 60
            },
            {
              codeId: '61',
              codeName: '朝阳3公寓',
              description: '',
              parentId: '6',
              enabled: true,
              itemIndex: 61
            },
            {
              codeId: '62',
              codeName: '朝阳4公寓',
              description: '',
              parentId: '6',
              enabled: true,
              itemIndex: 62
            },
            {
              codeId: '63',
              codeName: '朝阳5公寓',
              description: '',
              parentId: '6',
              enabled: true,
              itemIndex: 63
            },
            {
              codeId: '64',
              codeName: '朝阳6公寓',
              description: '',
              parentId: '6',
              enabled: true,
              itemIndex: 64
            },
            {
              codeId: '65',
              codeName: '朝阳7公寓',
              description: '',
              parentId: '6',
              enabled: true,
              itemIndex: 65
            },
            {
              codeId: '66',
              codeName: '和平1公寓',
              description: '',
              parentId: '5',
              enabled: true,
              itemIndex: 66
            },
            {
              codeId: '67',
              codeName: '和平2公寓',
              description: '',
              parentId: '5',
              enabled: true,
              itemIndex: 67
            },
            {
              codeId: '68',
              codeName: '和平3公寓',
              description: '',
              parentId: '5',
              enabled: true,
              itemIndex: 68
            },
            {
              codeId: '69',
              codeName: '和平4公寓',
              description: '',
              parentId: '5',
              enabled: true,
              itemIndex: 69
            },
            {
              codeId: '70',
              codeName: '和平5公寓',
              description: '',
              parentId: '5',
              enabled: true,
              itemIndex: 70
            },
            {
              codeId: '71',
              codeName: '和平6公寓',
              description: '',
              parentId: '5',
              enabled: true,
              itemIndex: 71
            },
            {
              codeId: '72',
              codeName: '和平7公寓',
              description: '',
              parentId: '5',
              enabled: true,
              itemIndex: 72
            },
            {
              codeId: '73',
              codeName: '和平8公寓',
              description: '',
              parentId: '5',
              enabled: true,
              itemIndex: 73
            },
            {
              codeId: '74',
              codeName: '北区1公寓',
              description: '',
              parentId: '7',
              enabled: true,
              itemIndex: 74
            },
            {
              codeId: '75',
              codeName: '北区2公寓',
              description: '',
              parentId: '7',
              enabled: true,
              itemIndex: 75
            },
            {
              codeId: '76',
              codeName: '北区3公寓',
              description: '',
              parentId: '7',
              enabled: true,
              itemIndex: 76
            },
            {
              codeId: '77',
              codeName: '北区4公寓',
              description: '',
              parentId: '7',
              enabled: true,
              itemIndex: 77
            },
            {
              codeId: '78',
              codeName: '北区5公寓',
              description: '',
              parentId: '7',
              enabled: true,
              itemIndex: 78
            },
            {
              codeId: '79',
              codeName: '北区6公寓',
              description: '',
              parentId: '7',
              enabled: true,
              itemIndex: 79
            },
            {
              codeId: '80',
              codeName: '北区7公寓',
              description: '',
              parentId: '7',
              enabled: true,
              itemIndex: 80
            },
            {
              codeId: '81',
              codeName: '北区8公寓',
              description: '',
              parentId: '7',
              enabled: true,
              itemIndex: 81
            },
            {
              codeId: '82',
              codeName: '校外居住',
              description: '',
              parentId: '1',
              enabled: true,
              itemIndex: 82
            },
            {
              codeId: '83',
              codeName: '校外居住',
              description: '',
              parentId: '2',
              enabled: true,
              itemIndex: 83
            },
            {
              codeId: '84',
              codeName: '校外居住',
              description: '',
              parentId: '3',
              enabled: true,
              itemIndex: 84
            },
            {
              codeId: '85',
              codeName: '校外居住',
              description: '',
              parentId: '4',
              enabled: true,
              itemIndex: 85
            },
            {
              codeId: '86',
              codeName: '校外居住',
              description: '',
              parentId: '5',
              enabled: true,
              itemIndex: 86
            },
            {
              codeId: '87',
              codeName: '校外居住',
              description: '',
              parentId: '6',
              enabled: true,
              itemIndex: 87
            },
            {
              codeId: '88',
              codeName: '校外居住',
              description: '',
              parentId: '7',
              enabled: true,
              itemIndex: 88
            }
          ]
        }
      },
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
      obj = this.codes.BKSFXRB_GYLMC.items.find((item) => {
        return item.codeId === val
      })
      this.userForm.config.fieldSQgyl_Name = obj.codeName
    },
    xqSelect (val) {
      let obj = {}
      obj = this.codes.XSFX_XQ.items.find((item) => {
        return item.codeId === val
      })
      this.userForm.config.fieldSQxq_Name = obj.codeName
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
