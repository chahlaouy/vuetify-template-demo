<!-- eslint-disable -->
<template>

    <nav>
        <v-app-bar
            dense
            light
            flat
            app
        >
            <v-app-bar-nav-icon
                @click="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>Dashboard</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>exit_to_app</v-icon>
            </v-btn>  
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            left
            dark
            app
            color="indigo accent-4"
            expand-on-hover
            mini-variant="true"
            mini-variant-width="56px"
        >
            <v-list-item class="mt-8">
                <v-list-item-content>
                    <v-list-item-title class="title">
                        Hospital App
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        subtext
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list class="mt-12">
            <v-list-item
                v-for="item in links"
                :key="item.title"
                :to="item.link"
                link
            >
                <v-list-item-icon>
                    <v-icon>{{item.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>{{item.title}}</v-list-item-content>
            </v-list-item>
        </v-list>
        <template v-slot:append>
            <div class="pa-2">
                
                <v-btn block text >
                    <span>Logout</span>
                    <v-icon right>exit_to_app</v-icon>
                </v-btn>
            </div>
        </template>
        </v-navigation-drawer>
    </nav>
</template>

<script>
/* eslint-disable */

export default {
    data(){
        return {
            drawer: false,
            links:[
                {title: "Dashboard", link: "/dashboard", icon:"dashboard"},
                {title: "service 1", link: "/service-1", icon:"line_weight"},
                {title: "service 2", link: "/service-2", icon:"tab"},
                {title: "service 3", link: "/service-3", icon:"toc"},
                {title: "service 4", link: "/service-4", icon:"view_agenda"}
            ]
        }
    },
    components: {
    
    },
    mounted(){

    }
}
</script>

<style>

</style>