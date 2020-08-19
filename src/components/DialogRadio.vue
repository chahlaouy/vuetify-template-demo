<!-- eslint-disable -->
<template>
  	<div>
        <v-btn light elevation="0" @click.stop="dialog = true">
            <v-icon left>person</v-icon>
            <span> Compte Rendu d'examen radiologie </span>
        </v-btn>
        
        <v-dialog max-width="800px" v-model="dialog">
            <v-card>
                <v-card-title class="headline">
                    Compte rendu
                </v-card-title>
                <v-card-subtitle>
                    Service radiologie
                </v-card-subtitle>
                <v-divider></v-divider>
                <v-card-text>
                    <v-form class="px-3">
                        <v-row>

                            <v-col cols="5">
                                <v-text-field :label="patient.name.label" v-model="patient.name.value" prepend-icon="description" color="success" disabled></v-text-field>
                            </v-col>
                            <v-col cols="2"></v-col>
                            <v-col cols="5">
                                <v-text-field :label="patient.date.label" v-model="patient.date.value" prepend-icon="description" color="success" disabled></v-text-field>
                            </v-col>
        
                            <v-col cols="5">
                                <v-text-field :label="patient.age.label" prepend-icon="description" color="success" v-model="patient.age.value" disabled></v-text-field>
                            </v-col>
                            <v-col cols="2"></v-col>
                            <v-col cols="5">
                                <v-text-field :label="patient.folder.label" prepend-icon="description" color="success" v-model="patient.folder.value" disabled></v-text-field>
                            </v-col>

                            <v-col cols="5">
                                <v-text-field :label="patient.gender.label" v-model="patient.gender.value" prepend-icon="description" color="success" disabled></v-text-field>
                            </v-col>
                            <v-col cols="2"></v-col>    
                            <v-col cols="5">
                                <v-text-field :label="patient.id.label" prepend-icon="description" color="success" v-model="patient.id.value" disabled></v-text-field>
                            </v-col>
                        </v-row>
                        
                        <v-row>
                            <v-col cols="12">
                                <v-textarea :label="radio.clinicalRens.label" prepend-icon="description" color="success"></v-textarea>
                            </v-col>
                        </v-row>
                        
                        <v-row>
                            <v-col cols="12">
                                <v-textarea :label="radio.technique.label" prepend-icon="description" color="success"></v-textarea>
                            </v-col>
                        </v-row>
                        
                        <v-row>
                            <v-col cols="12">
                                <v-textarea :label="radio.resultat.label" prepend-icon="description" color="success"></v-textarea>
                            </v-col>
                        </v-row>
                        
                        <v-row>
                            <v-col cols="12">
                                <v-textarea :label="radio.diagnostic.label" prepend-icon="description" color="success"></v-textarea>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-btn depressed color="success">
                        <v-icon left>
                            done
                        </v-icon>
                        <span>Confimer</span>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
  	</div>
</template>

<script>
/* eslint-disable */
export default {
    props: {
        patient: {
            type: Object,
            required: true
        },
        radio: {
            type: Object,
            required: true
        },
    },
    data(){
        return {
            dialog: false,
        }
    }
}
</script>

<style>

</style>