import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ContactView from '../views/ContactView.vue';
import MentionslegalesView from '../views/MentionslegalesView.vue';
import LoginView from '../views/LoginView.vue';
import ProfilView from '../views/ProfilView.vue';
import View404 from '../views/View404.vue';

import CreateProjets from '../views/projets/CreateView.vue';
import UpdateProjets from '../views/projets/UpdateView.vue';
import DeleteProjets from '../views/projets/DeleteView.vue';
import ListeProjets from '../views/projets/ListeView.vue';
import idprojet from  '../views/projets/[id].vue'

import CreateDesign from '../views/design/CreateView.vue';
import UpdateLogicielDesign from '../views/design/UpdateView.vue';
import DeleteLogicielDesign from '../views/design/DeleteView.vue';

import CreateDev from '../views/dev/CreateView.vue';
import UpdateLogicielDev from '../views/dev/UpdateView.vue';
import DeleteLogicielDev from '../views/dev/DeleteView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/contact', name: 'ContactView', component: ContactView },
    { path: '/mentions', name: 'MentionslegalesView', component: MentionslegalesView },
    { path: '/login', name: 'LoginView', component: LoginView },
    { path: '/profil', name: 'ProfilView', component: ProfilView },

    { path: '/:pathMatch(.*)*', name: 'View404', component: View404 },


    { path: '/projets', name: 'ListeProjets', component: ListeProjets },
    { path: '/projet/:id', name: 'idprojet', component: idprojet },
    { path: '/createProjet', name: 'CreateProjets', component: CreateProjets  },
    { path: '/updateProjets/:id', name: 'UpdateProjets', component: UpdateProjets },
    { path: '/deleteProjets/:id', name: 'DeleteProjets', component: DeleteProjets },

    { path: '/createDesign', name: 'CreateDesign', component: CreateDesign  },
    { path: '/updateDesign/:id', name: 'UpdateLogicielDesign', component: UpdateLogicielDesign },
    { path: '/deleteDesign/:id', name: 'DeleteLogicielDesign', component: DeleteLogicielDesign },

    { path: '/createDev', name: 'CreateDev', component: CreateDev  },
    { path: '/updateDev/:id', name: 'UpdateLogicielDev', component: UpdateLogicielDev },
    { path: '/deleteDev/:id', name: 'DeleteLogicielDev', component: DeleteLogicielDev },

  ]
})


export default router
