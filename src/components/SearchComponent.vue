 <script setup>
 import{onUpdated, ref,computed,onMounted} from 'vue'
import { useCounterStore} from '../stores/counter';
import {useRouter} from  'vue-router';
import debounce from 'lodash/debounce'



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

//  onUpdated(()=>{
//    country.getCountries(inputInfo.value)
//  })
 const filteredBySearch = computed(() => {
  const searchTerm = searchQuery.value.toLowerCase();
  if (searchTerm === '') {
    return filteredByContinent.value;
  }return filteredByContinent.value.filter((countryInfo)=> countryInfo.name.common.toLowerCase().includes(searchTerm))
  // return country.countries.filter(countryData =>
  //   countryData.name.common.toLowerCase().includes(searchTerm) 
  // )
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
// const handleInputChanged = () => {
//   debouncedGetCountries(inputInfo.value); 
// };
const handleInputChanged = debounce(() => {
  country.getCountries(inputInfo.value);
}, 700);
onMounted(() => {
  
  country.getCountries(inputInfo.value);
});


</script>

 <template>

    <div class="main">
       <div class="top">
         <div class="inputDiv">
            <img src="../assets/search.svg" alt="" class="searchBar">
            <input class="input" type="text" placeholder="Search for a country..." v-model="searchQuery" @input="handleInputChanged"/>
        </div>
       
        <div class="select">
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
      <p> <strong>Population:</strong>{{countryData.population  }}</p>
      <p><strong> Region:</strong>{{ countryData.region }}</p>
      <p><strong> Capital:</strong>{{countryData.capital  }}</p>
    </div>
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
    border-radius:5px;
    gap:26px;
    margin:0 auto;
    padding:16px 0px 16px 32px;
    box-shadow:0px 2px 9px 0px rgba(0,0,0,0.05);

 }
 .input::placeholder{
    color:#c4c4c4;
    font-size:12px;
    font-style:normal;
    font-weight:400;
    line-height:20px;
 }

 .searchBar{
    max-width:16px;
    width:100%;
    max-height:16px;
    height:100%;
    flex-shrink:0px;
    margin:auto 0;
 }
 .main{
    padding: 24px 16px 40px 16px;
    display:flex;
    flex-direction:column; 
 }
 .country{
   /* max-width:264px;
   width:100%;
   max-height:336px;
   height:100%; */
      display:flex;
      flex-direction: column;
      align-items:center;
      gap:40px;
         
 } 
 .country p{
   color:#111517;
   font-size:14px;
   font-style:normal;
   font-weight:300;
   line-height:16px
 }
 /* .country img{
 max-width:265px;
 width:100%;
 max-height:177px;
 height:100%;
 border-radius: 5px;
 
} */
.paragraph h1{
   color:#111517;
   font-size:18px;
   font-style:normal;
   font-weight:800;
   line-height:26px
 
}
.paragraph{color: #111517;
    font-size:14px;
    font-style:normal;
    font-weight:300;
    line-height:16px;
    padding: 24px 91px 46px 24px;
    align-content:center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap:16px;
    
     }
     
 .sub{
  max-width:264px;
  width:100%;
  max-height:336px;
  height: 100%;
  border-radius:5px;
   background:#fff;
   box-shadow:0px 0px 7px 2px rgba(0,0,0,0.03);
   display:flex;
   flex-direction:column;
   
   

 }.sub img{
  max-width: 267px;
  max-height:160px;
  width:100%;
  height:100%;
}

.top{
    display:flex;
    flex-direction: column;
    gap:32px
   }
   select{
    border:none;
    padding:14px 19px 14px 24px;
    border-radius:5px;
    background:#fff;
    display: flex;
    box-shadow:0px 2px 9px 0px rgba(0,0,0,0.05)

   }
 @media (min-width:1024px){
   .main{
      padding:48px 80px 48px 0px;
      display:flex;
      flex-direction: column;
      justify-content:space-between;
      
   }.top{
    display:flex;
    flex-direction: row;
    gap:600px;
    
    padding:48px 80px 48px 80px;
   }
   .inputDiv{
      max-width:480px;
      width:100%;
      border-radius:5px;
      background:#fff;
      box-shadow:0px 2px 9px 0px rgba(0,0,0,0.05);
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
   /* grid-template-rows:repeat(4, 1fr);
   column-gap:60px; */
   
   row-gap: 60px;
   
    padding:48px 80px 0px 78px; 
   
  
 }

 .sub{
  max-width:264px;
  width:100%;
  height:100%;
  max-height:336px;
 }
 }
 </style>