<template>
    <div class="my-menu-bar">
        <el-menu
        mode="horizontal"
        :default-active="computeDefaultActive"
        :text-color="'#FFFFFF'"
        :active-text-color="'#FFFFFF'"
        @select="handleSelect"
        >
            <el-menu-item
                v-for="item in menuItems"
                :key="menuBarId + item.id"
                :index="menuBarId + item.id"
            >
                {{ item.title }}
            </el-menu-item>
        </el-menu>        
    </div>
</template>

<script>
    export default {
        name:'MyMenuBar',
        props: {
            //用于生成菜单项的唯一标识
            menuBarId: {
                type: String,
                default: null,
                required: true
            },
            menuItems: {
                type: Array,
                default: null,
                required: true
            },
            defaultActive: {
                type: String,
                default: null,
                required: true
            },
        },
        data() {
            return {

            }
        },
        computed: {
            computeDefaultActive: {
                get() {
                    return this.defaultActive
                },
                set(val) {
                }
            }
        },
        methods: {
            handleSelect(index) {
                this.computeDefaultActive = -1//先不选中，让父组件通过defaultActive控制选中
                //向父组件发射事件
                this.$emit('select-menu', index)
                //进行路由导航
                //因为菜单项的index = menuBarId + colId
                let colId = index.replace(this.menuBarId, '')
                this.$router.push({name: '栏目新闻列表', params: { colId: colId }, query: {t: new Date().getTime()}})
            }
        }
    }
</script>

<style lang="scss">
.my-menu-bar .el-menu {
    background-color: inherit;
    border: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

    .el-menu-item {
        font-size: 18px;
        height: 40px;
        line-height: 40px;
        /* font-family: "Microsoft YaHei"; */
        &:hover {
            cursor: pointer;
            background-color:#790507 !important;            
        }
        //.el-menu-item.is-active 表示一个标签“同时有”el-menu-item和is-active两个class时的样式
        &.is-active {
            background-color: rgba(0, 0, 0, 0) !important;
            border-bottom-width: 1px;            
        }
    }
}
</style>