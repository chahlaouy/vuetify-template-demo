<!-- eslint-disable -->
<template>
    <div>
        <v-subheader>Service Medecine</v-subheader>
        <v-container class="mt-12">
            <v-row>
                <v-col cols="6">
                    <Dialog :patient="patient"></Dialog>
                </v-col>
            </v-row>
            <v-row v-for="patient in listPatient" :key="patient.folder.value" class="white border-left-indigo my-2">
                
                <v-col cols="3">
                    <div class="caption grey--text">
                        {{patient.folder.label}}
                    </div>
                    <div>
                        {{patient.folder.value}}
                    </div>
                </v-col>

                <v-col cols="3">
                    <div class="caption grey--text">
                        {{patient.name.label}}
                    </div>
                    <div>
                        {{patient.name.value}}
                    </div>
                </v-col>

                <v-col cols="3">
                    <div class="caption grey--text">
                        {{patient.doctor.label}}
                    </div>
                    <div>
                        {{patient.doctor.value}}
                    </div>
                </v-col>

                <v-col cols="3">
                    <div class="caption grey--text">
                        {{patient.date.label}}
                    </div>
                    <div>
                        {{patient.date.value}}
                    </div>
                </v-col>
                
            </v-row>
        </v-container>
    </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex'
import Dialog from '@/components/Dialog'

export default {
    data(){
        return{
            patient:{

                name:{
                    label: 'Nom et prénom',
                    title: 'name',
                    value: ''
                },
                age:{
                    label: 'Age',
                    title: 'age',
                    value: ''
                },
                gender:{
                    label: 'Sex',
                    title: 'gender',
                    value: ['Homme', 'Femme', 'Autre']
                },
                date:{
                    label: 'Date',
                    title: 'date',
                    value: ''
                },
                folder:{
                    label: 'Num dossier',
                    title: 'folder',
                    value: ''
                },
                id:{
                    label: 'Identifiant',
                    title: 'id',
                    value: ''
                },
                docter:{
                    label: 'Medecin traitant',
                    title: 'doctor',
                    value: ''
                },
                antPatient:{
                    label: 'Les antécedants du patient',
                    title: 'antPatient',
                    value: ''
                },
                physiqueSymp:{
                    label: 'Les symptomes et signes physiques',
                    title: 'id',
                    value: ''
                },
                deseaseHistory:{
                    label: "l'ancieneté de la maladie et son évolution",
                    title: 'deseaseHistory',
                    value: ''
                },
                traitement:{
                    label: "Les traitement déja suivie",
                    title: 'treatement',
                    value: ''
                }, 
                diagnosticOrientation:{
                    label: "Orientation diagnostic",
                    title: 'diagnosticOrientation',
                    value: ''
                }
            },
            listPatients:[]
        }
    },
    computed:{
        // listPatient(){
        //     return this.$store.state.listPatients
        //     console.log(this.listPatient)
        // }
        ...mapGetters({
            listPatient: 'getPatients'
        })
    },
    components:{
        Dialog
    }
}
</script>

<style scoped>
    .border-left-indigo{
        border-left: 10px solid #f39bb8 !important;
    }
</style>