<template>
    <div class="flex justify-center items-center mt-52">
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">


            <div class="name-input mb-4">
            <label
              for="name"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              Username</label
            >
            <input
              id="name"
              class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Username"
              aria-describedby="nameHelp"
              v-model="name"
              required="true"
            />
            <span class="text-xs text-red-700" id="nameHelp"></span>
          </div>


          <div class="identity-input mb-4">
            <label
              for="identity"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              Email</label
            >
            <input
              id="identity"
              class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              aria-describedby="emailHelp"
              v-model="email"
              required="true"
            />
            <span class="text-xs text-red-700" id="emailHelp"></span>
          </div>
  
          <div class="password-input mb-6">
            <label
              for="identity"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Password</label
            >
  
            <input
              aria-describedby="passwordHelp"
              v-model="password"
              required
              class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="*******"
            />
  
            <span class="text-xs text-red-700" id="passwordHelp"></span>
          </div>
  
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
            <RouterLink :to="{ name: 'Login' }">
              Sign Up
              </RouterLink>
            </button>
            
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Signup",
    data() {
      return {
        name:"",
        email: "",
        password: "",
      };
    },
    methods: {
      login() {
        console.log("logging in");
      },
    },
  };
  </script>