<template>
    <v-container fluid>
        <v-navigation-drawer
            :value="navShown"
            color="blue"
            app
            >
            <v-list
                dense
                class="nav-list"
                >
                <v-list-item 
                    v-for="nav in navs" 
                    :key="nav.title">
                    <v-list-item-icon><v-icon>{{ nav.icon }}</v-icon></v-list-item-icon>
                    <v-list-item-content>
                        <router-link :to="nav.href">{{ nav.title }}</router-link>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-main>
            <v-container
                class="fill-height"
                fluid
            >
                <v-row>
                    <v-col>
                        <v-header></v-header>
                        <v-breadcrumbs :items="breadcrumbs">
                            <template v-slot:divider>
                                <v-icon>mdi-forward</v-icon>
                            </template>
                        </v-breadcrumbs>
                        <router-view></router-view>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <v-navigation-drawer
            v-model="cover"
            fixed
            temporary
        >
        </v-navigation-drawer>
    </v-container>
</template>

<script>
import VHeader from '../components/Header'
export default {
    name: 'Manager',
    data: () => ({
        cover: false,
        navs: [
            { title: '用户管理', icon: 'mdi-view-dashboard', href: '/mng/user' },
            { title: '网站管理', icon: 'mdi-image', href: '/mng/web' }
        ],
        breadcrumbs: [
            {
                text: '控制中心',
                disabled: false,
                href: 'breadcrumbs_dashboard'
            },
            {
                text: '用户管理',
                disabled: false,
                href: 'breadcrumbs_link_1'
            },
            {
                text: '1000px',
                disabled: true,
                href: 'breadcrumbs_link_2'
            }
        ],
        expandOnHover: true
    }),
    components: {
        VHeader
    },
    computed: {
        navShown () {
            return this.$store.state.navShown
        }
    }
}
</script>

<style>
.v-list-item {
    padding: 0 75px;
}
.v-application--is-ltr .v-list-item__icon:first-child {
    margin-right: 12px;
}
.v-application .nav-list a {
    color: #ffffff;
    text-decoration-line: none;
}
.v-application .nav-list a:hover,
.v-application .nav-list a:active {
    color: #aaaaaa;
    text-decoration-line: none;
}
</style>
