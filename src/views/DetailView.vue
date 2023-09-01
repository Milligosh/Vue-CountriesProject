<script setup>

import { useCounterStore } from '../stores/counter';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const countryStore = useCounterStore();
const route = useRoute();


const countryData = ref(null);

onMounted(async () => {
  const countryName = route.params.name;
  countryData.value = await countryStore.getCountryByName(countryName);
});

</script>



    

<template>
  <div class="detail">
    <div class="button">
      <img src="../assets/back.svg" alt="">
      <button> <router-link to="/">Back</router-link> </button>
    </div>
    <div v-if="countryData">
      <img :src="countryData.flags.png" alt="">
      <p>{{ countryData.name.common }}</p>
      <p>Native Name: {{ countryData.name.native ? countryData.name.native.common : 'N/A' }}</p>
      <p>Population: {{ countryData.population }}</p>
      <p>Region: {{ countryData.region }}</p>
      <p>Subregion: {{ countryData.subregion }}</p>
      <p>Capital: {{ countryData.capital }}</p>
      <!-- Add other country details here -->
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