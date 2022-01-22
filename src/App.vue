<template>
  <v-app id="inspire" :style="{ background: $vuetify.theme.themes.dark.background}">
    <v-navigation-drawer
        v-model="drawer"
        app
     >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Todo App    
          </v-list-item-title>
          <v-list-item-subtitle>
            Best Todo Ever
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar 
      app
      color="#fcb69f"
      dark
      src="https://picsum.photos/800/600"

      >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      
    
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>



      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="mx-4 mb-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
        drawer: null,
        items: [
          { title: 'Todo', icon: 'mdi-view-dashboard', to : '/' },
          { title: 'Sign-up', icon: 'mdi-account-plus-outline' , to : '/signup' },
          { title: 'Projects', icon: 'mdi-domain' , to : '/projects' },
          { title: 'Plant Shop', icon: 'mdi-cannabis' , to : '/plant' },
          { title: 'Team', icon: 'mdi-account-supervisor' , to : '/team' },
          { title: 'About', icon: 'mdi-help-box' , to : '/about' },
        ], 
    }),
  }
</script>