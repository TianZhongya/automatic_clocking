<template>
  <el-container class="home_container">
    <el-container>
      <el-aside width="400px">
        <div style="margin: 20px">
          <div data-v-82e98f22="" class="title">
            <h2 data-v-82e98f22="" style="text-align: center">极不稳定打卡机</h2>
          </div>
          <div style="width: 300px; margin:0 auto;">
            <el-image
              :src="require('../assets/icon.jpg')"
              fit="contain"
            ></el-image>
          </div>
          <div data-v-82e98f22="" class="description">
<!--            <div data-v-82e98f22="" class="content-line ant-row">-->
<!--              <div data-v-82e98f22="" class="ant-col ant-col-5">-->
<!--                <h3 data-v-82e98f22="">简介</h3>-->
<!--              </div>-->
<!--              <div data-v-82e98f22="" class="ant-col ant-col-19"><span data-v-82e98f22="">-->
<!--                              <ol>-->
<!--                                <li>本系统会存储明文密码，介意的可以和我要程序自己部署</li>-->
<!--                                <li>风险未知，可能会有少数字段填错，需要删除自己的信息请找我</li>-->
<!--                                <li>出事不要怪我</li>-->
<!--                              </ol>-->
<!--                            </span></div>-->
<!--            </div>-->
          </div>
        </div>
<!--        <el-menu-->
<!--          router-->
<!--          background-color="#545c64"-->
<!--          text-color="#fff"-->
<!--          active-text-color="#ffd04b"-->
<!--          :default-active="$route.path"-->
<!--        >-->
<!--          <el-menu-item :index="'/'+item.path" v-for="item in menulist" :key="item.id">-->
<!--            <template>-->
<!--              <i class="el-icon-location"></i>-->
<!--              <span>{{item.authName}}</span>-->
<!--            </template>-->
<!--          </el-menu-item>-->
<!--        </el-menu>-->
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
        // { id: 1, path: 'log', authName: '打卡日志' },
        // { id: 2, path: 'users', authName: '查看所有用户' },
        // { id: 3, path: 'addUser', authName: '添加用户' }
      ],
      logo: '../assets/icon.jpg'
    }
  }
}
</script>

<style type="less" scoped>
  .home_container{
    height: 100%;
  }
  .el-aside {
    background-color: #ffffff;
    color: #333;
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
