<template>
    <div class="search-box">
        <el-input v-model="searchText" placeholder="">
            <template slot="append">
                <el-button>
                    <i class="fa fa-lg fa-search"></i>
                </el-button>
            </template>
        </el-input>
    </div>
</template>

<script>
    export default {
        name:'SearchBox',
        data() {
            return {
                searchText: ''
            }
        }
    }
</script>

<style lang="scss">
@import '~@/styles/variables.scss';

.search-box{
    box-sizing: border-box;
    width: 100%;
    // padding: 0 20px;
    .el-input__inner {
        border-radius: 0;
        background-color: rgba(0, 0, 0, 0);
        border: 1px solid $topic-color;
        border-right-width: 0;
    }

    .el-input-group__append {
        background-color: rgba(0, 0, 0, 0);
        border: 1px solid $topic-color;
        border-left-width: 0;
        border-radius: 0;

        i {
            color: $topic-color;
        }
    }
}    
</style>