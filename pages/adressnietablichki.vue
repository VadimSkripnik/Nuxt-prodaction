<template>
<div id="dle-content">	<div class="statall">
		<h1><span class="masha_index masha_index1" rel="1"></span>Таблички и ящики</h1>
		<nuxt-link :to="'/adresnietablichkione'"><a class="tabstr"><span class="masha_index masha_index2" rel="2"></span>Адресные таблички</a></nuxt-link> 
    <nuxt-link :to="'/pochtoviychik'"><a class="tabstr"><span class="masha_index masha_index3" rel="3"></span>Почтовые ящики</a></nuxt-link>
		<br clear="all">
		<div class="storenumber"></div>
	</div>
<nuxt-link :to="'/'"><div class="jallback"> <a><span class="masha_index masha_index4" rel="4"></span>Вернуться назад</a></div></nuxt-link>

</div>



</template>

<script>

export default {
  name: 'adrssnietablichki',               
  components: {},
data () {
    return {}
    }
}



</script>


<style scoped>

 

</style>