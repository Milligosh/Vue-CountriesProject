// // darkMode.js

// import { ref, onMounted } from 'vue';

// const isDarkMode = ref(false);

// const toggleDarkMode = () => {
//   isDarkMode.value = !isDarkMode.value;
//   // You should store the mode as a string in localStorage.
//   localStorage.setItem('darkMode', isDarkMode.value.toString());
// };

// const initializeDarkMode = () => {
//   const storedDarkMode = localStorage.getItem('darkMode');
//   if (storedDarkMode !== null) {
//     isDarkMode.value = storedDarkMode === 'true';
//   }
// };

// onMounted(() => {
//   initializeDarkMode();
// });

// const useDarkMode = () => {
//   return {
//     isDarkMode,
//     toggleDarkMode,
//   };
// };

// export default useDarkMode;
