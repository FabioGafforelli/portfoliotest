<template>
    <h1 class="font-lato mb-20 border-b-2 text-center text-2xl">Modifier le Logiciel Dev</h1>
  
    <div class="relative mt-12 mb-20 flex flex-col gap-20 px-5">
      <form @submit.prevent="UpdateLogicielDev">
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div class="grid place-items-center">
            <img :src="imageData" class="w-1/2" />
          </div>
          <div class="grid grid-cols-1 gap-14">
            <div class="flex h-10 overflow-hidden rounded-2xl text-white">
              <div class="font-museomoderno flex items-center justify-center border-[1px] bg-blue-700 px-5">Nom</div>
              <input class="font-museomoderno w-full border-2 bg-blue-700 p-5" type="text" placeholder="Nom du Logiciel" v-model="LogicielDev.nom" required >
            </div>
            
            <div class="flex h-12 overflow-hidden rounded-2xl text-white">
              <p class="font-museomoderno -mt-2 border-[1px] bg-blue-700 px-6 py-3 leading-5">Description</p>
              <input
                class="font-museomoderno w-full border-2 bg-blue-700 p-5"
                type="text"
                placeholder="Description du Logiciel"
                v-model="LogicielDev.description"
                required>
            </div>
  
            <div class="flex h-10 overflow-hidden rounded-sm text-white">
              <div class="font-museomoderno flex items-center justify-center border-[1px] bg-blue-700 px-5">Photo</div>
              <div class="relative w-full">
                <input type="file" class="font-lato relative w-full border-2 bg-white p-5" ref="file" id="file" @change="previewImage">
                <label
                  class="font-museomoderno absolute left-0 top-0 bottom-0 flex w-full items-center justify-center bg-white border-2 border-blue-500 text-blue-700"
                  for="file"
                  >Sélectionner l'image</label
                >
              </div>
            </div>
          </div>
        </div>
  
        <div class="mt-auto grid w-full grid-cols-2 place-items-center">
          <button
            class="font-montserrat mb-20 rounded-2xl bg-blue-700 px-1 text-white "
            type="button"
          >
            <RouterLink to="/">Annuler</RouterLink>
          </button>
          <button
            class="font-montserrat mb-20 rounded-2xl bg-blue-700 px-1 text-white"
            type="submit"
          >
            Modifier
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import {
    getFirestore, // Obtenir le Firestore
    collection, // Utiliser une collection de documents
    doc, // Obtenir un document par son id
    getDoc, // Obtenir la liste des documents d'une collection
    addDoc, // Ajouter un document à une collection
    updateDoc, // Mettre à jour un document dans une collection
    deleteDoc, // Supprimer un document d'une collection
    onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
    query, // Permet d'effectuer des requêtes sur Firestore
    orderBy, // Permet de demander le tri d'une requête query
  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
  
  // Cloud Storage : import des fonctions
  import {
    getStorage, // Obtenir le Cloud Storage
    ref, // Pour créer une référence à un fichier à uploader
    getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
    uploadString,
    deleteObject, // Permet d'uploader sur le Cloud Storage une image en Base64
  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";
  
  export default {
    name: "UpdateView",
    data() {
      return {
        imageData: null, // Image prévisualisée
        ListeLogicielDev: [],
        LogicielDev: {
          photo: null,
          nom: null, // son prénom
          description: null, // sa photo (nom du fichier)
        },
  
        refLogicielDev: null,
        imgModifiee: false,
        photoActuelle: null,
      };
    },
    mounted() {
      // Montage de la vue
      // Récupération du id passé en paramètre
      // On utilise le id passé par la route
      // via la variable système $route de la vue
      console.log("id Logiciel", this.$route.params.id);
  
      this.getLogicielDev(this.$route.params.id);
      // Appel de la liste des pays
    },
  
    methods: {
      previewImage: function (event) {
        this.file = this.$refs.file.files[0];
        this.LogicielDev.photo = this.file.name;
  
        this.imgModifiee = true;
  
        var input = event.target;
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = (e) => {
            this.imageData = e.target.result;
          };
          reader.readAsDataURL(input.files[0]);
        }
      },
  
      async getLogicielDev(id) {
        // Obtenir Firestore
        const firestore = getFirestore();
  
        const docRef = doc(firestore, "LogicielDev", id);
  
        this.refLogicielDev = await getDoc(docRef);
  
        if (this.refLogicielDev.exists()) {
          // Si oui on récupère ses données
          this.LogicielDev = this.refLogicielDev.data();
          // Mémorisation photoActuelle
          this.photoActuelle = this.LogicielDev.photo;
        } else {
          // Sinon simple message d'erreur
          this.console.log("logiciel inexistant");
        }
        // Obtenir le Storage
        const storage = getStorage();
  
        const spaceRef = ref(storage, "ApercuLogicielDev/" + this.LogicielDev.photo);
        // Récupération de l'url complète de l'image
        getDownloadURL(spaceRef)
          .then((url) => {
            // Mise à jour de l'image prévisualisée
            this.imageData = url;
          })
          .catch((error) => {
            console.log("erreur downloadUrl", error);
          });
      },
  
      previewImage: function (event) {
        this.file = this.$refs.file.files[0];
  
        this.LogicielDev.photo = this.file.name;
        // Si cette fonction s'exécute, c'est que l'image est modifiée
        this.imgModifiee = true;
        // Reference to the DOM input element
        // Reference du fichier à prévisualiser
        var input = event.target;
        // On s'assure que l'on a au moins un fichier à lire
        if (input.files && input.files[0]) {
          // Creation d'un filereader
          // Pour lire l'image et la convertir en base 64
          var reader = new FileReader();
          // fonction callback appellée lors que le fichier a été chargé
          reader.onload = (e) => {
            // Read image as base64 and set to imageData
            // lecture du fichier pour mettre à jour
            // la prévisualisation
            this.imageData = e.target.result;
          };
          // Demarrage du reader pour la transformer en data URL (format base 64)
          reader.readAsDataURL(input.files[0]);
        }
      },
  
      async UpdateLogicielDev() {
        // Si l'image a été modifiée
        if (this.imgModifiee) {
          // On supprime l'ancienne
          const storage = getStorage();
          // Référence du fichier
          let docRef = ref(storage, "ApercuLogicielDev/" + this.photoActuelle);
          // Suppression photo actuelle
          deleteObject(docRef);
          // création nouvelle photo
          // Référence de l'image à uploader
          docRef = ref(storage, "ApercuLogicielDev/" + this.LogicielDev.photo);
          await uploadString(docRef, this.imageData, "data_url").then((snapshot) => {
            console.log("Uploaded a base64 string", this.LogicielDev.photo);
          });
        }
  
        const firestore = getFirestore();
  
        await updateDoc(doc(firestore, "LogicielDev", this.$route.params.id), this.LogicielDev);
  
        this.$router.push("/");
      },
    },
  };
  </script>
  