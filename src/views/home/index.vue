<template>
    <div class="app-index">
        <div class="headlines-container">
            <Headlines/>
        </div>
        <div class="carousel-container">
            <MyCarouselBox style="width: 70%"/>
        </div>

        <NewsItem/>
        <br/>
        <NewsItem/>
    </div>
</template>

<script>
import MyCarouselBox from './components/MyCarouselBox'
import Headlines from './components/Headlines'
import NewsItem from '@/components/NewsItem'

    export default {
        name:'Home',
        components: { MyCarouselBox, Headlines, NewsItem },
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss">
.app-index {
    h1 {
        margin: 0;
    }
    .carousel-container {
        display: flex;
        justify-content: center;
        margin-top: 35px;
        margin-bottom: 40px;
    }
}

</style>