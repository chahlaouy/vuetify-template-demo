<!-- eslint-disable -->
<template>
  	<div>
        <v-dialog max-width="800px" v-model="dialog">
            <v-card>
                <v-card-title class="headline">
                    Compte rendu
                </v-card-title>
                <v-card-subtitle>
                    Service Histopathologie
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
                                <v-text-field label="Service demandeur" value="service radiologie" prepend-icon="description" color="success" disabled></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-textarea :label="radio.prevName.label" prepend-icon="description" color="success"></v-textarea>
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
                                <v-textarea :label="radio.conclusion.label" prepend-icon="description" color="success"></v-textarea>
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
        p: {
            type: Object,
            required: true
        },
        rad: {
            type: Object,
            required: true
        },
        dialog: {
            type: Boolean,
            required: true
        },
    },
    data(){
        return {
        }
    },
    computed: {
       patient(){
           return this.p
       },
       radio(){
           return this.rad
       },
       
    }
}
</script>

<style>

</style>