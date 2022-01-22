<template>
    <v-toolbar dark flat class="text-overline">
        <v-avatar tile>
            <img src="logo.png" alt="AptWorld Logo">
        </v-avatar>
        APTWORLD
        <v-spacer></v-spacer>
        <v-tabs right >
            <v-tab class="text-overline" to="/">Home</v-tab>
            <v-tab class="text-overline">Contact Us</v-tab>
        </v-tabs>
    </v-toolbar>
</template>

<script>
export default {
    data () {
        return {

        }
    }
}
</script>