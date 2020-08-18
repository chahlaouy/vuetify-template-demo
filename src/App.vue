<template>
	<v-app class="grey lighten-4">
		<navbar></navbar>
		<v-main class="mx-4">
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script>
import Navbar from './components/Navbar'
export default {
	name: 'App',
	data(){
		return {

		}
	},
	components:{
		Navbar
	}
};
</script>
