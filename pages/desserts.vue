<template>
</template>
<script>
   import { mapState, mapActions } from "vuex";
export default({
  components:{
    
  },
  computed: {
    ...mapState("products", ["items"]),
    products() {
      return this.items;
    },
},
methods:{
    ...mapActions('products',['getDessert']),

},
mounted(){
    this.getDessert(0)
}

})
</script>