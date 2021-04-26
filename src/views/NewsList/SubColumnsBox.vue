<template>
    <div class="sub-col-box">
    </div>
</template>

<script>
    export default {
        //子栏目盒子
        name:'SubColumnsBox',
        props: {
            parentId: {
                type: String | Number,
                default: undefined,
                required: true
            }
        },
        data() {
            return {

            }
        }
    }
</script>

<style>

</style>