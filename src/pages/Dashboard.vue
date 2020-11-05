<!-- eslint-disable -->
<template>
  	<div>
      	<v-subheader>Dashboard page</v-subheader>
      	<v-container class="mt-5">
			  <v-row>
				<v-col cols="6" v-for="service in listServices" :key="service.name">
					<v-card
					:color="service.color"
					dark
					>
						<v-card-title class="headline">{{service.name}}</v-card-title>

						<v-card-subtitle>{{service.description}}</v-card-subtitle>

						<v-card-actions>
							<v-btn text :to="service.link">Ouvrir Interface</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
				
			</v-row>
      	</v-container>
  	</div>
</template>

<script>
/* eslint-disable */
export default {
	data(){
		return {
			listServices: [
				{name: 'Service orthopédie enfant et adulte', description: 'Service orthopédie enfant et adulte', color:"#385F73", link: "/service-medecine"},
				{name: 'Service Radiologie', description: 'Service Radiologie', color:"#e91f63", link:"/service-radiologie"},
				{name: 'Laboratoire Histopathologie', description: 'Laboratoire Histopathologie', color:"#1f7086", link: "/laboratoire-histopathologie"},
				{name: 'Bloc traumatologie et chirurgie orthopédique', description: 'Bloc traumatologie et chirurgie orthopédique', color:"#952174", link: "/operation-chirurgie"},
				{name: 'Service Oncologie', description: 'Service Oncologie', color:"#28c6da", link: "/service-oncologie"},
				{name: "Service d'hématologie et greffe ", description: "Service d'hématologie et greffe de la moelle osseuse", color:"#e2bedf", link: "/service-oncologie"},
				{name: 'Service hospitalisation', description: 'Service hospitalisation', color:"#28c6da", link: "/service-oncologie"}
			]
		}
	}
}
</script>

<style>

</style>