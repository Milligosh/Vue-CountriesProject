import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const countries= ref([])
  

  async function getCountries(name){
    try { 
      const response= await axios.get(
        `https://restcountries.com/v3.1/all?name=${name}`
      );
      countries.value=response.data
      
   
    }catch(error){
      console.log(error);
    }
  }

  return { countries, getCountries }
})
