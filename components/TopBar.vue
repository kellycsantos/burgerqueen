<template>
  <div class="flex justify-end items-center py-4 pr-6 sm:pr-12 border-2">
    <label class="flex items-center bg-[#f3f3f3] h-12 rounded-lg p-2">
      <input v-model="search" class="w-28 h-full outline-0 bg-transparent" type="text" placeholder="Buscar..." />
      <button @click="pesquisar()" class=" w-6 sm:w-8 ml-2 flex items-center justify-center border-0">
        <img class="" src="../static/icons/lupa.png" />
      </button>
    </label>
    <NuxtLink to="/cart">
    <button class="w-12 h-12 ml-2 flex items-center justify-center border-0">
        
        <div class="relative left-8 top-[-8px] bg-red-500 rounded-full">
            <div class="w-8 text-white">{{cart.quantity}}</div>
        </div>
      <img src="../static/icons/cart.png" class=" ml-[-32px]" />
    </button>
</NuxtLink>

  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default({
    name:'TopBar',
    computed:{
        ...mapState('products',['cart']),
    },
    data(){
      return{
        search: ''
      }
    },
    methods:{
      ...mapActions('products', ['getSearchProducts']),
      pesquisar(){
        this.getSearchProducts(this.search)
      }
    }

})

</script>
