import axios from 'axios'
import EndpointFactory from 'axios-endpoints'

const burgerQueenApi = axios.create({
    baseURL: 'http://localhost:4000/'
})

const Endpoint = EndpointFactory(burgerQueenApi)


// http://localhost:4000/drink?page=2
export const allProducts = new Endpoint(({page}) => `/?page=${page}`);
export const searchProducts = new Endpoint(({search}) => `/name/${search}`);
export const drinks = new Endpoint(({page}) =>`/drink?page=${page}`)
export const burger = new Endpoint(({page}) => `/burger?page=${page}`)
export const dessert = new Endpoint(({page}) => `/dessert?page=${page}`)
export const side = new Endpoint(({page}) => `/side?page=${page}`)







