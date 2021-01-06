<template>
<div id="dle-content">	<div class="statall">
		<h1><span class="masha_index masha_index1" rel="1"></span>Сувениры</h1>
		<nuxt-link :to="'/bytilnici'"><a  class="tabstr"><span class="masha_index masha_index2" rel="2"></span>Бутыльницы</a></nuxt-link>
    <nuxt-link :to="'/podcvechniki'"> <a class="tabstr"><span class="masha_index masha_index3" rel="3"></span>Подсвечники</a></nuxt-link>
    <nuxt-link :to="'/klychnici'"><a class="tabstr"><span class="masha_index masha_index4" rel="4"></span>Ключницы</a></nuxt-link>
		<br clear="all">
		<div class="storenumber"></div>
	</div>
<nuxt-link :to="'/'"><div class="jallback"> <a><span class="masha_index masha_index9" rel="9"></span>Вернуться назад</a></div></nuxt-link>
</div>

</template>

<script>

export default {
  name: 'cyveniry',               
  components: {},
data () {
    return {}
    }
}



</script>


<style scoped>

 

</style>