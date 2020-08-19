<!-- eslint-disable -->
<template>
  	<div>
        <v-btn light elevation="0" @click.stop="dialog = true">
            <v-icon left>person</v-icon>
            <span>Ajouter un patient</span>
        </v-btn>
        <v-dialog max-width="800px" v-model="dialog">
            <v-card>
                <v-card-title>
                    <subheading>Ajouter un Patient</subheading>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-form class="px-3">
                        <v-row>
                            <v-col cols="6">
                                <v-text-field label="nom et prenom" prepend-icon="description"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field label="nom et prenom" prepend-icon="description"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field label="nom et prenom" prepend-icon="description"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field label="nom et prenom" prepend-icon="description"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-textarea label="diagnostic" prepend-icon="description"></v-textarea>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
  	</div>
</template>

<script>
/* eslint-disable */
export default {
    data(){
        return {
            dialog: false
        }
    }
}
</script>

<style>

</style>