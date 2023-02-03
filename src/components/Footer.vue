<script>
import Logo from './icones/Logo.vue'

export default {
    components:{ Logo },
}
</script>


<template>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css">


<footer class="bg-gradient-to-bl from-indigo-500 to-blue-700 pt-10 sm:mt-10">
    <div>
        <RouterLink to="/">
        <Logo class=" w-24 h-24 ml-6" /></RouterLink>
    </div>
        <div class="max-w-6xl m-auto text-white flex flex-wrap justify-left">

            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">

                <div class="text-xs uppercase text-white font-bold mb-6">
                    A propos
                </div>
                 <RouterLink to="/partenaires" class="my-3 block text-white hover:text-gray-100 text-sm  font-normal duration-700">
                    Lien 1
                </RouterLink>
                 <a href="https://www.unifiedchampions.fr" class="my-3 block text-white hover:text-gray-100 text-sm  font-normal duration-700">
                    lien 2
                </a>
                 <a href="https://www.unifiedchampionsclub.fr" class="my-3 block text-white hover:text-gray-100 text-sm  font-normal duration-700">
                    lien 3
                </a>
            </div>


            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">

               <RouterLink to="/mentions"><div class="text-xs uppercase text-white font-bold mb-6">
                    Mentions légales
                </div></RouterLink>
            </div>

            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
               <RouterLink to="/inscription"> <div class="text-xs uppercase text-white font-bold mb-6">
                    Lien 4
                </div></RouterLink>
            </div>

            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
              <RouterLink to="/contact"><div class="text-xs uppercase text-white font-bold mb-6">
                    Contact
                </div></RouterLink>
            </div>
  
        </div>


    <div class="pt-2">
        <div class="flex pb-5 px-3 m-auto pt-5 
            border-t border-indigo-100 text-white text-sm 
            flex-col md:flex-row max-w-6xl">
            <div class="mt-2 text-center">
                ©2023 Fabio Gafforelli. All rights reserved
            </div>
        </div>
    </div>
</footer>
</template>
