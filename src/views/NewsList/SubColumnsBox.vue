<template>
    <div class="sub-col-box"
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
    >
        <el-card>
            <div slot="header">
                <span>{{ parentColTitle }}</span>
            </div>
            <div v-if="subColList.length > 0" class="sub-col-item-list-container">
                <SubColItem v-for="item in subColList" :key="'子栏目'+item.id" :colInfo="item"/>
            </div>
        </el-card>
    </div>
</template>

<script>
import SubColItem from './SubColItem'
import { subColList } from '@/api/newsList'
    export default {
        //子栏目盒子
        name:'SubColumnsBox',
        components: { SubColItem },
        props: {
            parentId: {
                type: String | Number,
                default: undefined,
                required: true
            },
            parentColTitle: {
                type: String,
                default: '子栏目列表',
            }
        },
        data() {
            return {
                loading: false,
                //子栏目列表
                subColList: []
            }
        },
        created() {
            console.log('子栏目box created钩子')
            this.init()
        },
        methods: {
            init() {
                this.loading = true
                subColList(this.parentId).then(resp => {
                    this.subColList = resp
                    this.loading = false
                }).catch(error => {
                    this.loading = false
                    this.$message({
                        message: '加载子栏目列表失败',
                        type: 'error'
                    })                    
                })
            }
        }
    }
</script>

<style lang="scss">
.sub-col-box {
    padding-top: 38px;
    font-family: Arial, Helvetica, sans-serif,微软雅黑;
    min-height: 100px;

   .el-card {
    //    border-width: 2px;

        .el-card__header {
            span {
                color: #94070a;
                font-weight: 700;
                font-size: 16px;
            }
        }

        .el-card__body {
            padding-top: 0px;
        }
   }


}
</style>