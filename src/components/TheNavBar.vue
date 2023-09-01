<script setup>

</script>

<template>
  <div class="main">
    <h3>Where in the world?</h3>
    <div class="dark">
        <img src="../assets/moon.svg" alt="">
       <h4>Dark Mode</h4>
    </div>
  </div>
</template>



<style scoped>
.main{
    display:flex;
    padding:30px 0px 30px 16px;
    justify-content:space-between;
    background:#fff;
    box-shadow:0px 2px 4px 0px rgba(0,0,0,0.06); 
}
.dark{
    display:flex;
    padding-right:16px;
    gap:8px;
    justify-content: center;
    align-items:center

}

.main h3{
    color:#111517;
    font-size:14px;
    font-style:normal;
    font-weight:800;
    line-height:20px;
}.dark h4{
    color:#111517;
    font-size:12px;
    font-style:normal;
    font-weight:600;
    line-height:normal;
}
@media (min-width:1020px){
.main{
    padding:23px 80px 29px 81px;
}
.main h3{
    color:#111517;
    font-size:24px;
    font-weight:800px;
    font-style:normal;
    line-height:normal;
}
.dark h4{
    color:#111517;
    font-size: 16px;
    font-style:normal;
    font-weight:600;
    line-height:normal
}

}
</style>