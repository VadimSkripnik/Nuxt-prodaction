<template>
  <div>
    <div class="newkontatct">
                          <h1><span class="masha_index1" rel="1"></span>Контакты</h1>
                          <div><b><span class="masha_index2" rel="2"></span>Телефоны:&nbsp;</b>+7 (963) 823-35-00, 33-35-00</div>
                          <div><b><span class="masha_index3" rel="3"></span>Адрес:</b>&nbsp;г. Комсомольск-на-Амуре, Северное шоссе 62</div>
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                          <div><b><span class="masha_index7" rel="7"></span>Схема проезда:</b>&nbsp;<span style="letter-spacing: 0px; word-spacing: 0.1em;">&nbsp;</span></div>
                          <div><br>
                          </div>
                          <br clear="all">
                           <div id="app">
                                <yandex-map :coords="coords" @click="onClick">
                                  <ymap-marker 
                                    marker-id="123" 
                                    :coords="coords"
                                    :balloon-template="balloonTemplate"
                                  ></ymap-marker>
                                </yandex-map>
                           </div>
                            
             <div class="storenumber"></div>
          </div>
        <nuxt-link tag="li" :to="'/'"><div class="jallback"><a><span class="masha_index8" rel="8"></span>Вернуться назад</a></div></nuxt-link>
      </div>
             
                 
            


</template>

<script>
 

export default {
  head: {
    title: 'Контакты'
  },
  name: 'kontakts', 
  data: () => ({
    
    coords: [50.59799, 136.9769],
  }),              
  components: {              
             
  },
 computed:{
    balloonTemplate() {
      return `
        <h1 class="red">Hi, everyone!</h1>
        <p>I am here: ${this.coords}</p>
        <img src="http://via.placeholder.com/350x150">
      `
    }
  },
  methods:{
    onClick(e) {
      this.coords = e.get('coords');
    }
}

}



</script>


<style scoped>

 .ymap-container {
  height: 600px;
}
.red {
  color: red;
}

</style>