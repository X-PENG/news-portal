<template>
    <div>
        <MyHeader/>
        <AppMain/>
        <MyFooter/>
    </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import AppMain from './components/AppMain'
import MyFooter from './components/MyFooter'

    export default {
        name:'Layout',
        components: { MyHeader, AppMain, MyFooter },
        data() {
            return {

            }
        }
    }
</script>

<style>

</style>