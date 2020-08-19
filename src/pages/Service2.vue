
<!-- eslint-disable -->
<template>
    <div>
        <v-subheader>Service Radiologie</v-subheader>
        <v-container class="mt-12">
            <v-row>
                <v-col cols="6">
                    <dialog-radio :p="patient" :rad="radio" :dialog="dialog"></dialog-radio>
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

                <v-col cols="3" align="center">
                    <div class="caption grey--text">
                        Compte Rendu d'examen radiologie
                    </div>
                    <div>
                        <v-btn fab dark color="indigo" small class="my-3" elevation="0" @click.stop="passData(patient), toggleDialog()" >
							<v-icon dark>mdi-plus</v-icon>
						</v-btn>
                    </div>
                </v-col>
                
            </v-row>
        </v-container>
    </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex'
import DialogRadio from '@/components/DialogRadio'

export default {
    data(){
		return{
			listPatients:[],
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
            },
			dialog: false,
            radio:{
                clinicalRens:{
                    label: 'Renseignement clinique',
                    title: 'clinicalRens',
                    value: ''
                },
                technique:{
                    label: 'Technique',
                    title: 'technique',
                    value: ''
                },
                resultat:{
                    label: 'Resultat',
                    title: 'resultat',
                    value: ''
                },
                diagnostic:{
                    label: 'Diagnostic',
                    title: 'diagnostic',
                    value: ''
				}
            },
        }
	},
	methods: {
		passData(p){
			this.patient = p
		},
		toggleDialog(){
			this.dialog = true
		}
	},
    computed:{
        ...mapGetters({
            listPatient: 'getPatients'
        })
    },
    components:{
        DialogRadio
    }
}
</script>

<style scoped>
    .border-left-indigo{
        border-left: 10px solid #f39bb8 !important;
    }
</style>