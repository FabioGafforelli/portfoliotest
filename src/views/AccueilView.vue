<script>

import footer1 from "../components/Footer.vue"

import Competence from "../components/icones/competenceDesign.vue"
import { RouterLink } from "vue-router"
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
import { emitter } from '../main'
import CompetenceDev from "../components/icones/competenceDev.vue"
import Nuage from "../components/Nuage.vue"


export default {
    name:"App",
    components: { footer1, Competence, RouterLink, CompetenceDev, Nuage },
  data() {
    return {
        nom:null, // Pour la création d'un nouveau pays
                listeLogicielDesignSynchro:[], // Liste des pays synchronisée - collection pays de Firebase

      menuOuvert: false,
      listeLogicielDevSynchro:[], // Liste des pays synchronisée - collection pays de Firebase

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

    this.getLogicielDesignSynchro();
    this.getLogicielDevSynchro();

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
      },
      
      async getLogicielDesignSynchro(){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                const dbLogicielDesign= collection(firestore, "LogicielDesign");
                // Liste des pays synchronisée
                const query = await onSnapshot(dbLogicielDesign, (snapshot) =>{
                    //  Récupération des résultats dans listePaysSynchro
                    // On utilse map pour récupérer l'intégralité des données renvoyées
                    // on identifie clairement le id du document
                    // les rest parameters permet de préciser la récupération de toute la partie data
                    this.listeLogicielDesignSynchro = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
                    this.listeLogicielDesignSynchro.forEach(function(LogicielDesign){
                      const storage = getStorage();
                      const spaceRef = ref(storage, 'ApercuLogicielDesign/'+LogicielDesign.photo);
                      getDownloadURL(spaceRef)
                      .then((url) => {
                        LogicielDesign.photo = url;
                      })
                      .catch((error) =>{
                        console.log('erreur downloadUrl', error)
                      })
                    }) 
                })
            },
            async createLogicielDesign(){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                const dbLogicielDesign= collection(firestore, "LogicielDesign");
                // On passe en paramètre format json
                // Les champs à mettre à jour
                // Sauf le id qui est créé automatiquement
                const docRef = await addDoc(dbLogicielDesign,{
                    nom: this.nom,
                    description: this.description,
                    photo: this.photo
                })
                console.log('document créé avec le id : ', docRef.id);
             },
            async updateLogicielDesign(LogicielDesign){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                // Reference du pays à modifier
                const docRef = doc(firestore, "LogicielDesign", LogicielDesign.id);
                // On passe en paramètre format json
                // Les champs à mettre à jour
                await updateDoc(docRef, {
                    nom: LogicielDesign.nom
                }) 
             },
            async deleteLogicielDesign(LogicielDesign){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                // Reference du pays à supprimer
                const docRef = doc(firestore, "LogicielDesign", LogicielDesign.id);
                // Suppression du pays référencé
                await deleteDoc(docRef);
             },
async createLogicielDesign(){
            const storage = getStorage();
            const refStorage = ref(storage, 'LogicielDesign/'+this.LogicielDesign.photo);
            await uploadString(refStorage, this.imageData, 'data_url').then((snapshot) => {
                console.log('Uploaded a base64 string');
                const db = getFirestore();
                const docRef = addDoc(collection(db, 'LogicielDesign'), this.LogicielDesign);
            });
            this.$router.push('/')
        },
        async getLogicielDevSynchro(){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                const dbLogicielDev= collection(firestore, "LogicielDev");
                // Liste des pays synchronisée
                const query = await onSnapshot(dbLogicielDev, (snapshot) =>{
                    //  Récupération des résultats dans listePaysSynchro
                    // On utilse map pour récupérer l'intégralité des données renvoyées
                    // on identifie clairement le id du document
                    // les rest parameters permet de préciser la récupération de toute la partie data
                    this.listeLogicielDevSynchro = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
                    this.listeLogicielDevSynchro.forEach(function(LogicielDev){
                      const storage = getStorage();
                      const spaceRef = ref(storage, 'ApercuLogicielDev/'+LogicielDev.photo);
                      getDownloadURL(spaceRef)
                      .then((url) => {
                        LogicielDev.photo = url;
                      })
                      .catch((error) =>{
                        console.log('erreur downloadUrl', error)
                      })
                    }) 
                })
            },
            async createLogicielDev(){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                const dbLogicielDev= collection(firestore, "LogicielDev");
                // On passe en paramètre format json
                // Les champs à mettre à jour
                // Sauf le id qui est créé automatiquement
                const docRef = await addDoc(dbLogicielDev,{
                    nom: this.nom,
                    description: this.description,
                    photo: this.photo
                })
                console.log('document créé avec le id : ', docRef.id);
             },
            async updateLogicielDev(LogicielDev){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                // Reference du pays à modifier
                const docRef = doc(firestore, "LogicielDev", LogicielDev.id);
                // On passe en paramètre format json
                // Les champs à mettre à jour
                await updateDoc(docRef, {
                    nom: LogicielDev.nom
                }) 
             },
            async deleteLogicielDev(LogicielDev){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                // Reference du pays à supprimer
                const docRef = doc(firestore, "LogicielDev", LogicielDev.id);
                // Suppression du pays référencé
                await deleteDoc(docRef);
             },
async createLogicielDev(){
            const storage = getStorage();
          const refStorage = ref(storage, 'ApercuLogicielDev/'+this.LogicielDev.photo);
            await uploadString(refStorage, this.imageData, 'data_url').then((snapshot) => {
                console.log('Uploaded a base64 string');
                const db = getFirestore();
                const docRef = addDoc(collection(db, 'LogicielDev'), this.LogicielDev);
            });
            this.$router.push('/')
        },
        
    } 
}
</script>

<template>
  <div class="cursor-crosshair">
    <h1>Présentation de moi</h1>
    <Nuage />

    <div class="cursor-[http://www.rw-designer.com/cursor-extern.php?id=179073,_pointer]">
  <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
    <span class="visually-hidden">A Venir...</span>
  </div>
</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mattis vulputate enim nulla. Dictum fusce ut placerat orci nulla pellentesque. Lorem ipsum dolor sit amet consectetur adipiscing. In ante metus dictum at tempor commodo. Quisque egestas diam in arcu cursus euismod quis viverra nibh. In eu mi bibendum neque egestas congue quisque egestas. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Amet porttitor eget dolor morbi non. Quis vel eros donec ac odio. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin.</p>
    <br>
    <h2>Au sein de mon cursus, j'ai développé des compétences sur différents logiciels utilisés dans différents secteurs tels que :</h2>
    <h2 class="font-museomoderno font-bold text-center text-2xl text-blue-700">Design</h2>
    <button v-if="isAdmin" class="bg-blue-700 mb-20 py-2 px-5 rounded-2xl text-white">
<RouterLink to="/createDesign">Ajouter une compétence</RouterLink></button>

<div>
    <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5  ">
        <div>
            
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div v-for="LogicielDesign in listeLogicielDesignSynchro" :key="LogicielDesign.id">
            <Competence
                :nom="LogicielDesign.nom"
                :description="LogicielDesign.description"
                :photo="LogicielDesign.photo"
                :id="LogicielDesign.id" />
        </div>
    </div>
        <div>
          <h2 class="font-museomoderno font-bold text-center text-2xl text-blue-700">Développement</h2>
    <button v-if="isAdmin" class="bg-blue-700 mb-20 py-2 px-5 rounded-2xl text-white">
<RouterLink to="/createDev">Ajouter une compétence</RouterLink></button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div v-for="LogicielDev in listeLogicielDevSynchro" :key="LogicielDev.id">
            <CompetenceDev
                :nom="LogicielDev.nom"
                :description="LogicielDev.description"
                :photo="LogicielDev.photo"
                :id="LogicielDev.id" />
        </div>
    </div>
</div>
</div>
</div>
</div>
<footer1 />
</template>