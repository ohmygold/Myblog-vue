<template>
    <div class="header">
        <el-row>
            <el-col :span="18" :offset="3"><div class="grid-content bg-purple-dark">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <router-link class="el-router" to="about">关于我</router-link>
                    <router-link class="el-router" to="skill">个人技能</router-link>
                    <router-link class="el-router" to="job">工作经验</router-link>
                    <router-link class="el-router" to="blog">个人博客</router-link>
                    <router-link class="el-router" to="error">404</router-link>
                </el-menu>
            </div></el-col>
        </el-row>
    </div>
</template>

<script>
 export default {
   data () {
     return {
        activeIndex: '1',
        activeIndex2: '1'
     }
   },
   methods:{
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
   },
   components: {

   }
 }
</script>

<style scoped>
  .header{
      position:fixed;
      width:100%;
      top:36px;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #42a07c;
  }
 .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .el-menu-demo{
      background-color:#42a07c;
      height:60px;
      font-size:0;
  }
  .el-router{
      text-decoration:none;
      display:inline-block;
      line-height:60px;
      width:20%;
      font-size:20px;
      text-align:center;
  }

 
</style>
