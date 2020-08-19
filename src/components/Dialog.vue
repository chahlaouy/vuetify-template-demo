<!-- eslint-disable -->
<template>
  	<div>
        <v-btn light elevation="0" @click.stop="dialog = true">
            <v-icon left>person</v-icon>
            <span>Ajouter un patient</span>
        </v-btn>
        <v-dialog max-width="800px" v-model="dialog" class="teal">
            <v-card>
                <v-card-title class="headline">
                    Compte rendu
                </v-card-title>
                <v-card-subtitle>
                    Service enfant et adulte
                </v-card-subtitle>
                <v-divider></v-divider>
                <v-card-text>
                    <v-form class="px-3">
                        <v-row>

                            <v-col cols="5">
                                <v-text-field :label="patient.name.label" prepend-icon="description" color="success"></v-text-field>
                            </v-col>
                            <v-col cols="2"></v-col>
                            <v-col cols="5">
                                <v-menu
                                    ref="menu"
                                    v-model="menu"
                                    :close-on-content-click="false"
                                    :return-value.sync="date"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="290px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="patient.date.value"
                                        :label="patient.date.label"
                                        prepend-icon="event"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                    </template>
                                    <v-date-picker v-model="patient.date.value" scrollable color="green">
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                                    <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                                    </v-date-picker>
                                </v-menu>

                                
                            </v-col>
        
                            <v-col cols="5">
                                <v-text-field :label="patient.age.label" prepend-icon="description" color="success"></v-text-field>
                            </v-col>
                            <v-col cols="2"></v-col>
                            <v-col cols="5">
                                <v-text-field :label="patient.folder.label" prepend-icon="description" color="success"></v-text-field>
                            </v-col>

                            <v-col cols="5">
                                <v-select
                                    :items="patient.gender.value"
                                    :label="patient.gender.label"
                                    solo
                                >
                                </v-select>
                            </v-col>
                            <v-col cols="2"></v-col>    
                            <v-col cols="5">
                                <v-text-field :label="patient.id.label" prepend-icon="description" color="success"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field :label="patient.doctor.label" prepend-icon="description" color="success"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-textarea :label="patient.antPatient.label" prepend-icon="description" color="success"></v-textarea>
                            </v-col>
                        </v-row>
                        
                        <v-row>
                            <v-col cols="12">
                                <v-textarea :label="patient.physiqueSymp.label" prepend-icon="description" color="success"></v-textarea>
                            </v-col>
                        </v-row>
                        
                        <v-row>
                            <v-col cols="12">
                                <v-textarea :label="patient.deseaseHistory.label" prepend-icon="description" color="success"></v-textarea>
                            </v-col>
                        </v-row>
                        
                        <v-row>
                            <v-col cols="12">
                                <v-textarea :label="patient.traitement.label" prepend-icon="description" color="success"></v-textarea>
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
        }
    },
    data(){
        return {
            dialog: false,
            date: new Date().toISOString().substr(0, 10),
            menu: false,
        }
    }
}
</script>

<style>

</style>