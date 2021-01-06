

// --------------Слайдер---------------

<template>
    <div class='v-carousel-item' :style="{'min-width':width + 'px'}">
        <img :src="require('../assets/images/' +item_data.img)" alt="" v-if="imageSlide">
        <div class="item_content" v-else>
            <p>{{item_data.name}}</p>
            <p>{{item_data.id}}</p>
        </div>
    </div>
</template>




<script>
    export default {
    name: "v-carousel-item",
    props: {
         item_data: {
                type: Object,
                default: () => {}
            },
            imageSlide: {
                type: Boolean,
                default: true
            },
            width: {
                type: Number,
                default: 300
            }
    },
    data () {
        return {
        
        }
        },
        computed: {
            
        }
    }

</script>

<style scoped>
   .v-carousel-item {
       width: 800px;
       height: 300px;
   }
</style>