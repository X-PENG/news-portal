<template>
    <div class="app-index">
        <div class="headlines-container">
            <Headlines/>
        </div>
        <div class="carousel-container">
            <!-- <MyCarouselBox style="width:85%"/> -->
            <CarouselContainer style="width:85%"/>
        </div>

        <NewsItem/>
        <br/>
        <NewsItem/>
    </div>
</template>

<script>
// import MyCarouselBox from './components/MyCarouselBox'
import Headlines from './components/Headlines'
import NewsItem from '@/components/NewsItem'
import CarouselContainer from './components/CarouselContainer'

    export default {
        name:'Home',
        components: { CarouselContainer, Headlines, NewsItem },
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss">
.app-index {
    box-sizing: border-box;

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