import {allProducts, searchProducts, drinks , burger,dessert,side
} from "@/api/Erp"

const actions = {
   async getAll({commit}){
        let response = await allProducts.get()
        commit('SET_ITEMS', response.data.product)
        commit('SET_PAGINATION', response.data)
    },
    // http://localhost:4000/name/bata
    async getSearchProducts({commit}, search){
        let response = await searchProducts.get({
            uriParams:{
                search
            }
        })
        commit('SET_ITEMS', response.data.product)
        commit('SET_PAGINATION', response.data)
    },
    async getDrink({commit,state }){
        let response = await drinks.get(
            
               { params : {
                page: state.pagina
               } }
            
        )     
        commit('SET_ITEMS', response.data.product)
        commit('SET_PAGINATION', response.data)
    },
    async getBurger({commit}){
        let response = await burger.get()
        commit('SET_ITEMS', response.data.product)
        commit('SET_PAGINATION', response.data)
    },
    async getDessert({commit}){
        let response = await dessert.get()
        commit('SET_ITEMS', response.data.product)
        commit('SET_PAGINATION', response.data)
    },
    async getSide({commit}){
        let response = await side.get()
        commit('SET_ITEMS', response.data.product)
        commit('SET_PAGINATION', response.data)
    },
    addToCart({commit,state},data){
        let prices = state.cart.amount
        let resume = data.price
        function sum(){
            for(let i =0; i < prices.length; i++)
            resume += (prices[i])
        }
       sum()
        commit('SET_TO_CART', data)
        commit('SET_RESUME', (resume).toFixed(2))
    },

}




export default actions