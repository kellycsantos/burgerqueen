<template>
  <div class="flex  flex-wrap max-h-[90vh] h-[90vh] overflow-y-scroll   justify-center">
    <div class="w-full"><Paginate/></div>
    
  <Card/>
   
  </div>
</template>
<script>
import { mapState } from "vuex";

import Card from "@/components/ProductCard.vue";
import Paginate from "./Paginate.vue";
export default {
  name: "ProductContainer",
  components: {
    Card,
    Paginate
  },
  computed: {
    ...mapState("products", ["items", "cart"]),
  },
  data(){
    return{
      rota: this.$route.name
    }
  }
}

</script>
<style scoped>
::-webkit-scrollbar {
  width: 8px;

}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
  background: #ec483b; 
  border-radius: 10px;
}
</style>

