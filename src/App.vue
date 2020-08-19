<template>
	<v-app >
		<navbar></navbar>
		<v-main class="ml-4 grey lighten-4">
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
