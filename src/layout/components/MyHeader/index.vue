<template>
    <div class="app-header">
       <div class="app-header-content">
           <el-row type="flex" align="middle" style="width:100%" >
               <el-col :span="7">
                   <h1>Logo</h1>
               </el-col>
               <el-col :span="17">
                   <!-- <div class="app-header-tool"> -->
                        <!-- <div class="f-search" style="background: none;">
                            <input type="text" style="width: 0px; border:0;padding:0">
                            <button><i class="fa fa-lg fa-search" style="color: rgb(255, 255, 255);"></i></button>
                        </div>                        -->
                        <!-- <el-input 
                            v-model="searchText"
                            style="width: 300px"
                            size="small" 
                            placeholder="请输入..."
                            suffix-icon="el-icon-search"
                        >
                        </el-input> -->
                   <!-- </div> -->
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
                searchText: ''
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