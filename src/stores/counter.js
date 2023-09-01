import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const countries = ref([])

  async function getCountries() {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all')
      countries.value = response.data
    } catch (error) {
      console.error(error)
    }
  }

  async function getCountryByName(name) {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
      return response.data[0]
    } catch (error) {
      console.error(error)
      return null
    }
  }

  return { countries, getCountries, getCountryByName }
})
