<script setup>
import { useCounterStore } from '../stores/counter';
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const countryList = useCounterStore();
const route = useRoute();
const router = useRouter();

countryList.getCountries(route.params.name);
console.log(countryList.countries)
const singleCountry = computed(() => {
  return countryList.countries[0];
});


</script>



    

<template>
    <div class="detail">
      <div class="button">
        <img src="../assets/back.svg" alt="">
        <button > <router-link to="/">Back</router-link> </button>
      </div>
      <div v-if="singleCountry">
        <img :src="singleCountry?.flags.png" alt="">
        <p>{{ singleCountry?.name }}</p>
        <p>Native Name:{{  }}</p>
        <p>Population:{{singleCountry.population  }}</p>
      <p>Region:{{singleCountry?.region }}</p>
      <p>Subregion:{{ singleCountry.subregion}}</p>
      <p>Capital:{{singleCountry?.capital  }}</p>
        <!-- <p> Top Level Domain:{{  }}</p>
        <p>Currencies:{{singleCountry  }}</p>
        <p>Languages:{{  }}</p> -->
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>



<style scoped>
.detail{padding: 80px 82px 124px 80px}

.button{
    border-radius:6px;
    background:#fff;
    box-shadow:0px 0px 7px 0px rgba(0,0,0,0.29);
    width:136px;
    height:40px;
    padding:10px 39px 10px 32px;
    display:flex;
    gap:10px;

}button{
  border:none;
  background: #fff;
}
</style>