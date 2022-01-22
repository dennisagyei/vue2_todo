<template>
  <v-app>
      <!-- Sizes your content based upon application components -->
        <v-main>

            <!-- If using vue-router -->
            <router-view></router-view>
        </v-main>

  </v-app>
</template>

<script>
export default {
    name: 'App'
};
</script>