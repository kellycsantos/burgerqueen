import axios from 'axios'
import EndpointFactory from 'axios-endpoints'

const burgerQueenApi = axios.create({
    baseURL: 'https://burger-queen-api-production.up.railway.app/'
})

const Endpoint = EndpointFactory(burgerQueenApi)


export const allProducts = new Endpoint(({page}) => `/?page=${page}`);
export const searchProducts = new Endpoint(({search}) => `/name/${search}`);
export const drinks = new Endpoint(({page}) =>`/drink?page=${page}`)
export const burger = new Endpoint(({page}) => `/burger?page=${page}`)
export const dessert = new Endpoint(({page}) => `/dessert?page=${page}`)
export const side = new Endpoint(({page}) => `/side?page=${page}`)







