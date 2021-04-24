<template>
    <div class="app-header">
       <div class="app-header-content">
           <el-row type="flex" align="middle" style="width:100%" >
               <el-col :span="7">
                   <router-link :to="{ name: '首页'}">
                        <el-image
                            style="width: 100%; height: 100%"
                            :src="logoUrl">
                        </el-image>
                   </router-link>
                   <!-- <h1 class="app-logo">
                       <router-link :to="{ name: '首页'}">
                           Logo
                       </router-link>
                   </h1> -->
               </el-col>
               <el-col :span="17">
                   <MyNav/>
               </el-col>
           </el-row>
       </div>
    </div>
</template>

<script>
import MyNav from './components/MyNav'

    export default {
        name:'MyHeader',
        components: { MyNav },
        data() {
            return {
                logoUrl: require('@/assets/myLogo.png')
            }
        }
    }
</script>

<style lang="scss">
@import '~@/styles/variables.scss';

.app-header {
    // height: 120px;//不要固定高度，自适应最好
    background: $topic-color;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    color: #FFFFFF;

    * {
        margin: 0;
    }

    .app-logo {
        a {
            outline: none;
            text-decoration: none;
            color: #FFFFFF;
        }
    }

    .app-header-content {
        width: $content-percentage;
        padding: 10px 5px;
        display: flex;
        align-items: center;

        .app-header-tool {
            height: 35px;
            display: flex;
            justify-content: flex-end;

            .search-btn {
                background-color: rgba(0, 0, 0, 0); 
                padding: 0 0;
                border: 0px;
                border-color: rgba(0, 0, 0, 0);
                color: rgba(0, 0, 0, 0);
            }
            button {
                width: 24px;
                height: 24px;
                background: none;
                text-align: center;
                color: #fff;
                line-height: 24px;
                display: inline;
                border: 0px;

                i {
                    font-size: 14px;
                    cursor: pointer;
                }
            }

            .el-input__inner {
                // background-color: rgba(0, 0, 0, 0);
                background-color:#790507 !important;  
                border: 0;
            }
        }
    }
}
</style>