<template>
 <div>

 <div class="clr"></div> 
              <div class="clr"></div> 

             
                <h2 class="newzagh">Художественная ковка</h2>
                <p class="newtext">
                Мастерская «Кузнец» производит художественные металлоизделия методом ручной ковки. В процессе изготовления мы сохраняем древние традиции, а так же применяем современные технологии. Наша команда опытных дизайнеров и квалифицированных мастеров, учитывает ваши пожелания, чтобы вы всегда были уверенными в отличном качестве, долговечности продукции и эстетическом удовольствии. 
                </p>
                 <br><br>
                     <div class="slider111">
          
                               
                            <!-- // --------------Слайдер--------------- --> 
                               <v-carousel
                                 :carousel_data="sliderItems"
                                 :interval="2000" 
                              /> 

                             
                              
                            <!-- // --------------Слайдер--------------- -->
                        
                    </div>
            
             
              
                   
        
        
        
        <h2 class="newzagh">Адреса наших работ</h2>
        
        <p class="newtext">Пер.Мылкинский,2<br>ул.Аллея Труда 49<br>ул. Советская 1<br>и тд.
            <br><b>Ждем Вас!</b></p>
        <h2 class="newzagh" id="elm1">КРАСОТА, СТИЛЬ и КАЧЕСТВО.</h2>
        
             <nuxt-link   
             v-for="link of links"
             :key="link.title"
             :to="link.url"
             ><div class="container"><div class="box"><div class="content"><a>{{ link.title }}</a></div></div><svg>
                                   <filter id="wavy">
                                        <feTurbulence x="0" baseFrequency="0.02" numOctaves="5" seed="2">
                                            <animate attributeName="baseFrequency" dur="60s" values="0.02;0.05;0.02" repeatCount="indefinite" />
                                        </feTurbulence>
                                        <feDisplacementMap in="SourceGraphic" scale="30"/>
                                  </filter>    
                                </svg></div>
                                
             </nuxt-link>
       
             <div class=""></div> 
             <div class="clr"></div> 

        <div class="wrall"><br><br>
            <h2 class="newzagh">Наши преимущества</h2>
            <div class="mainprem"></div>
        </div>

</div>

</template>

<script>
  import vCarousel from '~/components/v-carousel'



export default {
  // vuelidate({params}) {
  //      return Boolean(params.id)
  // },
  head: {
    title: 'Каталог кованных изделий'
  },
  name: 'glavnay',               
  components: {              
    vCarousel,                
  },
data () {
    return {
                // --------------Слайдер---------------
              
              sliderItems: [
                {id: 1, name: 'ТЕКСТОВЫЙ СЛАЙДЕР1', img: 'sl1.jpg'},
                {id: 2, name: 'ТЕКСТОВЫЙ СЛАЙДЕР2', img: 'sl2.jpg'},
                {id: 3, name: 'ТЕКСТОВЫЙ СЛАЙДЕР3', img: 'sl3.jpg'},
                {id: 4, name: 'ТЕКСТОВЫЙ СЛАЙДЕР4', img: 'sl4.jpg'}
              ],
             links: [
                {title: 'Ворота и калитки', url: '/vorotaone'},                                  
                {title: 'Ограждения заборные', url: '/ogragdeniyzabori'},                        
                {title: 'Лестничные ограждения', url: '/lestnicaogragdeniy'},                    
                {title: 'Навесы и козырьки', url: '/navesykozyrki'},                             
                {title: 'Беседки и теплицы', url: '/besedkiteplici'},                            
                {title: 'Вольеры', url: '/voliery'},                                  
                {title: 'Цветочницы', url: '/cvetochnicy'},                                  
                {title: 'Оконные решетки', url: '/okonierechetki'},                              
                {title: 'Мангалы', url: '/mangali'},                                  
                {title: 'Каминные наборы', url: '/kaminienabory'},                               
                {title: 'Лавки, урны и качели', url: '/kacheli'},                                
                {title: 'Ритуальные ограждения', url: '/rityalnieogragdeniy'},                   
                {title: 'Адресные таблички', url: '/adressnietablichki'},                        
                {title: 'Кованые двери', url: '/kovaniedveri'},                                  
                {title: 'Декоративная мебель', url: '/dekorativnaymebel'},                                  
                {title: 'Перголы и Виноградники', url: '/pergolyvinogradniki'},                                 
                {title: 'Сувениры', url: '/cyveniry'},                                  
                {title: 'Разное', url: '/raznoe'}                                  
              ]// --------------Слайдер---------------
      }
    }
}



</script>


<style scoped>

 

</style>
