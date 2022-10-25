<template>

</template>
<script>
   import { mapState, mapActions } from "vuex";
export default({
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
    this.getDessert()
    console.log('ola')
}

})
</script>