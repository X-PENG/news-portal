<template>
    <div class="news-item">
        <section class="imgHover">
            <div class="item-lf">
                <span class="item-date"> 2021/04/<strong> 15</strong></span>
            </div>
            <div class="item-img">
                <a class="imgResponsive" href="http://news.pku.edu.cn/xwzh/b0d100f86a94487596d5f023157d8565.htm">
                    <img src="http://news.pku.edu.cn/images/2021-04/1f637c857f0c4132ae86c2e5cad6eec5.jpeg" alt="" title="" style="outline: red dashed 1px;">
                </a>
            </div>
            <div class="item-txt">
                <div>
                    <h3><a href="http://news.pku.edu.cn/xwzh/b0d100f86a94487596d5f023157d8565.htm">花儿为什么这样红——北京大学党史教育全景图</a></h3>
                    
                </div>
                <p> 花儿为什么这样红——北京大学党史教育全景图 复原后的李大钊图书馆主任办公室 资料图片 《李大钊年谱》 资料图片 北大师生排队为李大钊雕像献花  资料图片 这几天，一部《花儿...  </p>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        //该组件表示新闻列表中的一个新闻
        name:'NewsItem',
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss">
.news-item {
    font-family: 'Microsoft YaHei',SimSun,SimHei ,"STHeiti Light",STHeiti,"Lucida Grande", Tahoma,Arial, Helvetica, sans-serif;

    section {
        padding: 38px 0;
        border-bottom: 1px solid #ededed;
        transition: all 0.3s ease-in-out;
        min-height: 180px;
    }

    /**可以不用，重复定义了
    .imgHover, .imgHover * {
        transition: all 0.3s ease-in-out;
    }
    */


/**

    总结，hover时出现红框的动画是使用 before + transition 做的，原理是：
        先使用before选择器，在元素之前加上 红框，但是height设为0，即没显示；
        当，hover的时（即hover:before），再将height变成100%，就会出现红框；
        再搭配上top left的移动 和 transition过渡，就是完整的红框出现动画了。

*/

    .imgHover {
        position: relative;

        &:hover {
            z-index: 10;
            position: relative;
            a, span, strong, p {
                color: #FFFFFF;
            }
        }

        //hover时的红框，此时没有显示出来 
        &:before {
            content: '';
            background-color: #94070a;
            display: block;
            position: absolute;
            z-index: 10;
            //红框初始宽度就是100%
            width: 100%;
            //初始时，红框没有高度，即显示不出来
            height: 0;
            left: 0%;
            //红框从中间出现渐渐出现
            top: 50%;
            background-size: 50% 50%;
            background-repeat: no-repeat;
            transition: all 0.3s ease-in-out;
            border-radius: 0 15px 0 15px;            
        }

        //hover之后，红框就会显示出来，因为height从0 -> 100%
        &:hover:before {
            //hover时，红框宽度的变化，可以变得更长也可以更短。即，hover时，从100%->104%，（给人一种变大的动态感）
            width: 104%;
            //红框往左移动2%，由于width：104%，所以，最终，左边补2%，右边出2%。最终的动画效果是，红框的宽度会往两边各扩大2%。
            left: -2%;
            //hover时，height 从0% -> 100%
            height: 100%;
            //hover时，红框从top 50% -> 0%，高度完全罩住盒子。效果就是，红色从中间往上往下逐渐填满
            top: 0%;
            content: '';
            //阴影
            box-shadow: 3px 35px 77px -17px rgb(139 0 18 / 50%);
        } 

        &:after {
            height: 0;
            width: 0;
        }

        //花纹背景
        &:hover:after {
            content: '';
            width: 104%;
            height: 100%;
            background: url(~@/assets/li_bg2.svg) no-repeat bottom right;
            overflow: hidden;
            position: absolute;
            left: -2%;
            top: 0;
            z-index: 11;
        } 

        /**
        .imgHover:hover:after {
            height: 106%;
            top: -3%;
            width: 106%;
            left: -3%;
        }
        */

        .item-lf {
            // width: 99px;
            width: 10%;//使用百分比布局
            float: left;
            border-top: 2px solid #94070a;
            padding-top: 10px;
            position: relative;
            z-index: 33;

            .item-date {
                display: block;
                font-size: 12px;
                color: #8c8c8c;
                text-align: right;
                padding-bottom: 2px;
            }

            .item-date strong {
                color: #94070a;
                font-size: 30px;
                padding: 0 0 0 3px;
                display: block;
            }            
        }

        .item-img {
            // width: 320px;
            width: 31%;//使用百分比布局
            float: left;
            // margin-left: 40px;
            margin-left: 4%;//使用百分比布局
            position: relative;
            z-index: 30;

            .imgResponsive {
                padding-bottom: 56.25%
            }

            .imgResponsive {
                width: 100%;
                height: 0;
                padding-bottom: 66.67%;
                overflow: hidden;
                display: block;

                img {
                    width: 100%;
                    transition: all 0.3s ease;
                }
            }      

            a {
                outline: none;
                text-decoration: none;
                color: #323232;
            }
        }

        .item-txt {
            // margin-left: 495px;
            margin-left: 48%;//使用百分比布局
            position: relative;
            z-index: 30;

            h3 {
                font-size: 18px;
                line-height: 24px;
                max-height: 48px;
                overflow: hidden;
                font-weight: normal;
                margin-bottom: 20px;

                a {
                    outline: none;
                    text-decoration: none;
                    color: #323232;
                }
            }     

            p {
                line-height: 21px;
                height: 84px;
                overflow: hidden;
                color: #828282;
            }
        }
    }

    .imgHover:hover {
        h3 a, .item-lf .item-date, .item-lf .item-date strong, p {
           color: #FFFFFF; 
        }
        .item-lf {
            border-color: #FFFFFF;
        }
    }
}
</style>