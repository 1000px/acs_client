<template>
    <v-container fluid>
        <v-navigation-drawer
            :value="navShown"
            color="blue"
            app
            >
            <v-img src="../assets/logo-circle.png"
                width="90"
                height="90"
                contain
                style="margin: 24px auto;"
            ></v-img>
            <div class="text-p text-center ma-2 white--text">索亚图建站系统</div>
            <!-- <v-divider color="white" class="ma-3"></v-divider> -->
            <v-list
                dense
                class="nav-list"
                >
                <v-list-item 
                    v-for="nav in navs" 
                    :key="nav.title">
                    <v-list-item-icon><v-icon size="18">{{ nav.icon }}</v-icon></v-list-item-icon>
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
            { title: '用户管理', icon: 'fa fa-users', href: '/mng/user' },
            { title: '网站管理', icon: 'fa fa-server', href: '/mng/web' }
        ],
        expandOnHover: true
    }),
    components: {
        VHeader
    },
    computed: {
        navShown () {
            return this.$store.state.navShown
        },
        breadcrumbs () {
            return this.$store.state.breads
        }
    }
};
</script>

<style>
.v-list-item {
    padding: 0 75px;
}
.v-application--is-ltr .v-list-item__icon:first-child {
    margin-right: 12px;
}
.v-application .nav-list {
    color: #ffffff;
}
.v-application .nav-list a,
.v-application .nav-list i {
    color: #ffffff;
    text-decoration-line: none;
}
.v-application .nav-list a:hover,
.v-application .nav-list a:active {
    color: #aaaaaa;
    text-decoration-line: none;
}
</style>
