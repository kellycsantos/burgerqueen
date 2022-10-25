<!-- Please remove this file from your project -->
<template>
  <div class="">
    <button @click="getAllItems">Todos</button>
    <button @click="getBurgers">Hamburguer</button>
    <button @click="getDrinks">Bebidas</button>
    <button @click="getDesserts">Sobremesas</button>
    <button @click="getSides">Acompanhamentos</button>
    <br>
    <button @click="prevPage">Voltar</button>
    <button @click="nextPage">Avançar</button>
    <button @click="avancar">teste retornmo</button>
    
    <!-- <button @click="getBurgers">Pegar</button> -->
    pagina: {{ this.$store.state.products.pagina }}
    <span v-for="item in getProdutos" :key="item.id">
      <p>{{ item.name }}</p>
    </span>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "NuxtTutorial",
  computed: {
    ...mapState("products", ["items","pagina"]),
    getProdutos() {
      return this.items;
    },
    pag(){
      return this.pagina
    }
  },
  methods: {
    ...mapActions("products", [
      "getAll",
      "getSearchProducts",
      "getDrink",
      "getBurger",
      "getDessert",
      "getSide",
    ]),
    avancar(){
      this.prev()
      if(this.pag >= 0){
        return this.getDrink()
      }
    },
    nextPage(){
      this.next()
      if(this.pag >= 0){
        return this.getDrink()
      }
    },
    prevPage(){
      this.prev()
      if(this.pag >= 0){
        return this.getDrink()
      }
    },
    getAllItems() {
      return this.getAll();
    },
    searchItems() {
      return this.getSearchProducts();
    },
    getDrinks() {
      return this.getDrink();
    },
    getBurgers() {
      return this.getBurger();
    },
    getDesserts() {
      return this.getDessert();
    },
    getSides() {
      return this.getSide();
    },
    ...mapMutations("products", { 
      prev: "PAGE_PREV", 
      next: "PAGE_NEXT" 
    }),
  },
};
</script>

<style>
button {
  border: 1px solid gray;
  height: 40px;
}
</style>
