
const multations = {
    SET_NAME (state){
        state.user = 'novo nome'
    },
    SET_ITEMS(state, data){
        state.items = data
    },
    SET_PAGINATION(state,data){
        state.pagination.itemsTotal = data.itemsTotal,
        state.pagination.results = data.returnTotal,
        state.pagination.limit = data.limit,
        state.pagination.currentPage = data.page,
        state.pagination.totalPages = data.totalPages
    },
    PAGE_PREV(state){
        --state.pagina 
    },
    PAGE_NEXT(state){
        ++state.pagina 
    },
SET_TO_CART(state, data){
    let items =  state.cart.cartItems
    let prices =  state.cart.amount
    items.push(data)
    prices.push(data.price)
    ++state.cart.quantity
},
SET_RESUME(state, resume){
    state.cart.resume = resume
},
FINALIZE_PURCHASE(state){
    state.cart.quantity = 0,
    state.cart.resume = 0
    state.cart.cartItems = [],
    state.cart.amount = []
}


}

export default multations
