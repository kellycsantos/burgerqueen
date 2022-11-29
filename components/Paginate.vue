<template>
  <div class="flex justify-center sm:justify-end sm:pr-4">
    <div class="flex items-center">
      <button @click="prevPage" :disabled="totalPage.currentPage == 0" class="border-none w-10 disabled:opacity-75">
        <img
          class="h-full"
          src="../static/icons/prev-arrow.png"
          alt="página anterior"
        />
      </button>
      <div class="mx-4">
        Página {{ Number(totalPage.currentPage) + 1 }} de
        {{ totalPage.totalPages + 1 }}
      </div>
      <button @click="nextPage" :disabled="totalPage.currentPage == totalPage.totalPages" class="border-none w-10 disabled:opacity-75">
        <img
          class="h-full"
          src="../static/icons/next-arrow.png"
          alt="página seguinte"
        />
      </button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("products", ["pagination"]),
    totalPage() {
      return this.pagination;
    },
  },
  data() {
    return {
      page: 0,
      path: "index",
    };
  },
  methods: {
    ...mapActions("products", ["getAll", "getBurger","getDrink" , "getDessert", "getSide"]),
    nextPage() {
      if (this.page < this.totalPage.totalPages) {
        switch (this.$route.path) {
          case "/":
            this.getAll(++this.page);
            break;
            case "/menu":
            this.getAll(++this.page);
            break;
          case "/burgers":
            this.getBurger(++this.page);
            break;
          case "/drinks":
            this.getDrink(++this.page);
            break;
          case "/desserts":
            this.getDessert(++this.page);
            break;
          case "/sides":
            this.getSide(++this.page);
            break;
          default:
            break;
        }
      }
    },
    prevPage() {
      if (this.page > 0) {
        switch (this.$route.path) {
          case "/":
            this.getAll(--this.page);
            break;
            case "/menu":
            this.getAll(--this.page);
            break;
          case "/burgers":
            this.getBurger(--this.page);
            break;
            case "/drinks":
            this.getDrink(--this.page);
            break;
          case "/desserts":
            this.getDessert(--this.page);
            break;
          case "/sides":
            this.getSide(--this.page);
            break;
          default:
            break;
        }
      }
    },
  },
  watch: {
    $route(value) {
      this.path = value.path;
      this.page = 0
    },
  }
};
</script>
