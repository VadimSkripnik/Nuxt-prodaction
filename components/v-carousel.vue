
// --------------Слайдер---------------
<template>
    <div class="slider_1">
        <div class="v-carousel" :style="{'margin-left': '-' + (100 * currentSlideIndex) + '%' }">
            
            <v-carousel-item
            v-for="item in carousel_data"
            :key="item.id"
            :item_data="item"
            :width="600"
            />
           
           
            <!-- <v-carousel-item
            v-for="item in carousel_data"
            :key="item.id"
            :item_data="item"
            :imageSlide="false"
            :width="600"
            /> -->

             <!-- <v-carousel-item
            v-for="item in carousel_data"
            :key="item.id"
            :item_data="item"
            :imageSlide="false"
            :width="slideWidth"
            /> -->
        </div>
        <button @click="prevSlide">Prev</button>
        <button @click="nextSlide">Next</button>
    </div>
</template>




<script>
   import vCarouselItem from './v-carousel-item'
    
    export default {
        name: "v-carousel",
        components: {
            vCarouselItem
        },
        props: {
            carousel_data: {
                type: Array,
                default: () =>[]
            },
            interval:{
                type: Number,
                default: 0
            },
            slideWidth:{
                type: Number,
                default: 300
            }
        },
        data () {
            return {
              currentSlideIndex: 0
            }
            },
            methods: {
                prevSlide() {
                  if (this.currentSlideIndex > 0) {
                      this.currentSlideIndex--
                   
                  }
                },
                 nextSlide() {
                      if (this.currentSlideIndex >= this.carousel_data.length - 1) {
                           this.currentSlideIndex = 0
                       } else {
                            this.currentSlideIndex++
                       }
                     
                }
            },
            mounted() {
                if (this.interval > 0) {
                   let vm = this;
                   setInterval( function () {
                       vm.nextSlide()
                   },vm.interval) 
                }
            }
    }

</script>

<style scoped>
    .slider_1 {
      max-width: 800px;
      height: 550px;
      overflow: hidden; 
      margin: 0 auto;
    }

    .v-carousel {
        display: inline-flex;
        transition: all ease .5s;
    }

</style>