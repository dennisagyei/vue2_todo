<template>
   
        <v-dialog v-model="deleteDialog" persistent max-width="290" >
            <v-card>
                <v-card-title>
                    <v-row justify="center"> <v-icon x-large color="error">mdi-close-octagon</v-icon> </v-row>
                   
                
                </v-card-title>
                <v-card-text>Do you really want to delete this task?</v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="deleteDialog = false" >No</v-btn>
                <v-btn color="error" text @click="deleteDialog = false">Yes</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    

</template>

<script>
export default {
    props: ['id'],
    data () {
        return {
            deleteDialog : false,
        }
    },

    methods :{
        open() {
            this.deleteDialog=true;
        }

    }
}
</script>