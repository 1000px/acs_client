<template>
    <v-app id="inspire">
        <v-app-bar
            app
            clipped-right
            color="blue-grey"
            dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>工具栏</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight"></v-app-bar-nav-icon>
        </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        app
        >
        <v-list dense>
            <v-list-item @click.stop="left = !left">
            <v-list-item-action>
                <v-icon>mdi-exit-to-app</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>这是左侧</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
        v-model="left"
        fixed
        temporary
    ></v-navigation-drawer>

    <v-main>
        <v-container
            class="fill-height"
            fluid
        >
            <v-row
                justify="center"
                align="center"
            >
                <v-col class="shrink">
                    <h2>中间内容区域</h2>
                </v-col>
            </v-row>
        </v-container>
    </v-main>

    <v-footer
        app
        color="blue-grey"
        class="white--text"
        >
        <span>Vuetify</span>
        <v-spacer></v-spacer>
        <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
        source: String,
    },
    data: () => ({
        drawer: null,
        drawerRight: null,
        right: false,
        left: false,
    }),
  }
</script>