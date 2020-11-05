import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    namespaced: true,
    state: {
        listPatients: [
            {
                name:{label: 'Nom et prénom', title: 'name',value: 'ben foulen adel'},
                age:{label: 'Age',title: 'age',value: '15'},
                gender:{label: 'Sex',title: 'gender',value: 'Homme'},
                date:{label: 'Date',title: 'date',value: '21/01/1991'},
                folder:{label: 'Num dossier',title: 'folder',value: '001'},
                id:{label: 'Identifiant',title: 'id',value: '001'},
                doctor:{label: 'Medecin traitant',title: 'doctor',value: 'Dr ben.Hajer'},
                antPatient:{label: 'Les antécedants du patient',title: 'antPatient',value: 'lorem ip sum'},
                physiqueSymp:{label: 'Les symptomes et signes physiques',title: 'id',value: 'lorem ip sum'},
                deseaseHistory:{label: "l'ancieneté de la maladie et son évolution",title: 'deseaseHistory',value: 'lorem ip sum'},
                traitement:{label: "Les traitement déja suivie",title: 'treatement',value: 'lorem ip sum'},
                diagnosticOrientation:{label: "Orientation diagnostic",title: 'diagnosticOrientation',value: 'lorem ip sum' }
            },
            {
                name:{label: 'Nom et prénom', title: 'name',value: 'ben foulen amira'},
                age:{label: 'Age',title: 'age',value: '15'},
                gender:{label: 'Sex',title: 'gender',value: 'Femme'},
                date:{label: 'Date',title: 'date',value: '21/01/1991'},
                folder:{label: 'Num dossier',title: 'folder',value: '002'},
                id:{label: 'Identifiant',title: 'id',value: '003'},
                doctor:{label: 'Medecin traitant',title: 'doctor',value: 'Dr ben.Hajer'},
                antPatient:{label: 'Les antécedants du patient',title: 'antPatient',value: 'lorem ip sum'},
                physiqueSymp:{label: 'Les symptomes et signes physiques',title: 'id',value: 'lorem ip sum'},
                deseaseHistory:{label: "l'ancieneté de la maladie et son évolution",title: 'deseaseHistory',value: 'lorem ip sum'},
                traitement:{label: "Les traitement déja suivie",title: 'treatement',value: 'lorem ip sum'},
                diagnosticOrientation:{label: "Orientation diagnostic",title: 'diagnosticOrientation',value: 'lorem ip sum' }
            },
            {
                name:{label: 'Nom et prénom', title: 'name',value: 'ben foulen nawress'},
                age:{label: 'Age',title: 'age',value: '15'},
                gender:{label: 'Sex',title: 'gender',value: 'Femme'},
                date:{label: 'Date',title: 'date',value: '21/01/1991'},
                folder:{label: 'Num dossier',title: 'folder',value: '003'},
                id:{label: 'Identifiant',title: 'id',value: '001'},
                doctor:{label: 'Medecin traitant',title: 'doctor',value: 'Dr ben.Hajer'},
                antPatient:{label: 'Les antécedants du patient',title: 'antPatient',value: 'lorem ip sum'},
                physiqueSymp:{label: 'Les symptomes et signes physiques',title: 'id',value: 'lorem ip sum'},
                deseaseHistory:{label: "l'ancieneté de la maladie et son évolution",title: 'deseaseHistory',value: 'lorem ip sum'},
                traitement:{label: "Les traitement déja suivie",title: 'treatement',value: 'lorem ip sum'},
                diagnosticOrientation:{label: "Orientation diagnostic",title: 'diagnosticOrientation',value: 'lorem ip sum' }
            },
            {
                name:{label: 'Nom et prénom', title: 'name',value: 'ben foulen nawress'},
                age:{label: 'Age',title: 'age',value: '15'},
                gender:{label: 'Sex',title: 'gender',value: 'Femme'},
                date:{label: 'Date',title: 'date',value: '21/01/1991'},
                folder:{label: 'Num dossier',title: 'folder',value: '003'},
                id:{label: 'Identifiant',title: 'id',value: '001'},
                doctor:{label: 'Medecin traitant',title: 'doctor',value: 'Dr ben.Hajer'},
                antPatient:{label: 'Les antécedants du patient',title: 'antPatient',value: 'lorem ip sum'},
                physiqueSymp:{label: 'Les symptomes et signes physiques',title: 'id',value: 'lorem ip sum'},
                deseaseHistory:{label: "l'ancieneté de la maladie et son évolution",title: 'deseaseHistory',value: 'lorem ip sum'},
                traitement:{label: "Les traitement déja suivie",title: 'treatement',value: 'lorem ip sum'},
                diagnosticOrientation:{label: "Orientation diagnostic",title: 'diagnosticOrientation',value: 'lorem ip sum' }
            },
            {
                name:{label: 'Nom et prénom', title: 'name',value: 'ben foulen nawress'},
                age:{label: 'Age',title: 'age',value: '15'},
                gender:{label: 'Sex',title: 'gender',value: 'Femme'},
                date:{label: 'Date',title: 'date',value: '21/01/1991'},
                folder:{label: 'Num dossier',title: 'folder',value: '003'},
                id:{label: 'Identifiant',title: 'id',value: '001'},
                doctor:{label: 'Medecin traitant',title: 'doctor',value: 'Dr ben.Hajer'},
                antPatient:{label: 'Les antécedants du patient',title: 'antPatient',value: 'lorem ip sum'},
                physiqueSymp:{label: 'Les symptomes et signes physiques',title: 'id',value: 'lorem ip sum'},
                deseaseHistory:{label: "l'ancieneté de la maladie et son évolution",title: 'deseaseHistory',value: 'lorem ip sum'},
                traitement:{label: "Les traitement déja suivie",title: 'treatement',value: 'lorem ip sum'},
                diagnosticOrientation:{label: "Orientation diagnostic",title: 'diagnosticOrientation',value: 'lorem ip sum' }
            },
            {
                name:{label: 'Nom et prénom', title: 'name',value: 'ben foulen nawress'},
                age:{label: 'Age',title: 'age',value: '15'},
                gender:{label: 'Sex',title: 'gender',value: 'Femme'},
                date:{label: 'Date',title: 'date',value: '21/01/1991'},
                folder:{label: 'Num dossier',title: 'folder',value: '003'},
                id:{label: 'Identifiant',title: 'id',value: '001'},
                doctor:{label: 'Medecin traitant',title: 'doctor',value: 'Dr ben.Hajer'},
                antPatient:{label: 'Les antécedants du patient',title: 'antPatient',value: 'lorem ip sum'},
                physiqueSymp:{label: 'Les symptomes et signes physiques',title: 'id',value: 'lorem ip sum'},
                deseaseHistory:{label: "l'ancieneté de la maladie et son évolution",title: 'deseaseHistory',value: 'lorem ip sum'},
                traitement:{label: "Les traitement déja suivie",title: 'treatement',value: 'lorem ip sum'},
                diagnosticOrientation:{label: "Orientation diagnostic",title: 'diagnosticOrientation',value: 'lorem ip sum' }
            },
            {
                name:{label: 'Nom et prénom', title: 'name',value: 'ben foulen nawress'},
                age:{label: 'Age',title: 'age',value: '15'},
                gender:{label: 'Sex',title: 'gender',value: 'Femme'},
                date:{label: 'Date',title: 'date',value: '21/01/1991'},
                folder:{label: 'Num dossier',title: 'folder',value: '003'},
                id:{label: 'Identifiant',title: 'id',value: '001'},
                doctor:{label: 'Medecin traitant',title: 'doctor',value: 'Dr ben.Hajer'},
                antPatient:{label: 'Les antécedants du patient',title: 'antPatient',value: 'lorem ip sum'},
                physiqueSymp:{label: 'Les symptomes et signes physiques',title: 'id',value: 'lorem ip sum'},
                deseaseHistory:{label: "l'ancieneté de la maladie et son évolution",title: 'deseaseHistory',value: 'lorem ip sum'},
                traitement:{label: "Les traitement déja suivie",title: 'treatement',value: 'lorem ip sum'},
                diagnosticOrientation:{label: "Orientation diagnostic",title: 'diagnosticOrientation',value: 'lorem ip sum' }
            },
            {
                name:{label: 'Nom et prénom', title: 'name',value: 'ben foulen nawress'},
                age:{label: 'Age',title: 'age',value: '15'},
                gender:{label: 'Sex',title: 'gender',value: 'Femme'},
                date:{label: 'Date',title: 'date',value: '21/01/1991'},
                folder:{label: 'Num dossier',title: 'folder',value: '003'},
                id:{label: 'Identifiant',title: 'id',value: '001'},
                doctor:{label: 'Medecin traitant',title: 'doctor',value: 'Dr ben.Hajer'},
                antPatient:{label: 'Les antécedants du patient',title: 'antPatient',value: 'lorem ip sum'},
                physiqueSymp:{label: 'Les symptomes et signes physiques',title: 'id',value: 'lorem ip sum'},
                deseaseHistory:{label: "l'ancieneté de la maladie et son évolution",title: 'deseaseHistory',value: 'lorem ip sum'},
                traitement:{label: "Les traitement déja suivie",title: 'treatement',value: 'lorem ip sum'},
                diagnosticOrientation:{label: "Orientation diagnostic",title: 'diagnosticOrientation',value: 'lorem ip sum' }
            },
        ]  
            
    },
    getters: {
        getPatients: state => {
            return state.listPatients;
        }
    },
    mutations: {

    },
    actions: {

    }
});