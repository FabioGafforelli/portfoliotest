<template>
  <div class="mt-12 px-5 flex flex-col gap-20 relative">
    <h1 class="font-smythe text-2xl">Projet</h1>


    <div class="grid xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-1 gap-3">
        <div v-for="Projet in listeProjetSynchro" :key="Projet.id">
            <card
                :nom="Projet.nom"
                :description="Projet.description"
                :photo="Projet.photo"
                :id="Projet.id" />
        </div>


    </div>
    
  </div>
  <Footer1 />
</template>

<script>
import card from "../../components/icones/card.vue"
import Rechercher from "../../components/icones/Rechercher.vue"
import Modification from "../../components/icones/Modification.vue"
import Supprimer from "../../components/icones/Supprimer.vue"
import Header1 from '../../components/Header.vue';
import Footer1 from '../../components/Footer.vue';
import BoutonImage from '../../components/icones/modifierListe/BoutonImage.vue';
import Creation from "../../components/icones/modifierListe/creation.vue";
// Bibliothèque Firestore : import des fonctions
import { 
    getFirestore, 
    collection, 
    doc, 
    getDocs, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    onSnapshot } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'
import { getStorage, ref, getDownloadURL, uploadString } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";
import { RouterLink } from "vue-router";
export default {
    data(){ // Données de la vue
            return{                
                nom:null, // Pour la création d'un nouveau pays
                listeProjetSynchro:[], // Liste des pays synchronisée - collection pays de Firebase
                filter:''
            }
        },
        computed:{
            orderByName:function(){
                return this.listeProjetSynchro.sort(function(a, b){
                  if(a.Nom < b.Nom)  return -1;
                  if(a.Nom > b.Nom)  return 1;
                  return 0
                })
            },
            filterByName:function(){
                if(this.filter.length > 0){
                    let filter = this.filter.toLowerCase();
                    return this.orderByName.filter(function(Projet){
                        return Projet.Nom.toLowerCase().includes(filter);
                    })
                }else{
                    return this.orderByName;
                }
            }
        },
        mounted(){ // Montage de la vue
            // Appel de la liste des pays synchronisée
            this.getProjetSynchro();
        },
        methods: {
              async getProjetSynchro(){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                const dbProjet= collection(firestore, "Projet");
                // Liste des pays synchronisée
                const query = await onSnapshot(dbProjet, (snapshot) =>{
                    //  Récupération des résultats dans listePaysSynchro
                    // On utilse map pour récupérer l'intégralité des données renvoyées
                    // on identifie clairement le id du document
                    // les rest parameters permet de préciser la récupération de toute la partie data
                    this.listeProjetSynchro = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
                    this.listeProjetSynchro.forEach(function(Projet){
                      const storage = getStorage();
                      const spaceRef = ref(storage, 'ApercuProjet/'+Projet.photo);
                      getDownloadURL(spaceRef)
                      .then((url) => {
                        Projet.photo = url;
                      })
                      .catch((error) =>{
                        console.log('erreur downloadUrl', error)
                      })
                    }) 
                })
            },
            async createProjet(){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                const dbProjet= collection(firestore, "Projet");
                // On passe en paramètre format json
                // Les champs à mettre à jour
                // Sauf le id qui est créé automatiquement
                const docRef = await addDoc(dbProjet,{
                    nom: this.nom,
                    description: this.description,
                    photo: this.photo
                })
                console.log('document créé avec le id : ', docRef.id);
             },
            async updateProjet(Projet){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                // Reference du pays à modifier
                const docRef = doc(firestore, "Projet", Projet.id);
                // On passe en paramètre format json
                // Les champs à mettre à jour
                await updateDoc(docRef, {
                    nom: Projet.nom
                }) 
             },
            async deleteProjet(Projet){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                // Reference du pays à supprimer
                const docRef = doc(firestore, "Projet", Projet.id);
                // Suppression du pays référencé
                await deleteDoc(docRef);
             },
async createProjet(){
            const storage = getStorage();
            const refStorage = ref(storage, 'Projet/'+this.Projet.photo);
            await uploadString(refStorage, this.imageData, 'data_url').then((snapshot) => {
                console.log('Uploaded a base64 string');
                const db = getFirestore();
                const docRef = addDoc(collection(db, 'Projet'), this.Projet);
            });
            this.$router.push('/projets')
        },
},
  name: "App",
  components: { card, Rechercher, Modification, Supprimer, Header1, Footer1, BoutonImage, Creation, RouterLink },
};
</script>