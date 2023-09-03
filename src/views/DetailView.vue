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
    </div >
    <div class="main" v-if="countryData">
      
      <div class="pic">
        <img :src="countryData?.flags.png" alt="">
      </div>
      <div class="text">
        <div class="division">
        <div class="top">  
      <h1>{{ countryData?.name.common }}</h1>
      <p><strong> Native Name:</strong> {{ countryData?.name.native ? countryData.name.native.common : 'N/A' }}</p>
      <p><strong>Population:</strong> {{ countryData?.population }}</p>
      <p><strong>Region:</strong> {{ countryData?.region }}</p>
      <p><strong>Subregion:</strong> {{ countryData?.subregion }}</p>
      <p><strong>Capital: </strong>{{ countryData?.capital }}</p>
      <!-- Add other country details here -->
    </div>
      <div class="down">
        <p><strong>Top Level Domain:</strong>{{ countryData?.tld[0]}}</p>
        <p><strong>Currencies:</strong>{{ countryData?.currencies }}</p>
        <p><strong>Languages:</strong>{{ countryData?.languages}}</p>
      </div>
    </div>
      <div class="border">
        <h4>Border Countries:</h4>
        
        <ul>
          <li v-for="borderCountry in countryData.borders" :key="borderCountry"> {{ borderCountry }} 
          </li>
        </ul>
        
    </div> 
    </div>
  
      

    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>



<style scoped>
.detail{padding: 40px 27.16px 0px 28px;
  display:flex;
flex-direction: column;
gap:64px
};
h1{
  color: #111517;
font-size: 22px;
font-style: normal;
font-weight: 800;
line-height: normal;

}.division{
  display:flex;
  flex-direction:column;
  gap:32px;
}
.main{
  display:flex;
  flex-direction:column;
  
  
}.down p{
  align-items: center;
}
li{
  list-style:none;
  border-radius: 2px;
border: 0px solid #979797;
background: #FFF;
box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.10);

  max-width:96px;
  width:100%;
  max-height:28px;
  height:100%;
  padding:5px 27px;
}
.pic img{
  max-width:559px;
  
  max-height:483px;
  width:100%;
  height:100%;
  border-radius:5px;
}


strong{
  color: #111517;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 32px;
}.top{
  max-width:207px;
  width:100%;
  max-height:160px;
  height:100%
}.down{
  max-width:250px;
  width:100%;
  max-height:96px;
  height:100%
}
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
}.text{
display:flex;
flex-direction:column;
gap:34px
}p{
  display:flex;
  align-items:center
}
.border{
  display:flex;
  flex-direction:column;
  gap:32px
}
ul{
  display:flex;
  flex-direction:column;
  gap:32px
}
@media (min-width:1024px){
  .main{
    display:flex;
    flex-direction:row;
    gap:144.29px;
  }
  .detail{
    padding:80px 82px 260px 80px;
  }
  strong{
  color: #111517;
font-family: Nunito Sans;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 32px;
}
  h1{
    color: #111517;
font-size: 32px;
font-style: normal;
font-weight: 800;
line-height: normal;
  }
  .text{
display:flex;
flex-direction:column;
gap:117px
}
.division{
  display:flex;
  flex-direction:row;
  gap:117px;
}
.border{
  display:flex;
  flex-direction:row;
  gap:32px
}
ul{
  display:flex;
  flex-direction:row;
  gap:32px;
}
}
</style>