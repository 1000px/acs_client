<template>
    <v-container fluid>
        <v-row>
            <v-col 
                cols="4"
            >
                <v-card 
                    class="max-auto create-site" 
                    tile
                    hover
                    align="center"
                    style="height: 100%; min-height: 300px;"
                    @click="createSite"
                >
                    <v-icon size="24">fa fa-plus</v-icon>
                </v-card>
            </v-col>
            <v-col cols="4"
                v-for="site in sites"
                :key="site.id"
            >
                <v-card class="mx-auto pb-1">
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
                        <v-btn outlined color="primary" class="ml-2">访问网站</v-btn>
                        <v-btn outlined color="warning">运行状态</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        
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
    },
    methods: {
        createSite: function () {
            this.$router.push({ name: 'NewWeb' })
        }
    }
};
</script>

<style scoped>
.site-card {
    float: left;
    margin-bottom: 32px;
}
.create-site {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>