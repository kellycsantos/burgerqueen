import {
  allProducts,
  searchProducts,
  drinks,
  burger,
  dessert,
  side,
} from "@/api/Erp";

const actions = {
  async getAll({ commit }, page) {
    let response = await allProducts.get({
      uriParams: {
        page,
      },
    });
    commit("SET_ITEMS", response.data.product);
    commit("SET_PAGINATION", response.data);
  },
  async getSearchProducts({ commit }, search) {
    let response = await searchProducts.get({
      uriParams: {
        search,
      },
    });
    commit("SET_ITEMS", response.data.product);
    commit("SET_PAGINATION", response.data);
  },
  async getDrink({ commit, state }, page) {
    let response = await drinks.get({
      uriParams:{
        page
      }
    });
    commit("SET_ITEMS", response.data.product);
    commit("SET_PAGINATION", response.data);
  },
  async getBurger({ commit }, page) {
    let response = await burger.get({
      uriParams: {
        page,
      },
    });
    commit("SET_ITEMS", response.data.product);
    commit("SET_PAGINATION", response.data);
  },
  async getDessert({ commit }, page) {
    let response = await dessert.get({
      uriParams: {
        page,
      },
    });
    commit("SET_ITEMS", response.data.product);
    commit("SET_PAGINATION", response.data);
  },
  async getSide({ commit }, page) {
    let response = await side.get({
      uriParams: {
        page,
      },
    });
    commit("SET_ITEMS", response.data.product);
    commit("SET_PAGINATION", response.data);
  },
  addToCart({ commit, state }, data) {
    let prices = state.cart.amount;
    let resume = data.price;
    function sum() {
      for (let i = 0; i < prices.length; i++) resume += prices[i];
    }
    sum();
    commit("SET_TO_CART", data);
    commit("SET_RESUME", resume.toFixed(2));
  },
};

export default actions;
