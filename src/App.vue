<template>
<header class="  sticky top-0 drop-shadow-lg z-10 ">
    <a href="#content" class="sr-only focus:not-sr-only text-lg text-white"> Passez au contenu </a>
    <nav class=" lg:flex lg:justify-between items-center">
      <div class="flex justify-between items-center">
       <RouterLink to="/"><Logo class="w-24 h-24"/></RouterLink> 			
	   <h1 class="text-gray-50 text-xl font-bold lg:text-5xl">Arena</h1>
      <span class="text-5xl cursor-pointer lg:hidden block w-8 h-8 mx-55  ">
        <MenuIcon class=" text-white"  aria-controls="menu"
        :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert">
        </MenuIcon>
        <span class="sr-only ">Menu</span>
      </span>
      </div>
      <Transition
        enter="transition duration-2000 ease-out"
        enterFrom="transform translate-x-full opacity-0"
        enterTo="transform translate-x-0 opacity-100"
        leave="transition duration-1750 ease-out"
        leaveFrom="transform  translate-x-0 opacity-100"
        leaveTo="transform translate-x-full opacity-0"
      >
      <ul id="menu" v-if="menuOuvert" class="lg:hidden w-full  text-xl font-museomoderno   text-center" >
        <li class="my-5">
          <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm font-museomoderno text-white  " to="/">Accueil</RouterLink>
        </li>
        <li class="my-5">
          <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm text-white font-museomoderno " to="/projets">Projets</RouterLink>
        </li>
        <li class="my-5">
          <RouterLink v-if="isAdmin" class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm text-white font-museomoderno " to="/profil">Mon Profil</RouterLink>
        </li>
        <li class="my-5">
          <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm font-museomoderno text-white" to="/contact">Contact</RouterLink>
        </li>
      </ul>
      </Transition>
      <ul class="lg:flex  gap-4 lg:items-center text-white text-xl font-algerian mx-6 py-4 hidden" >
        <li class="my-5">
          <RouterLink class="border-2 border-black my-6 lg:px-2 xl:pt-2 rounded-2xl font-museomoderno text-black" to="/">Accueil</RouterLink>
        </li>
        <li class="my-5">
          <RouterLink class="border-2 border-black my-6 lg:px-2 xl:pt-2 rounded-2xl font-museomoderno text-black" to="/projets">Projets</RouterLink>
        </li>
        <li class="my-5">
          <RouterLink v-if="isAdmin" class="border-2 border-black my-6 lg:px-2 xl:pt-2 rounded-2xl font-museomoderno text-black" to="/profil">Mon Profil</RouterLink>
        </li>

        <li class="my-5">
          <RouterLink class="border-2 border-black my-6 lg:px-2 xl:pt-2 rounded-2xl font-museomoderno text-black " to="/contact">Contact</RouterLink>
        </li>
      </ul>    
    </nav>
  </header>

  <RouterView />
</template>

<script>
import router from "./router"
import Logo from '../src/components/icones/Logo.vue'
import Navigation from '../src/components/icones/Navbar.vue'
import { MenuIcon, } from "@heroicons/vue/solid";

import { FilmIcon } from "@heroicons/vue/outline";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'
import {
  getStorage,
  ref,
  getDownloadURL,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js'

import { getAuth } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js'

// Import emetteur de main.js
import { emitter } from './main.js'

export default {
  components:{ router, FilmIcon, Navigation, Logo, MenuIcon },
  data() {
    return {
      menuOuvert: false,

      user:{              // User connecté
        email:null,
        password:null
      },
      userInfo:null,      // Informations complémentaires user connecté
      name:"Vidéo",       // Titre de l'application ou nom du user
      isAdmin:false       // Si l'utilisateur est ou non administrateur
    }
  },
  mounted(){
    // Vérifier si un user connecté existe déjà
    // Au lancement de l'application
    this.getUserConnect();

    // Ecoute de l'évènement de connexion
    emitter.on('connectUser', e => {
      // Récupération du user
      this.user = e.user;
//      console.log('App => Reception user connecté', this.user);
      // Recherche infos complémentaires du user
      this.getUserInfo(this.user);      
    })        
    
    // Ecoute de l'évènement de deconnexion
    emitter.on('deConnectUser', e => {
      // Récupération user 
      this.user = e.user;
//      console.log('App => Reception user deconnecté', this.user);
      // Réinitialisation infos complémentaires user
      this.userInfo   = null;
      this.name       = 'Vidéo';
      this.isAdmin    = false;
    })
  },
  methods:{
    // Obtenir les informations du user connecté
    async getUserConnect(){
      await getAuth().onAuthStateChanged(function(user) { 
        if(user) {
            // Récupération du user connecté
            this.user = user;
            // Recherche de ses infos complémentaires
            this.getUserInfo(this.user);   
        } 
      }.bind(this));
      // Noter le bind(this), cas des zones isolées
      // lors de 2 strucutres imbiquées, Vue perd la visibilité
      // des données
      // On les ré injecte par le mot-clef this
    },

    async getUserInfo(user){
      // Rechercher les informations complémentaires de l'utilisateur
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uid", "==", user.uid));
      await onSnapshot(q, (snapshot) => {
          this.userInfo = snapshot.docs.map(doc => (
            {id:doc.id, ...doc.data()}
          ));
//          console.log("userInfo", this.userInfo);                
          // userInfo étant un tableau, onn récupère
          // ses informations dans la 1° cellule du tableau : 0
          this.name = this.userInfo[0].login;
          this.isAdmin=this.userInfo[0].admin;
          // Recherche de l'image du user sur le Storage
          const storage = getStorage();
          // Référence du fichier avec son nom
          const spaceRef = ref(storage, 'users/'+this.userInfo[0].avatar);
          getDownloadURL(spaceRef)
            .then((url) => {
              this.avatar = url;
            })
            .catch((error) =>{
              console.log('erreur downloadUrl', error);
            })
        });
      }
    } 
}
</script>