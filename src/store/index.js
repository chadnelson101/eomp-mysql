import { createStore } from 'vuex'
import axios from 'axios'


const baseUrl = 'https://backend-3-0r0q.onrender.com'

export default createStore({
  state: {
    products: [],
    users:[],
  },
  getters: {
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setUsers(state,users){
      state.users = users
    }
  },
  actions: {
    async getProducts(context) {
      try {
        const response = await axios.get(baseUrl + '/products')
        context.commit('setProducts', response.data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    },
    async getUsers(context){
      try{
        const response = await axios.get(baseUrl+ '/users')
        context.commit('setUsers',response.data)
      }catch(error){
        console.error('Error getting users');
      }
    },
    async deleteUser(context,userID){
      try{
        await axios.delete(baseUrl+'/users/' +userID)
      }catch(error){
        console.error('Error deleting user');
      }
      window.location.reload()
    }
  },
  modules: {
  }
})