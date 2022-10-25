import axios from 'axios'
import EndpointFactory from 'axios-endpoints'

const burgerQueenApi = axios.create({
    baseURL: 'http://localhost:4000/'
})

const Endpoint = EndpointFactory(burgerQueenApi)



export const allProducts = new Endpoint("/");
export const searchProducts = new Endpoint(({search}) => `/name/${search}`);
export const drinks = new Endpoint("/drink")
export const burger = new Endpoint("/burger")
export const dessert = new Endpoint("/dessert")
export const side = new Endpoint("/side")







