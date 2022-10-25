<template>

</template>

<script>
import { mapActions, mapState } from "vuex";

import SideMenu from "@/components/SideMenu.vue";
import TopBar from "@/components/TopBar.vue";
import CardContainer from "@/components/ProductContainer.vue";
import { computed } from "vue";
export default {
  name: "IndexPage",
  components: {
    SideMenu,
    TopBar,
    CardContainer,
  },
  computed: {
    ...mapState("products", ["items"]),
    produtos() {
      return this.items;
    },
  },
  methods:{
    ...mapActions('products',['getAll']),
    getProducts(){
      return 
    }
  },
  mounted(){
    this.getAll()
  }
};
</script>
