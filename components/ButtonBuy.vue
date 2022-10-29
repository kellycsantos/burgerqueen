<template>
     <div class="flex ">
        <button @click="addCart" :disabled="desativado"
        class="h-8 w-12 rounded-md text-center border-0 text-white bg-[#ec483b] disabled:opacity-75">+</button>
              
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default({
    name:'InputQntd',
    props:{
        ativo: true
    },
    data(){
        return{
            desativado: false,
        }
    },
    methods:{
        ...mapActions("products", ["addToCart"]),
    addCart(index) {
      this.addToCart(index);
    },
        increment(){
            ++this.quantity
        },
        decrement(){
            --this.quantity
        },
        addCart(){
            this.desativado = true
            this.$emit('addCart')
            
        }
    }

})
</script>