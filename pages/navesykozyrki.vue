<template>
        <div id="dle-content">	<div class="statall">
                <h1><span class="masha_index masha_index1" rel="1"></span>навесы и козырьки</h1>
                <div><span class="masha_index masha_index2" rel="2"></span>Не только защитят вас от непогоды, но и украсят вход в Ваш дом на долгие годы!</div>
            <h2><span class="masha_index masha_index3" rel="3"></span>Навесы и козырьки выполненные нашими кузнецами – качество на века.</h2>
            <div><span class="masha_index masha_index4" rel="4"></span>К тому же, мы будем рады украсить не только вход на Вашем загородном доме, но и сад. Ведь козырьки над дверьми и воротами, это не всё на что мы способны. Навесы для беседок и качелей, позволят Вашей семье не бежать в укрытие от дождя тёплыми, но немного дождливыми вечерами.</div>
            <div class="thispage"><span class="masha_index masha_index5" rel="5"></span>На этой странице вы можете просмотреть фото-галерею уже выполненных работ. Для составления эскиза и уточнения цены обращайтесь по тел. +7(963)823-35-00.</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
           <nuxt-link :to="'/navesi'"> <div class="tabmain2"><a><span class="masha_index masha_index6" rel="6"></span>Навесы</a></div></nuxt-link>
           <nuxt-link :to="'/kozyrky'"> <div class="tabmain2"><a><span class="masha_index masha_index7" rel="7"></span>Козырьки</a></div></nuxt-link>
                <br clear="all">
                <div class="storenumber"></div>
            </div>
            <nuxt-link :to="'/navesykozyrki'"><div class="jallback"> <a><span class="masha_index masha_index8" rel="8"></span>Вернуться назад</a></div></nuxt-link>
            </div>
</template>

<script>
 



export default {
  name: 'navesykozyrki',               
  components: {              
                
  },
data () {
    return {}
    }
}



</script>


<style scoped>

 .thispage{
     margin-bottom: 20px;
 }

.jallback{
    margin:20px 0 0px 0;
}
</style>