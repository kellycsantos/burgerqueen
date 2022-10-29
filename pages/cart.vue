<template>
  <div class="h-[94vh] ">
    <div class="flex flex-col items-center" v-if="cart.cartItems.length > 0">
      <div class="max-h-[60vh] w-10/12 overflow-y-scroll p-2">
        <div
          v-for="item in cart.cartItems"
          :key="item._id"
          class="flex my-2 h-28 bg-[#f2f2f2] w-full"
        >
          <div class="flex  sm:w-32 mr-2"><img  class="w-32" :src="item.image" /></div>
          <div class="flex flex-col justify-evenly">
            <p class="text-lg font-bold capitalize">{{ item.name }}</p>
            <div class="flex items-center justify-between  w-full sm:w-64 font-semibold">
              <P class="text-[#ec483b] text-md"
                >R${{ item.price.toFixed(2) }}</P
              >

              <ButtonQntd />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="w-[60vw] flex flex-col text-xl my-8 ">
          <div class="flex justify-between border-b-4 border-dashed">
            <p class="font-bold">Total</p>
            <p>{{ cart.resume }}</p>
          </div>

          <button
            class="bg-[#ec483b] text-white text-md h-10 leading-4 rounded-md p-2 lg:self-end mt-4"
          >
            Efetuar pagamento
          </button>
        </div>
      </div>
    </div>
    <div
      v-else
      class="flex flex-col justify-center text-white text-center items-center h-[96vh] bg-[#ec483b]"
    >
      <p>Esse carrinho está tão vazio quanto sua barriga :'(</p>
      <NuxtLink to="/" class="underline"
        >Aqui tem umas coisas gostosas pra você</NuxtLink
      >
      <img src="../static/hungry-girl.png" alt="garota com fome" />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import ButtonQntd from "@/components/QntdButton.vue";
export default {
  name: "Cart",
  layout: "cart",
  components: {
    ButtonQntd,
  },
  computed: {
    ...mapState("products", ["cart"]),
  },
  methods: {
    duplicate(index) {
      if (index == index) {
        ("ja tem esse no carrinho");
      }
    },
  },
};
</script>
