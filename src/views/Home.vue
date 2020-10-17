<template>
  <el-container class="home_container">
    <el-container>
      <el-aside width="200px">
        <el-menu
          router
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :default-active="$route.path"
        >
          <el-menu-item :index="'/'+item.path" v-for="item in menulist" :key="item.id">
            <template>
              <i class="el-icon-location"></i>
              <span>{{item.authName}}</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      menulist: [
        { id: 1, path: 'log', authName: '打卡日志' },
        { id: 2, path: 'users', authName: '查看所有用户' },
        { id: 3, path: 'addUser', authName: '添加用户' }
      ]
    }
  }
}
</script>

<style type="less" scoped>
  .home_container{
    height: 100%;
  }
  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 40px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
