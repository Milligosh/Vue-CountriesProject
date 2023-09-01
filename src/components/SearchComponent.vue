 <script setup>
 import{onUpdated, ref,computed,onMounted} from 'vue'
import { useCounterStore} from '../stores/counter';
import {useRouter} from  'vue-router';
import debounce from 'lodash.debounce'


 const country= useCounterStore();
 const inputInfo= ref('');
 
 const router= useRouter();
 const continents=['Africa','Asia', 'Europe','Americas','Oceania']
 const selectedContinent=ref('')
 const searchQuery= ref('')
 country.getCountries(inputInfo.value);
  const goToDetail = (countryName) => {
    router.push({ name: 'detail', params: { name: countryName } });
  };

 onUpdated(()=>{
   country.getCountries(inputInfo.value)
 })
 const filteredBySearch = computed(() => {
  const searchTerm = searchQuery.value.toLowerCase();
  if (searchTerm === '') {
    return filteredByContinent.value;
  }
  return country.countries.filter(countryData =>
    countryData.name.common.toLowerCase().includes(searchTerm) 
  )
});
const filteredByContinent=computed(()=>{
  if(!selectedContinent.value){
    return country.countries;
  }else{ 
    return country.countries.filter((countryInfo)=>countryInfo.region=== selectedContinent.value)}
})
const debouncedGetCountries = debounce((inputValue) => {
  country.getCountries(inputValue);
}, 3000); 
const handleInputChanged = () => {
  debouncedGetCountries(inputInfo.value); 
};
onMounted(() => {
  
  country.getCountries(inputInfo.value);
});


</script>

 <template>

    <div class="main">
        <div class="inputDiv">
            <img src="../assets/search.svg" alt="">
            <input class="input" type="text" placeholder="Search for a country..." v-model="searchQuery" @input="handleInputChanged"/>
        </div>
       
        <div>
         <select v-model="selectedContinent">
<option value="">Filter by region</option>
<option v-for="continent in continents" :key="continent">{{ continent }}</option>
         </select>
        </div>
    </div>
    <div class="country">
      <div
        @click="goToDetail(countryData.name.common)"
        v-for="countryData in filteredBySearch"
        :key="countryData.name.common"
        class="sub"
      >
  <img :src="countryData.flags.png" :alt="countryData.name.common" />
  <div class="paragraph">
    <h1>{{ countryData.name.common }}</h1>
    <div class="tag"> 
      <p><strong> Population:</strong>{{countryData.population  }}</p>
      <p><strong> Region:</strong>{{ countryData.region }}</p>
      <p><strong> Capital:</strong>{{countryData.capital  }}</p>
    </div>
  </div>
</div>

      </div>
 </template>
 
 <style scoped>
 input{
    border:none;
 }.tag{
   display:flex;
   flex-direction:column;
   gap:8px
 }.tag p{
   color:#111517;
font-size:14px;
font-style:normal;
font-weight:300;
line-height:16px
}
 .inputDiv{
    max-width:343px;
    width:100%;
    max-height:48px;
    height: 100%;
    border-radius:5px;
    background:#fff;
    display:flex;
    gap:26px;
    margin:0 auto;
    padding:16px 0px 16px 32px;
    justify-content:center;
    margin:0 auto;
    box-shadow:0px 2px 9px 0px rgba(0,0,0,0.05);

 }
 .input::placeholder{
    color:#c4c4c4;
    font-size:12px;
    font-style:normal;
    font-weight:400;
    line-height:20px;
 }

 .inputDiv img{
    max-width:16px;
    width:100%;
    max-height:16px;
    height:100%;
    flex-shrink:0px
 }
 .main{
    padding: 24px 16px 40px 16px;
    display:flex;
    flex-direction:column;
    gap:40px
 }
 .country{
   max-width:264px;
   width:100%;
   max-height:336px;
   height:100%;
   border-radius:5px;
   background:#fff;
   box-shadow:0px 0px 7px 2px rgba(0,0,0,0.03);
   display:flex;
   margin:0 auto;
   flex-direction:column;
   gap:40px;
 } .country p{
   color:#111517;
   font-size:14px;
   font-style:normal;
   font-weight:300;
   line-height:16px
 }
 .country img{
 max-width:336px;
 width:100%;
 max-height:160px;
 height:100%;
 
 
}.paragraph h1{
   color:#111517;
   font-size:18px;
   font-style:normal;
   font-weight:800;
   line-height:26px
 
}.paragraph{color: #111517;
    
    padding: 24px 91px 46px 24px;
    align-content:center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap:16px
    
    }
 
 @media (min-width:1020px){
   .main{
      padding:48px 80px 48px 80px;
      display:flex;
      flex-direction: row;
      justify-content:space-between
   }
   .inputDiv{
      max-width:480px;
      width:100%;
      max-height:56px;
      padding:18px 270px 18px 32px;
      display:flex;
      height:100%
   }
   .input::placeholder{
    color:#c4c4c4;
    font-size:14px;
    font-style:normal;
    font-weight:400;
    line-height:20px;
 }
 
 .country{
   display:grid;
   grid-template-columns: repeat(4, 1fr);
   grid-template-rows:repeat(4, 1fr);
   gap:60px;
   
   
 }
 }
 </style>