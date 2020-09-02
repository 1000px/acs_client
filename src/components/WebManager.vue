<template>
    <v-container fluid>
        <v-card
            class="mx-auto site-card"
            max-width="400px"
            v-for="site in sites"
            :key="site.id"
        >
            <v-img class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
            </v-img>
            <v-card-title class="pd-0">{{ site.sitename }}</v-card-title>
            <v-card-text class="text--primary">
                <div>{{ site.desc }}</div>
            </v-card-text>

            <v-card-actions>
                <v-btn color="blue" text>访问</v-btn>
                <v-btn color="blue" text>图标</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
import api from '../request/api'
export default {
    name: 'WebManager',
    data: () => ({
        msg: 'Web Manager',
        sites: []
    }),
    mounted () {
        api.getSites({}).then(res => {
            this.sites = res.sites
        }, err => {
            console.log(err)
        })
    }
}
</script>

<style scoped>
.site-card {
    float: left;
    margin-right: 20px;
    margin-bottom: 32px;
}
</style>