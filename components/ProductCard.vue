<template>
  <div class="flex flex-wrap justify-center">
    <div
      v-for="item in items"
      :key="item._id"
      class="flex flex-col w-64 h-80 bg-white shadow-xl shadow-gray-500/60 items-center m-4 p-4 rounded-xl"
    >
      <div class="h-64 flex">
        <img class="w-80" :src="item.image" />
      </div>

      <div class="h-4/12 w-full flex flex-col items-center">
        <h2 class="text-lg font-bold text-center capitalize">
          {{ item.name }}
        </h2>
        <div class="flex w-full items-center justify-evenly">
          <P class="text-[#ec483b] font-semibold text-md"
            >R${{ item.price.toFixed(2) }}</P
          >

          <ButtonToCart @addCart="addCart(item)" />

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import ButtonQntd from "@/components/QntdButton.vue";
import ButtonToCart from "@/components/ButtonBuy.vue";
export default {
  name: "Card",
  components: {
    ButtonQntd,
    ButtonToCart,
  },
  computed: {
    ...mapState("products", ["items"]),
    products() {
      return this.items;
    },
  },
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    ...mapActions("products", ["addToCart"]),
    addCart(index) {
      this.addToCart(index);
    },
    increment() {
      ++this.quantity;
    },
    decrement() {
      --this.quantity;
    },
  },
};
</script>
