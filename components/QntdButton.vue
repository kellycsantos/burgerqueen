<template>
     <div class="flex h-8 text-center border-0 text-white">
            <button class="w-8 h-full border-0 bg-[#ec483b] disabled:opacity-75" @click="decrement" :disabled="quantity <= 1">-</button>
            <input class="w-10 h-full border-0 text-center text-black" type="text" :value="quantity">
            <button class="w-8 h-full border-0 bg-[#ec483b] disabled:opacity-75" @click="increment" :disabled="quantity >= 9">+</button>
            </div>
</template>
<script>
export default({
    name:'InputQntd',
    data(){
        return{
            quantity: 1,
        }
    },
    methods:{
        increment(){
            ++this.quantity
        },
        decrement(){
            --this.quantity
        }
    }

})
</script>