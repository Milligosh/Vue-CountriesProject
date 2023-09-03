<template>
    <div class="loader">
        <div class="loader">
    <div class="spinner"></div>
    <div>Please Wait...</div>
  </div>
    </div>
  </template>
  
  <style scoped>
  .loader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items:flex-start; */
  margin:0 auto;
  height:100vh;
}

.spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #007BFF; 
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
  </style>