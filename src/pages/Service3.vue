<!-- eslint-disable -->
<template>
    <div>
        <v-subheader>Laboratoire Histopathologie</v-subheader>
        <v-container class="mt-12">
            <v-row>
                <v-col cols="6">
                    <dialog-histo :p="patient" :rad="histo" :dialog="dialog"></dialog-histo>
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
                        Compte Rendu de l' anatomopathologie
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
import DialogHisto from '@/components/DialogHisto'

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
            histo:{
                prevName:{
                    label: 'Nom du prélevant',
                    title: 'prevName',
                    value: ''
                },
                technique:{
                    label: 'Technique',
                    title: 'technique',
                    value: ''
                },
                resultat:{
                    label: 'Résultat',
                    title: 'resultat',
                    value: ''
                },
                conclusion:{
                    label: 'Conclusion',
                    title: 'conclusion',
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
        DialogHisto
    }
}
</script>

<style scoped>
    .border-left-indigo{
        border-left: 10px solid #f39bb8 !important;
    }
</style>
