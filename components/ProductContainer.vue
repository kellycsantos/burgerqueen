<template>
  <div class="flex flex-wrap max-h-[90vh] h-[90vh] overflow-y-scroll   justify-center">

  <Card/>
   
  </div>
</template>
<script>
import { mapState } from "vuex";

import Card from "@/components/ProductCard.vue";
export default {
  name: "ProductContainer",
  components: {
    Card,
  },
  computed: {
    ...mapState("products", ["items", "cart"]),
  }

};
</script>

